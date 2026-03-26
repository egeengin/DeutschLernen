import glob
import re
import os

def fix_markdown(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # MD060: Fix |---|---| to | --- | --- |
    # First, replace sequences of hyphens between pipes
    # We'll just replace the whole row if it matches a delimiter row
    lines = content.split('\n')
    for i in range(len(lines)):
        if re.match(r'^\|(?:[\-\s]+\|)+$', lines[i].strip()):
            lines[i] = lines[i].replace('|-', '| -').replace('-|', '- |')

    fixed_lines = []
    in_code_block = False
    
    for i, line in enumerate(lines):
        if line.startswith('```'):
            if not in_code_block:
                if fixed_lines and fixed_lines[-1].strip() != '':
                    fixed_lines.append('')
            in_code_block = not in_code_block
            fixed_lines.append(line)
            if not in_code_block and i + 1 < len(lines) and lines[i+1].strip() != '':
                fixed_lines.append('')
            continue

        if re.match(r'^#{1,6}\s', line):
            if fixed_lines and fixed_lines[-1].strip() != '':
                fixed_lines.append('')
            fixed_lines.append(line)
            if i + 1 < len(lines) and lines[i+1].strip() != '':
                fixed_lines.append('')
            continue
            
        # Ensure blank line before/after list
        is_list_item = re.match(r'^(\s*)(\d+\.|-|\*)\s', line)
        if is_list_item:
            prev_line = lines[i-1] if i > 0 else ""
            prev_is_empty_or_list = prev_line.strip() == '' or re.match(r'^(\s*)(\d+\.|-|\*)\s', prev_line) or prev_line.startswith('>')
            if not prev_is_empty_or_list:
                if fixed_lines and fixed_lines[-1].strip() != '' and not re.match(r'^#{1,6}\s', fixed_lines[-1]):
                    fixed_lines.append('')
            
            fixed_lines.append(line)
            
            next_line = lines[i+1] if i + 1 < len(lines) else ""
            next_is_list_or_empty = next_line.strip() == '' or re.match(r'^(\s*)(\d+\.|-|\*)\s', next_line) or next_line.startswith('>')
            if not next_is_list_or_empty:
                fixed_lines.append('')
            continue

        fixed_lines.append(line)
        
    final_content = '\n'.join(fixed_lines)
    # End with exactly one newline
    final_content = final_content.rstrip() + '\n'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(final_content)

for filepath in glob.glob('**/*.md', recursive=True):
    fix_markdown(filepath)
