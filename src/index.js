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
    if (number >= 1000 && number <= 10 ** 6 - 1) return thousandsToText(number);

    // create a function to convert numbers from 1,000,000 to 999,999,999 to text
    function millionsToText(num) {
        const million = 10 ** 6;

        // get the first number in millions
        let firstNum = Math.floor(num / million);

        // turn it into text with recursive function
        let firstNumText = toReadable(firstNum);

        // add 'million' to it
        let bareMillion = `${firstNumText} million`;

        // check if it's our result
        if (num % million === 0) return bareMillion;

        // get the rest of the numbers all together
        let hundredsInMillion = num % million;

        // convert hundreds to text with recursive function
        let hundredsInMillionText = toReadable(hundredsInMillion);

        return `${bareMillion} ${hundredsInMillionText}`;
    }
    if (number >= 10 ** 6 && number <= 10 ** 9 - 1)
        return millionsToText(number);

    // create a function to convert billions to text
    function billionsToText(num) {
        const billion = 10 ** 9;

        // get the first number in billions
        let firstNum = Math.floor(num / billion);

        // turn it into text with recursive function
        let firstNumText = toReadable(firstNum);

        // add 'billion' to it
        let bareBillion = `${firstNumText} billion`;

        // check if it's our result
        if (num % billion === 0) return bareBillion;

        // get the rest of the numbers all together
        let millionsInBillions = num % billion;

        // convert millions to text with recursive function
        let millionsInBillionsText = toReadable(millionsInBillions);

        return `${bareBillion} ${millionsInBillionsText}`;
    }
    if (number >= 10 ** 9 && number <= 10 ** 12 - 1)
        return billionsToText(number);

    if (number >= 10 ** 12)
        return "I cannot count higher that billions yet, sorry.";
}

function convertToConsole(number) {
    console.log("\n########################\n");
    console.log(number + " is:\n");
    console.log(toReadable(number));
    console.log("\n########################\n");
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
// console.log(toReadable(1000000));
// console.log("1234567 is " + toReadable(1234567));
// console.log(toReadable(4141331));
// console.log(toReadable(9999990));
// console.log(toReadable(9996000));
// console.log(toReadable(113123331));
// console.log(toReadable(787787887));
// console.log(toReadable(777777777));
// console.log("\n########################\n");
// console.log(912717326717 + " is:\n");
// console.log(toReadable(912717326717));
// console.log("\n########################\n");
// console.log(10 ** 6);
// console.log(10 ** 9);
// console.log(10 ** 12);
// convertToConsole(1);
// convertToConsole(4);
// convertToConsole(15);
// convertToConsole(156);
// convertToConsole(7215);
// convertToConsole(10000);
// convertToConsole(912717326717);
convertToConsole(654321574878974561321);

module.exports = toReadable;
