# sample-readjson
Sample app written in node.js wich reads a json file and returns it's content without the need of adding any routes

### How it works
- Add the json files at ~/jsonFiles/
- Send the GET requests at http://{server}/get/{fileName}
- If a file with a corresponding name is not found at the designed folder, you'll get a 404
- Otherwise, you'll see the json content :)