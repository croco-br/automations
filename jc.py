import json
import csv

def json_to_csv(json_file, csv_file):
    # Read JSON file
    with open(json_file, 'r') as f:
        data = json.load(f)

    # Get field names from JSON keys
    fieldnames = list(data[0].keys())

    # Write data to CSV
    with open(csv_file, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

# Replace 'input.json' and 'output.csv' with your file paths
json_to_csv('input.json', 'output.csv')
