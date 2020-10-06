module.exports = function toReadable (number) {
  const zeroNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const decade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let result = '';

  if (number === 0) {
    result += 'zero';

    return result;
  }

  let hundred = parseInt(number / 100);
    if (hundred !== 0) {
      result += zeroNineteen[hundred] + ' hundred';
    }
 
  let decades = (number % 100);
  if (decades >= 10 && decades < 20) {
    result += " " + zeroNineteen[decades];
    return result.trim();

  } else if (decades > 19) {
    result += " " + decade[parseInt(decades / 10)];
  }
  
  if (decades < 10 || decades > 20) {
    let ones = number % 10;
    if (ones !== 0) {
      result += " " + zeroNineteen[ones];
    }
  }

    return result.trim();
};