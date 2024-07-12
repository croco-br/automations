import os

def is_hidden(file):
    return file.startswith('.')

def has_valid_extension(file, valid_extensions):
    return any(file.endswith(ext) for ext in valid_extensions)


def scan_directory(directory, output_file):
    with open(output_file, 'w') as out_file:
        for root, _, files in os.walk(directory):
            for file in files:
                if is_hidden(file) or not has_valid_extension(file, valid_extensions):
                    continue
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, directory)
                try:
                    with open(file_path, 'r') as in_file:
                        content = in_file.read()
                        out_file.write(f"# {relative_path}\n")
                        out_file.write(content)
                        out_file.write("\n\n")
                        out_file.write("#EOF")
                        out_file.write("\n\n")
                        print(f"{relative_path}")
                except Exception as e:
                    #print(f"Could not read file {file_path}: {e}")
                    continue

# Example usage
valid_extensions = ['.yml', '.rb']  # List of valid file extensions

scan_directory('/home/croco/Source/payments_backend', 'payments_backend.txt')

print("done")