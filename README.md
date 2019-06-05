# vanilla-image-uploader
A modern image uploader created by using modern javascript.

**(NO DEPENDENCY!!!)**


## Setup
### Method 1 (W/O any package management tools)
1. Simply download the zip and extract the file
2. Copy the script file from `/dist/js/vanilla-image-uploader.js`
3. Core style from `/dist/css/app.css` 
4. Theme style from `/dist/css/theme-flat.css || /dist/css/theme-round.css`

### Method 2 (using NPM)
1. Run `npm install git+https://github.com/key60529/vanilla-image-uploader --save`
2. Insert the follow script to your js file which will compile and load in the page you use the uploader
```javascript
import VanillaImageUploader from 'vanilla-image-uploader';
window.VanillaImageUploader = VanillaImageUploader;
```


## Usage
In the page you need to use the uploader, insert the following script
```javascript
new VanillaImageUploader({
  name: 'product_image', // input field name
  label: 'Upload a photo' // the text inside the button
});
```


## Notes
Since this is the first simple library I created, you may face to any of unexpected bugs when using this uploader, please report through issue section in github, or create any pull request if needed.
**THANKS!!**
