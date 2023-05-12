const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('example.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const json = JSON.stringify(data, null, 2);

fs.writeFile('output.json', json, 'utf8', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Output file created successfully!');
});