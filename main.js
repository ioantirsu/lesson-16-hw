


function toFarenheit(celsius) {
    return (celsius / 5) * 9 + 32;
    console.log(celsius);
};

toFarenheit(12);

function toCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
    console.log(farenheit);
}
toCelsius(53.6);


function isLeapYear(year) {

    if ((0 == year % 4) && (0 !== year % 100) || (0 == year % 400)) {
        console.log(year + " is a Leap Year");
    }

    else

        console.log(year + " is not a Leap year ");



}

let isDevision = (year, number) => year % number;
