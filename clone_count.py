import os


def clone_repos():
    # Array of GitHub repository URLs
    repos = [
        "https://github.com/x"
    ]

    # Destination folder to clone repositories into
    destination_folder = "/dest"

    # Change directory to the destination folder
    os.chdir(destination_folder)

    # Loop through the array of repository URLs and clone each one
    for repo in repos:
        os.system(f"git clone {repo}")


def count_dirs(directory):
    # Get list of directories
    directories = []
    for entry in os.scandir(directory):
        if entry.is_dir():
            directories.append(entry.name)

    # Print CSV header
    print("Directory,Lines")

    # Loop through each directory
    for directory in directories:
        # Initialize total lines counter
        total_lines = 0
        # Use os.walk to traverse directories recursively
        for root, dirs, files in os.walk(directory):
            for file in files:
                try:
                    # Construct file path
                    file_path = os.path.join(root, file)

                    if file_path.__contains__("vendor") is False:
                        # Open file and count lines
                        with open(file_path, "r") as f:
                            total_lines += sum(1 for line in f)
                except UnicodeDecodeError:
                    continue
                    # print(f"UnicodeDecodeError: {e}")
                    # print("Skipping file due to encoding issue.")

        print(f"{directory},{total_lines}")


clone_repos()
count_dirs("/home/croco/source/auto_repos")
