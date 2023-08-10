const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

// Path to the folder containing the HTML files
const htmlFolder = '/home/croco/source/medium-export/posts';

// Create a TurndownService instance
const turndownService = new TurndownService();

// Convert HTML file to Markdown
function convertFileToMarkdown(filePath) {
  // Read the HTML file
  const html = fs.readFileSync(filePath, 'utf-8');

  // Parse the HTML using Cheerio
  const $ = cheerio.load(html);

  // Convert parsed HTML to Markdown
  const markdown = turndownService.turndown($.html());

  return markdown;
}

// Convert all HTML files in the folder to Markdown
function convertFolderToMarkdown(folderPath) {
  // Read all files in the folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // Process each file
    files.forEach((file) => {
      // Check if the file is HTML
      if (path.extname(file) === '.html') {
        const filePath = path.join(folderPath, file);
        const markdown = convertFileToMarkdown(filePath);

        // Change file extension to .md
        const markdownFilePath = filePath.replace('.html', '.md');

        // Write the Markdown content to a new file
        fs.writeFileSync(markdownFilePath, markdown, 'utf-8');

        console.log(`Converted ${file} to ${markdownFilePath}`);
      }
    });
  });
}

// Start the conversion process
convertFolderToMarkdown(htmlFolder);
