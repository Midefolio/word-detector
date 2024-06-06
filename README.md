# word-detector

[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)
[![Build Status](https://travis-ci.org/yourusername/your-repo.svg?branch=main)](https://travis-ci.org/yourusername/your-repo)

A simple library for detecting specific words in a sentence.

# Installation

You can install the package using npm:
```bash
npm install word-detector
```

Or using yarn:

```bash
yarn add word-detector
```

# Usage
Here is a simple example of how to use the package:

`node`

```js
const detectWords = require('word-detector');
const text = "This is a sample text containing some badword1 and badword2.";
const badwords = ["badword1", "badword2"];
const result = detectWords(text, badwords);
console.log(result); // Output: {detected:true, words:["badword1", "badword2"]}
```

`React`

```js
import detectWords from "word-detector"
const MyComponent =()=> {
 const text = "This is a sample text containing some badword1 and badword2.";
 const badwords = ["badword1", "badword2"];
 const result = detectWords(text, badwords);
 onsole.log(result); // Output: {detected:true, words:["badword1", "badword2"]}
}
export default MyComponent
```

# API

`detectBadWords(text, badwords)`

text: `string` - The text to check for inappropriate words.
badwords: `array` - An array of strings containing the inappropriate words to detect.

Returns:

null if no specified words are found.

# Contributing

If you would like to contribute, you are welcome. clone repository and open pull request.