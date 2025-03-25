const fs = require('fs');

// Read both JSON files
const surahNamesEn = JSON.parse(fs.readFileSync('surahnames_en.json', 'utf8'));
const surahNamesTa = JSON.parse(fs.readFileSync('surahnames_ta.json', 'utf8'));

// Create a map using surah number as key
const mergedSurahNames = surahNamesEn.surahnames.map(enEntry => {
    const taEntry = surahNamesTa.surahnames.find(ta => ta.surano === enEntry.surano);
    return {
        surano: enEntry.surano,
        name_en: enEntry.Name,
        name_ta: taEntry ? taEntry.Name : ""
    };
});

// Write merged JSON to a new file
fs.writeFileSync('surahnames.json', JSON.stringify({ surahnames: mergedSurahNames }, null, 2), 'utf8');

console.log('Merged JSON file created successfully!');
