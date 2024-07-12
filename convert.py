import csv
import os
import chardet

def convert_to_utf8(input_file, output_file):
    # Detecting the encoding of the input file
    with open(input_file, 'rb') as f:
        raw_data = f.read()
        detected_encoding = chardet.detect(raw_data)['encoding']

    # Reading the CSV file with the detected encoding and writing it in UTF-8
    with open(input_file, 'r', encoding=detected_encoding, newline='') as infile, \
            open(output_file, 'w', encoding='ASCI', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        for row in reader:
            writer.writerow(row)

    print(f"Conversion completed. File saved as '{output_file}'.")

if __name__ == "__main__":
        convert_to_utf8("original.csv","output.csv")






