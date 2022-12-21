
const fs = require("fs")
const csvToJson = require('convert-csv-to-json')

// Drop your csv files into the "inputs" folder.
const inputFolder = "./inputs/"

// Json files will be created into "output" folder.
const outputFolder = "./outputs/"

// Read files.
let files = fs.readdirSync(inputFolder)

// Iterate and convert from csv to json.
for (let file of files) {

    let fileInputName = inputFolder + file
    let fileOutputName = outputFolder + file + ".json"

    // Convert csv to json.
    let json = csvToJson.getJsonFromCsv(fileInputName)

    // Filter json to get id and name.
    let filtered = json.map(object => {
        return {
            id: object.ID,
            name: object.Frutas
        }
    })

    // Write json file.
    fs.writeFile(fileOutputName, JSON.stringify(filtered), function(err) {
        if (err) console.log(err)
    })
}