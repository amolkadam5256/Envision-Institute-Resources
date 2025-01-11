// {
//     let n = parseInt(prompt(`Enter Number : `));
//     document.write(`Print sum of 1 to ${n}  Number <br/>`);
//     let i = 1;
//     sum = 0;
//     while (i <= n) {
//         document.write(`${i} <br/>`);
//         sum += i;
//         i++;
//     }
//     document.write(`Sum of 1 to ${n}  number is ${sum}`);

// }


// {
//     let n = parseInt(prompt(`Enter Number: `));

//     // Print and calculate the sum of even numbers
//     document.write(`Print sum of 1 to ${n} even numbers:<br/>`);
//     let evensum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             document.write(`${i}<br/>`);
//             evensum += i;
//         }
//     }
//     document.write(`Sum of 1 to ${n} even numbers is ${evensum}<br/><br/>`);

//     // Print and calculate the sum of odd numbers
//     document.write(`Print sum of 1 to ${n} odd numbers:<br/>`);
//     let oddsum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             document.write(`${i}<br/>`);
//             oddsum += i;
//         }
//     }
//     document.write(`Sum of 1 to ${n} odd numbers is ${oddsum}`);
// }



// let n = parseInt(prompt("Enter Number: "));

// // Print numbers and their squares from 1 to n
// document.write(`Print Square of 1 to ${n} numbers:<br/>`);
// for (let i = 1; i <= n; i++) {
//     document.write(`Square of ${i} : ${i * i}<br/>`);
// }

// {

//     function sumOfDigits(num) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10); 
//         }
//         return sum;
//     }
//     let num = parseInt(prompt("Enter a number:"));


//     let result = sumOfDigits(num);
//     document.write("Sum of digits:", result);

// }


{
    let n = parseInt(prompt(`Enter Number : `));
    document.write(`Print sum of 1 to ${n}  Number <br/>`);
    let i = 1;
    sum = 0;
    for (i = 0; i <= n; i++) {

        document.write(`${i} <br/>`);
        sum += i;
    }
    document.write(`Sum of 1 to ${n}  number is ${sum}`);

}
