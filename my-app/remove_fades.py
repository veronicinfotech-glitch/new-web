import os
import glob
import re

components_dir = '/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components'
files = glob.glob(os.path.join(components_dir, '*.js'))

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace initial="hidden" with initial="visible"
    new_content = re.sub(r'initial="hidden"', 'initial="visible"', content)
    
    # Replace initial={{ opacity: 0 ... }} with initial={{ opacity: 1 }}
    # Need a regex that finds initial={{ ... opacity: 0 ... }}
    # A simpler way is to just replace opacity: 0 with opacity: 1 inside initial={{}}
    new_content = re.sub(r'(initial=\{\{[^}]*?opacity:\s*)0(,[^}]*?\}\})', r'\g<1>1\2', new_content)
    new_content = re.sub(r'(initial=\{\{[^}]*?opacity:\s*)0(\s*\}\})', r'\g<1>1\2', new_content)

    # Also replace initial={{ opacity: 0 }}
    new_content = new_content.replace('initial={{ opacity: 0 }}', 'initial={{ opacity: 1 }}')
    new_content = new_content.replace('initial={{ opacity: 0, y: 20 }}', 'initial={{ opacity: 1, y: 0 }}')
    new_content = new_content.replace('initial={{ opacity: 0, y: 15 }}', 'initial={{ opacity: 1, y: 0 }}')
    new_content = new_content.replace('initial={{ opacity: 0, x: -20 }}', 'initial={{ opacity: 1, x: 0 }}')
    new_content = new_content.replace('initial={{ opacity: 0, x: 20 }}', 'initial={{ opacity: 1, x: 0 }}')
    new_content = new_content.replace('initial={{ opacity: 0, scale: 0.95 }}', 'initial={{ opacity: 1, scale: 1 }}')
    
    # Also in variants
    new_content = new_content.replace('hidden: { opacity: 0', 'hidden: { opacity: 1')

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")
