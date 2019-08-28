const args = process.argv.slice(2)
const request = require('request');
const fs = require('fs');



request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, error => {
    if (error) {
      process.exit();
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
});




