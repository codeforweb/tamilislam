

// var fname= 'bukhari/bukhari.json';
var fname= 'muslim/muslim.json';


var fs = require('fs');
var source = fs.readFileSync(fname , 'utf8');


var jsonPretty = JSON.stringify(JSON.parse(source),null,2); 	// spacing level = 4
// console.log(jsonPretty);

fs.writeFile(fname, jsonPretty, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    // console.log(fs.readFileSync("bukhari_head1.json", "utf8"));
  }
});