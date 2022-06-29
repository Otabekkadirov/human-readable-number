function toReadable(number) {
    // check if the number is 'zero'
    if (number === 0) return "zero";

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

    // create a function to convert numbers from 21 to 99 to text
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
    if (number >= 21 && number <= 99) return tensToText(number);

    // create a function to convert numbers from 100 to 999 to text
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
    if (number >= 100 && number <= 999) return hundredsToText(number);

    // create a function to convert numbers from 1,000 to 999,999 to text
    function thousandsToText(num) {
        // get the number in thousands
        let firstNum = Math.floor(num / 1000);

        // turn it into text
        // this line is recursive
        let textThousand = toReadable(firstNum);

        // add 'thousand' to it
        let bareThousand = `${textThousand} thousand`;

        // check if it's our result
        if (num % 1000 === 0) return bareThousand;

        // get the second, the third and the fourth number together
        let hundreds = num % 1000;

        // convert 'hundreds' to text with toReadable function that we already have
        // this line is recursive
        let hundredsText = toReadable(hundreds);

        return `${bareThousand} ${hundredsText}`;
    }
    if (number >= 1000 && number <= 999999) return thousandsToText(number);
}

// console.log(toReadable(0));
// console.log(toReadable(1));
// console.log(toReadable(3));
// console.log(toReadable(8));
// console.log(toReadable(10));
// console.log(toReadable(11));
// console.log(toReadable(12));
// console.log(toReadable(13));
// console.log(toReadable(19));
// console.log(toReadable(20));
// console.log(toReadable(21));
// console.log(toReadable(23));
// console.log(toReadable(29));
// console.log(toReadable(53));
// console.log(toReadable(88));
// console.log(toReadable(100));
// console.log(toReadable(200));
// console.log(toReadable(400));
// console.log(toReadable(503));
// console.log(toReadable(513));
// console.log(toReadable(523));
// console.log(toReadable(999));
// console.log(toReadable(651));
// console.log(toReadable(748));
// console.log(toReadable(1000));
// console.log(toReadable(1005));
// console.log(toReadable(1015));
// console.log(toReadable(1715));
// console.log(toReadable(4715));
// console.log(toReadable(9095));
// console.log(toReadable(10095));
// console.log(toReadable(50000));
// console.log(toReadable(54795));
// console.log(toReadable(431631));
// console.log(toReadable(500000));
// console.log(toReadable(999999));

module.exports = toReadable;
