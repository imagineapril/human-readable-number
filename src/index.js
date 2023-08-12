module.exports = function toReadable (number) {
    let one = number % 10;
    let ten = Math.floor((number % 100) / 10);
    let hundred = Math.floor(number/100);
    let ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    let tens = {
        0: 'zero',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    if (number === 0) {
        return 'zero';
    }
    
    if (ten === 0) {
        ten = '';
    }

    if (hundred === 0) {
        hundred = '';
    }

    for (let key in teens) {
        if (Number(key) === (number % 100)) {
            one = teens[key];
            ten = '';
        }
    }


    for (let key in ones) {
        if (one === 0) {
            one = '';
        } else {
                if (Number(key) === one) {
                    one = ones[key];
                }
            }
        }

    for (let key in tens) {
        if(Number(key) === ten) {
            ten = tens[key];
        }
    }

    for (let key in ones) {
        if(Number(key) === hundred) {
            hundred = `${ones[key]} hundred`;
        }
    }

    humanNumbers = `${hundred} ${ten} ${one}`;
    return humanNumbers.replace(/^ +| +$|( ) +/g,"$1");
}
