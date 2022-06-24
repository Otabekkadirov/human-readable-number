function toReadable(number) {
    // check if the number is 'zero'
    if (number === 0) return "zero";

    // create an object for unique numbers which are just 'teens'
    const teens = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    // check if number is among 'teens'
    if (teens[number]) return teens[number];

    // create an object for 'tens'
    const tens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    // check if number is among 'tens'
    if (tens[number]) return tens[number];

    // create an object for ones
    const ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    // check if number is among ones
    if (ones[number]) return ones[number];

    function tensToText(num) {
        // declare empty strings for two numbers
        let lastNum = "";
        let firstNum = "";

        // convert last number to text
        lastNum = ones[num % 10];

        // convert first number to text
        firstNum = tens[Math.floor(num / 10) * 10];

        // add first number and last number and return it
        return `${firstNum} ${lastNum}`;
    }

    function hundredsToText(num) {
        // get the first number in hundreds
        let firstNum = Math.floor(num / 100);

        // add 'hundred' to it
        let bareHundred = `${ones[firstNum]} hundred`;

        // check if it's our result
        if (num % 100 === 0) return bareHundred;

        // get the second and the third number together
        let tensNum = num % 100;

        // convert 'tens' to text with toReadable function that we already have
        // this line is recursive
        let tensText = toReadable(tensNum);

        return `${bareHundred} ${tensText}`;
    }

    if (number >= 21 && number <= 99) return tensToText(number);

    if (number >= 100 && number <= 999) return hundredsToText(number);
}

module.exports = toReadable;
