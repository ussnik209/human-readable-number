module.exports = function toReadable (number) {
    let numStrings = ['zero', 'one', 'two', 'three', 'four',
     'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
      'twelve', ]

    if (number <= 12) {
      return numStrings[number]
    }

    
   return number
}
