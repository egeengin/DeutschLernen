# -*- coding: utf-8 -*-
import os
import re

fixes = {
    'war': ('part_w_z.py', 'sein'),
    'wurde': ('part_w_z.py', 'werden'),
    'wänden': ('part_w_z.py', 'Wand'),
    'ist': ('part_h_i_j_k.py', 'sein'),
    'jahren': ('part_h_i_j_k.py', 'Jahr'),
    'kinder': ('part_h_i_j_k.py', 'Kind'),
    'sind': ('part_s.py', 'sein'),
    'stunden': ('part_s.py', 'Stunde'),
    'tagen': ('part_t_u_v.py', 'Tag'),
    'damen': ('part_d.py', 'Dame'),
    'herren': ('part_h_i_j_k.py', 'Herr'),
    'vereine': ('part_t_u_v.py', 'Verein'),
    'wassertanks': ('part_w_z.py', 'Wassertank'),
    'zusammenlebens': ('part_w_z.py', 'Zusammenleben')
}

base_dir = os.path.join(os.path.dirname(__file__), 'reading_lexicon_parts')

for word, (fn, correct_disp) in fixes.items():
    fp = os.path.join(base_dir, fn)
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = r'("' + word + r'":\s*\{[^}]*?"displayDe":\s*")[^"]+(")'
    match = re.search(pattern, content)
    if match:
        new_content = re.sub(pattern, r'\g<1>' + correct_disp + r'\g<2>', content)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {word} in {fn} -> displayDe: {correct_disp}")
    else:
        print(f"Pattern not found for {word} in {fn}")
