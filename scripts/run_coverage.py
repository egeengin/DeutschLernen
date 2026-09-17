#!/usr/bin/env python3
"""
DeutschLernen — Zero-Dependency Test Coverage Runner
Uses Python standard library `trace` and `unittest` modules to run all tests
and report accurate line-by-line coverage metrics for all project scripts.
"""

import os
import sys
import trace
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)


if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def count_executable_lines(filepath):
    """Finds all true executable line numbers in a Python source file using bytecode compilation."""
    with open(filepath, "r", encoding="utf-8") as f:
        source = f.read()
    try:
        co = compile(source, filepath, "exec")
    except SyntaxError:
        return set()

    executable = set()
    stack = [co]
    while stack:
        code_obj = stack.pop()
        for const in code_obj.co_consts:
            if hasattr(const, "co_code"):
                stack.append(const)
        for _, _, lineno in code_obj.co_lines():
            if lineno and lineno > 0:
                executable.add(lineno)
    return executable


def run_tests_with_coverage():
    print("=" * 70)
    print("DeutschLernen -- Automated Test Suite & Coverage Analysis")
    print("=" * 70)

    # Initialize Trace
    tracer = trace.Trace(count=True, trace=False)

    # Run unittest suite through tracer without sys.exit
    def test_runner():
        loader = unittest.TestLoader()
        suite = loader.discover(os.path.join(ROOT_DIR, "tests"))
        runner = unittest.TextTestRunner(verbosity=2)
        return runner.run(suite)

    test_result = tracer.runfunc(test_runner)

    trace_results = tracer.results()

    print("\n" + "=" * 70)
    print("CODE COVERAGE REPORT")
    print("=" * 70)
    print(f"{'Target File':<42} {'Executable':<12} {'Covered':<10} {'Coverage':<10}")
    print("-" * 74)

    # Target folders to report coverage on
    tracked_dirs = [os.path.join(ROOT_DIR, "scripts"), os.path.join(ROOT_DIR, "tests")]
    
    total_exec = 0
    total_cov = 0

    all_files = []
    for d in tracked_dirs:
        if os.path.exists(d):
            for root, _, files in os.walk(d):
                if "__pycache__" in root or "vocab_sources" in root:
                    continue
                for f in sorted(files):
                    if f.endswith(".py") and f != "run_coverage.py":
                        all_files.append(os.path.join(root, f))

    for fpath in sorted(all_files):
        rel_path = os.path.relpath(fpath, ROOT_DIR).replace("\\", "/")
        executable_lines = count_executable_lines(fpath)
        
        # Count executed lines from tracer
        covered_lines = set()
        for (f_traced, lineno), count in trace_results.counts.items():
            if os.path.abspath(f_traced) == os.path.abspath(fpath) and count > 0:
                if lineno in executable_lines:
                    covered_lines.add(lineno)

        num_exec = len(executable_lines)
        num_cov = len(covered_lines)
        pct = (num_cov / num_exec * 100) if num_exec > 0 else 100.0

        total_exec += num_exec
        total_cov += num_cov

        bar_len = 10
        filled = int(bar_len * (pct / 100.0))
        bar = "#" * filled + "-" * (bar_len - filled)

        print(f"{rel_path:<42} {num_exec:<12} {num_cov:<10} {pct:>5.1f}%  [{bar}]")

    print("-" * 74)
    overall_pct = (total_cov / total_exec * 100) if total_exec > 0 else 100.0
    print(f"{'OVERALL TOTAL':<42} {total_exec:<12} {total_cov:<10} {overall_pct:>5.1f}%")
    print("=" * 70)

    if not test_result.wasSuccessful():
        print(f"\n[FAIL] Test suite failed with {len(test_result.failures)} failures and {len(test_result.errors)} errors.")
        sys.exit(1)
    else:
        print(f"\n[PASS] All {test_result.testsRun} tests passed successfully with zero failures.")
        sys.exit(0)


if __name__ == "__main__":
    run_tests_with_coverage()
