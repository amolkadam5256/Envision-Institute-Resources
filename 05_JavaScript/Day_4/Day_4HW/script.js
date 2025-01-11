{
    // 1. Print sum of 1 to 10 numbers using while loop


    let n = parseInt(prompt(`Enter Number : `));
    document.write(`Print sum of 1 to ${n}  Number <br/>`);
    let i = 1;
    sum = 0;
    while (i <= n) {
        document.write(`${i} <br/>`);
        sum += i;
        i++;
    }
    document.write(`Sum of 1 to ${n}  number is ${sum}`);

}


{
    let n = parseInt(prompt(`Enter Number: `));

    //  Write a program to print sum of even numbers and odd numbers between 1 to 30.

    // Print and calculate the sum of even numbers
    document.write(`Print sum of 1 to ${n} even numbers:<br/>`);
    let evensum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            document.write(`${i}<br/>`);
            evensum += i;
        }
    }
    document.write(`Sum of 1 to ${n} even numbers is ${evensum}<br/><br/>`);

    // Print and calculate the sum of odd numbers
    document.write(`Print sum of 1 to ${n} odd numbers:<br/>`);
    let oddsum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            document.write(`${i}<br/>`);
            oddsum += i;
        }
    }
    document.write(`Sum of 1 to ${n} odd numbers is ${oddsum}`);
}



let n = parseInt(prompt("Enter Number: "));

// Print numbers and their squares from 1 to n

document.write(`Print Square of 1 to ${n} numbers:<br/>`);
for (let i = 1; i <= n; i++) {
    document.write(`Square of ${i} : ${i * i}<br/>`);
}



{
    //    Accept a number from user and print its sum of digits. e.g. if num is 123 the answer is 6.

    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    let num = parseInt(prompt("Enter a number:"));


    let result = sumOfDigits(num);
    document.write("Sum of digits:", result);

}


{
    // Write a program to print sum of even numbers and odd numbers between 1 to 30 using for loop

    let n = parseInt(prompt(`Enter Number: `));


    // Print and calculate the sum of even numbers
    document.write(`Print sum of 1 to ${n} even numbers:<br/>`);
    let evensum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            document.write(`${i}<br/>`);
            evensum += i;
        }
    }
    document.write(`Sum of 1 to ${n} even numbers is ${evensum}<br/><br/>`);

    // Print and calculate the sum of odd numbers
    document.write(`Print sum of 1 to ${n} odd numbers:<br/>`);
    let oddsum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            document.write(`${i}<br/>`);
            oddsum += i;
        }
    }
    document.write(`Sum of 1 to ${n} odd numbers is ${oddsum}`);

}

{
    for (let i = 101; i <= 110; i++) {
        if (i % 2 !== 0) {
            document.write(`${i}<br/>`); // Print the odd number
        }
    }
}
document.write(`<br/>`);
{
    for (let i = 1; i <= 10; i++) {
        document.write(`${i} x ${i} = ${i * i} <br/>`); // Print the square of each number
    }
}

document.write(`<br/>`);

{
    document.write("Squares of numbers from 1 to 20:");
    document.write(`<br/>`);

    for (let i = 1; i <= 20; i++) {
        const square = i * i; // Calculate the square
        document.write(`Square of ${i} is: ${square} <br/>`);
    }

}