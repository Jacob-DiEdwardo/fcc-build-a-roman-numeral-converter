const romanNumeralConversionForm = document.getElementById('roman-numeral-conversion-form');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

const conversionMap = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
};

const displayResult = text => {
  output.innerText = text;
  output.classList.remove('hidden');
}

const convertToRomanNumeral = () => {
  let errorMessage;
  const inputStr = numberInput.value;
  let int = parseInt(inputStr, 10);

  if (!inputStr || inputStr.match(/[e.]/gi)) {
    errorMessage = 'Please enter a valid number';
  } else if (int < 1) {
    errorMessage = 'Please enter a number greater than or equal to 1';
  } else if (int > 3999) {
    errorMessage = 'Please enter a number less than or equal to 3999';
  }

  if (errorMessage) {
    displayResult(errorMessage);
    return;
  }

  let result = '';
  Object.keys(conversionMap).forEach(key => {
    while (int >= conversionMap[key]) {
      result += key;
      int -= conversionMap[key];
    }
  });

  displayResult(result);
};

romanNumeralConversionForm.addEventListener('submit', e => {
  e.preventDefault();
  convertToRomanNumeral();
});
