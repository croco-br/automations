package main

import (
	"crypto/md5"
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

func test() {
	// Replace "path/to/your/file.txt" with the actual file path
	filePath := "senhas.txt"

	// Read the file content
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		log.Fatal(err)
	}

	// Convert the file content to string
	fileContent := string(content)

	// Split the content into words
	words := strings.Fields(fileContent)

	// Hash each word using MD5
	for _, word := range words {
		hash := md5.Sum([]byte(word))
		hashStr := fmt.Sprintf("%x", hash)
		fmt.Printf("Word: %s, MD5 Hash: %s\n", word, hashStr)
	}
}
