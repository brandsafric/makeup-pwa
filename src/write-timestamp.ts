/** Appends a timestamp HTML comment to the end of index.html */

import * as fse from 'fs-extra';

const fileToAppend = './dist/makeup-pwa/index.html';
const timestamp = new Date();
const htmlCommentString = `<!-- Build date: ${timestamp} -->`;

fse.appendFile(fileToAppend, htmlCommentString, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Comment '${htmlCommentString}' written to '${fileToAppend}'`);
  }
});
