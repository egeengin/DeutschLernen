import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'telc Deutsch A2-B1' in content:
            # specifically handling "telc Deutsch A2-B1" and "telc Deutsch A2-B1 Sınavı" cases 
            new_content = content.replace('telc Deutsch A2-B1', 'telc Deutsch A2-B1')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

def process_directory(directory="."):
    for root, dirs, files in os.walk(directory):
        if '.git' in root or '.gemini' in root:
            continue
        for file in files:
            if file.endswith(('.md', '.html', '.py')):
                replace_in_file(os.path.join(root, file))

if __name__ == "__main__":
    process_directory(r"c:\Private\DeutschLernen")
