// use of and operater 

function andOr() {

    let a = 55;
    let b = 70;
    let result1;
    if (a < 50 && a < b) {
        result1 = "Both Are True "
    }
    else {
        result1 = "Are False"
    }

    document.getElementById("result").innerText = result1;
}

// use of and operater 

function orOperater() {

    let a = 55;
    let b = 70;
    let result2;
    if (a < 50 || a < b) {
        result2 = " True "
    }

    else {
        result2 = " False"
    }

    document.getElementById("resultor").innerText = result2;
}



function checkEvenOdd() {
    let num3 = parseInt(document.getElementById("num3").value);

    // Check if the number is valid
    let evenOdd;

    if (isNaN(num3)) {
        evenOdd = 'Please enter a valid number.';
    } else if (num3 % 2 === 0) {
        if (num3 == 0) {
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


// calculating the gross salary of an employee by adding a bonus based on their basic salary:


function grossSalary() {
    let salary = parseFloat(document.getElementById("sal").value);
    let bonusPerc = parseFloat(document.getElementById("bonusPercentage").value);

    // Calculate the bonus and gross salary
    let bonusAmount = (bonusPerc / 100) * salary;
    let grossSalaryAmount = salary + bonusAmount;

    // Display the bonus amount and gross salary
    document.getElementById("bonusAmount").innerText = "Bonus: " + bonusAmount.toFixed(2);
    document.getElementById("grossSalaryAmount").innerText = "Gross Salary: " + grossSalaryAmount.toFixed(2);
}


function menuDrivenProgram() {
    const PI = 3.14;
    let choice = document.getElementById("choice").value;

    switch (choice) {
        case "1":
            let radius = parseFloat(prompt("Enter the radius of the circle:"));
            let area = PI * radius * radius;
            document.getElementById("AreaOfCircle").innerText = `Area of Circle: ${area}`;
            break;

        case "2":
            let base = parseFloat(prompt("Enter the base of the triangle:"));
            let height = parseFloat(prompt("Enter the height of the triangle:"));
            let areaTriangle = 0.5 * base * height;
            document.getElementById("AreaOfTriangle").innerText = `Area of Triangle: ${areaTriangle}`;
            break;

        case "3":
            let radius2 = parseFloat(prompt("Enter the radius of the circle:"));
            let circumference = 2 * PI * radius2;
            document.getElementById("CircumferenceOfCircle").innerText = `Circumference of Circle: ${circumference}`;
            break;

        case "4":
            let side1 = parseFloat(prompt("Enter the first side of the triangle:"));
            let side2 = parseFloat(prompt("Enter the second side of the triangle:"));
            let side3 = parseFloat(prompt("Enter the third side of the triangle:"));
            let perimeter = side1 + side2 + side3;
            document.getElementById("PerimeterOfTriangle").innerText = `Perimeter of Triangle: ${perimeter}`;
            break;

        default:
            alert("Invalid choice. Please enter a number between 1 and 4.");
            break;
    }
}
