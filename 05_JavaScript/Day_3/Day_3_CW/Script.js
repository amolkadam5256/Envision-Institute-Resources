function findLargest() {
    // Get the input values
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    // Check the largest number
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers for both fields.";
    } else if (num1 > num2) {
        result = `The largest number is: ${num1}`;
    } else if (num1 < num2) {
        result = `The largest number is: ${num2}`;
    } else {
        result = "Both numbers are equal.";
    }

    // Display the result
    document.getElementById("result").innerText = result;
}


// Qustion Second 

function checkEvenOdd() {
    let num3 = parseInt(document.getElementById("num3").value);

    // Check if the number is valid
    let evenOdd;

    if (isNaN(num3)) {
        evenOdd = 'Please enter a valid number.';
    } else if (num3 % 2 === 0) {
        if (num3 < 0) {
            evenOdd = `Negative number, but it's Even: ${num3}`;
        } else {
            evenOdd = `Number is Even: ${num3}`;
        }
    } else {
        evenOdd = `Number is Odd: ${num3}`;
    }

    // Display the result
    document.getElementById("EvenOdd").innerText = evenOdd;
}


function displayGrade() {
    let percentage = parseFloat(document.getElementById("percentage").value);  // Correct the variable name here

    let grade;
    let status;

    if (percentage > 100 || percentage < 0) {
        grade = "Invalid percentage! Percentage must be between 0 and 100.";
    }
    else if (percentage >= 90) {
        grade = "A++";
        status = "Pass";
    }
    else if (percentage >= 80) {
        grade = "A";
        status = "Pass";
    }
    else if (percentage >= 70) {
        grade = "B++";
        status = "Pass";
    }
    else if (percentage >= 60) {
        grade = "B";
        status = "Pass";
    }
    else if (percentage >= 50) {
        grade = "C++";
        status = "Pass";
    }
    else if (percentage >= 35) {
        grade = "C";
        status = "Pass";
    }
    else {
        grade = "D";
        status = "Fill";
    }


    document.getElementById("status").innerText = status;  // Display the grade
    document.getElementById("grade").innerText = grade;  // Display the grade
}




// check in largest number among three number 
function largestNumber() {

    let one = parseInt(document.getElementById("one").value);
    let two = parseInt(document.getElementById("two").value);
    let three = parseInt(document.getElementById("three").value);

    let Largest_In_Three;
    let message;

    if (one > two) {
        if (one > three) {
            Largest_In_Three = one;
            message = `1st number ${one} is the largest.`;
        } else {
            Largest_In_Three = three;
            message = `3rd number ${three} is the largest.`;
        }
    } else {
        if (two > three) {
            Largest_In_Three = two;
            message = `2nd number ${two} is the largest.`;
        } else {
            Largest_In_Three = three;
            message = `3rd number ${three} is the largest.`;
        }
    }

    document.getElementById("Largest_Number").innerText = `Largest Number: ${Largest_In_Three}. ${message}`;
}



// create a calculater of basic aratmatic operation

function calculatorFun() {
    // Get the values from the inputs
    let number1 = parseFloat(document.getElementById("number01").value);
    let number2 = parseFloat(document.getElementById("number02").value);
    let choice = parseInt(document.getElementById("choice").value);


    switch (choice) {
        case 1:
            let sum = number1 + number2;
            document.getElementById("Add").innerText = `Addition Value: ${sum}`;
            break;

        case 2:
            let diff = number1 - number2;
            document.getElementById("Sub").innerText = `Subtraction Value: ${diff}`;
            break;

        case 3:
            let prod = number1 * number2;
            document.getElementById("Mul").innerText = `Multiplication Value: ${prod}`;
            break;

        case 4:
            let div = number1 / number2;
            document.getElementById("Div").innerText = `Division Value: ${div}`;
            break;

        case 5:
            let mod = number1 % number2;
            document.getElementById("mod").innerText = `Modulus Value: ${mod}`;
            break;

        default:
            alert("Invalid choice. Please enter a number between 1 and 5.");
            break;
    }
}

