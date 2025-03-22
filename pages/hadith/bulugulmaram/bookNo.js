const fs = require('fs');

// Read the hadiths.json file
const data = fs.readFileSync('bulug.json', 'utf8');
const hadiths = JSON.parse(data).bhadiths;

// Function to determine the book number based on hno
const getBookNumber = (hno) => {
  if (hno >= 1 && hno <= 162) return 1;
  if (hno >= 163 && hno <= 556) return 2;
  if (hno >= 557 && hno <= 622) return 3;
  if (hno >= 623 && hno <= 670) return 4;
  if (hno >= 671 && hno <= 727) return 5;
  if (hno >= 728 && hno <= 801) return 6;
  if (hno >= 802 && hno <= 994) return 7;
  if (hno >= 995 && hno <= 1198) return 8;
  if (hno >= 1199 && hno <= 1243) return 9;
  if (hno >= 1244 && hno <= 1297) return 10;
  if (hno >= 1298 && hno <= 1358) return 11;
  if (hno >= 1359 && hno <= 1400) return 12;
  if (hno >= 1401 && hno <= 1424) return 13;
  if (hno >= 1425 && hno <= 1461) return 14;
  if (hno >= 1462 && hno <= 1480) return 15;
  if (hno >= 1481 && hno <= 1599) return 16;
  return null; // Fallback for hno outside the specified ranges
};

// Add the book key to each hadith
hadiths.forEach((hadith) => {
  hadith.book = getBookNumber(hadith.hno);
});

// Save the updated data back to hadiths.json
const updatedData = { bhadiths: hadiths };
fs.writeFileSync('hadiths.json', JSON.stringify(updatedData, null, 2));
console.log('Book numbers added and saved to hadiths.json');