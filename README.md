# Logo Rotator Chrome Extension

Logo Rotator is a simple Chrome extension that rotates the logo of the current website when you enter the Konami code (Up, Up, Down, Down, Left, Right, Left, Right, B, A). 

## Installation

To install the Logo Rotator extension, follow these steps:

1. Download or clone the Logo Rotator repository to your local machine.
2. Open Google Chrome.
3. In the address bar, enter `chrome://extensions` and press Enter.
4. Toggle the "Developer mode" switch in the top right corner of the page.
5. Click the "Load unpacked" button and browse to the location where you saved the Logo Rotator repository.
6. Select the Logo Rotator folder and click "Open" or "Select Folder" (depending on your operating system).

The extension is now installed in your Chrome browser.

## Usage

To use the Logo Rotator extension, simply visit any website with a recognizable logo and enter the Konami code (Up, Up, Down, Down, Left, Right, Left, Right, B, A) using your keyboard. The logo will rotate 360 degrees automatically.

Please note that this extension uses a simple method to identify the logo on a webpage, and it may not work perfectly on all websites. You might need to customize the `findLogo()` function in the `contentScript.js` file for better compatibility with different websites.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
