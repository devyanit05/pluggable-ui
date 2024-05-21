const csv = require('csvtojson');
const sample = './sample-csv.csv'

csv()
  .fromFile(sample)
  .then((jsonObj) => {
    console.log(jsonObj);
  });