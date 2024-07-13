# Boratify Chrome Extension

![Borat](/borat.jpg)

## Description

Boratify is a fun and quirky Chrome extension that replaces images on web pages with random pictures of Borat, the iconic character portrayed by Sacha Baron Cohen. This extension adds a humorous twist to your web browsing experience by transforming ordinary websites into Borat-filled adventures.

## Features

- Replaces all images on web pages with random Borat pictures
- Works with standard `<img>` tags, `<picture>` elements, and `<source>` tags
- Dynamically replaces images as you scroll or as new content loads
- Avoids replacing images on specific domains (e.g., Google)
- Maintains image replacement even when src or srcset attributes change

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The Boratify extension should now be active in your Chrome browser

## Usage

Once installed, the extension will automatically start replacing images on web pages you visit. No further action is required on your part. Simply browse the web as usual and enjoy the unexpected Borat appearances!

## Configuration

You can modify the `replacementImages` array in the script to add or remove Borat images used for replacement. Additionally, you can edit the `avoidDomains` array to specify websites where you don't want the extension to replace images.

## Limitations

- The extension does not work on certain domains (e.g., Google) to avoid interfering with essential services
- Image replacement is limited to the Borat images specified in the code
- The extension may not work on websites with complex image loading mechanisms or heavy content security policies

## Disclaimer

This extension is intended for entertainment purposes only. Please be aware that it may alter the appearance of websites you visit, which could potentially impact your browsing experience or the functionality of certain web pages.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or additional features. Please ensure that any contributions align with the fun and lighthearted nature of the extension.



## Acknowledgements

- Sacha Baron Cohen for creating the iconic Borat character
- All the creators of the Borat images used in this extension