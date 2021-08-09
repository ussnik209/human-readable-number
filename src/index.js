module.exports = function toReadable(number) {
  let numStrings = ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen']
  let numDozensStrings = ['twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
  let numString = ''
  let hundred = +(number / 100) | 0
  if (hundred) numString += numStrings[hundred] + ' hundred'

  let dozens = number % 100 | 0
  if (dozens <= 19) {
    if (dozens != 0 || number == 0) {
      numString += ' ' + numStrings[dozens]
    }
  } else {
    numString += ' ' + numDozensStrings[Math.trunc(dozens / 10) - 2]
    if (dozens % 10) numString += ' ' + numStrings[dozens % 10]
  }

  return numString.trimLeft()
}

