#!/usr/bin/env python3
"""
DeutschLernen — Feedback Exporter Utility
Exports community feedback records from Cloud Firestore or local JSON dump to CSV/TXT.

Usage:
  python scripts/export_feedback.py --help
  python scripts/export_feedback.py --input feedback_dump.json --output feedback.csv
  python scripts/export_feedback.py --project-id YOUR_PROJECT_ID --api-key YOUR_API_KEY
"""

import argparse
import csv
import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone

DEFAULT_CSV_OUTPUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "feedback_export.csv")

def parse_firestore_fields(doc):
    """Parses raw Firestore REST API document format into a flat Python dict."""
    fields = doc.get("fields", {})
    flat = {}
    name = doc.get("name", "")
    flat["id"] = name.split("/")[-1] if name else doc.get("id", "")
    flat["createTime"] = doc.get("createTime", "")

    for k, v in fields.items():
        if "stringValue" in v:
            flat[k] = v["stringValue"]
        elif "integerValue" in v:
            flat[k] = int(v["integerValue"])
        elif "doubleValue" in v:
            flat[k] = float(v["doubleValue"])
        elif "booleanValue" in v:
            flat[k] = v["booleanValue"]
        elif "timestampValue" in v:
            flat[k] = v["timestampValue"]
        else:
            flat[k] = str(v)
    return flat

def fetch_from_firestore_rest(project_id, api_key=None, auth_token=None):
    """Fetches documents from /feedback collection via Firestore REST API."""
    url = f"https://firestore.googleapis.com/v1/projects/{project_id}/databases/(default)/documents/feedback"
    if api_key:
        url += f"?key={api_key}"

    headers = {"User-Agent": "DeutschLernen-Exporter/1.0"}
    token = auth_token or os.environ.get("FIREBASE_AUTH_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            docs = data.get("documents", [])
            return [parse_firestore_fields(d) for d in docs]
    except urllib.error.HTTPError as e:
        print(f"Error fetching from Firestore REST API: {e.code} - {e.reason}", file=sys.stderr)
        if e.code == 403:
            print("Note: In accordance with firestore.rules, read access to /feedback requires Admin authentication.", file=sys.stderr)
            print("Please provide an Admin bearer token via --auth-token or FIREBASE_AUTH_TOKEN, or use --input <file.json> to export from a local backup.", file=sys.stderr)
        return []
    except Exception as e:
        print(f"Network error: {e}", file=sys.stderr)
        return []

def export_records_to_csv(records, output_csv_path):
    """Writes a list of feedback records to a clean CSV file."""
    headers = [
        "Timestamp",
        "FeedbackID",
        "Username",
        "Location",
        "Category",
        "Rating",
        "Message",
        "Device/UserAgent"
    ]

    os.makedirs(os.path.dirname(os.path.abspath(output_csv_path)), exist_ok=True)

    with open(output_csv_path, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(headers)

        for r in records:
            ts = r.get("createTime") or r.get("timestamp") or datetime.now(timezone.utc).isoformat()
            writer.writerow([
                ts,
                r.get("id", ""),
                r.get("username", "Anonymous"),
                r.get("location", "Unknown"),
                r.get("category", "General"),
                r.get("rating", ""),
                r.get("message", "").replace("\n", " "),
                r.get("userAgent", "")
            ])

    print(f"Successfully exported {len(records)} feedback entries to: {output_csv_path}")

def main():
    parser = argparse.ArgumentParser(description="Export DeutschLernen feedback records to CSV.")
    parser.add_argument("--input", "-i", help="Path to local JSON feedback export file.")
    parser.add_argument("--output", "-o", default=DEFAULT_CSV_OUTPUT, help="Output CSV path (default: feedback_export.csv).")
    parser.add_argument("--project-id", "-p", help="Firebase Project ID to fetch live from Firestore.")
    parser.add_argument("--api-key", "-k", help="Optional Firebase API key for Firestore REST access.")
    parser.add_argument("--auth-token", "-t", help="Optional Firebase ID/Admin token for authorized Firestore reads.")
    parser.add_argument("--sample", action="store_true", help="Generate sample feedback CSV for demonstration/testing.")

    args = parser.parse_args()

    records = []

    if args.sample:
        records = [
            {
                "id": "fb_sample_01",
                "createTime": datetime.now(timezone.utc).isoformat(),
                "username": "Ege",
                "location": "Berlin, Germany",
                "category": "Feature Request",
                "rating": 5,
                "message": "The anti-repetition mode is fantastic. Would love B2 reading mocks as well!",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            },
            {
                "id": "fb_sample_02",
                "createTime": datetime.now(timezone.utc).isoformat(),
                "username": "Ayşe",
                "location": "Istanbul, Turkey",
                "category": "Exam Experience",
                "rating": 5,
                "message": "Passed telc B1 with 274/300! The letter templates in Module 5 were spot on.",
                "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        ]
    elif args.input:
        if not os.path.exists(args.input):
            print(f"Input file not found: {args.input}", file=sys.stderr)
            sys.exit(1)
        with open(args.input, "r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, list):
                records = data
            elif isinstance(data, dict):
                records = data.get("documents", data.get("feedback", [data]))
                if records and "fields" in records[0]:
                    records = [parse_firestore_fields(d) for d in records]
    elif args.project_id:
        records = fetch_from_firestore_rest(args.project_id, args.api_key, args.auth_token)
    else:
        print("No source specified. Use --sample, --input <file.json>, or --project-id <id>.")
        print("Running with --sample for demonstration...")
        return main_sample_fallback(args.output)

    export_records_to_csv(records, args.output)

def main_sample_fallback(output_path):
    sample_records = [
        {
            "id": "fb_demo_01",
            "createTime": datetime.now(timezone.utc).isoformat(),
            "username": "Learner",
            "location": "Munich, Germany",
            "category": "General",
            "rating": 5,
            "message": "Very clean PWA and audio pronunciation works smoothly.",
            "userAgent": "Chrome/122.0.0.0"
        }
    ]
    export_records_to_csv(sample_records, output_path)

if __name__ == "__main__":
    main()
