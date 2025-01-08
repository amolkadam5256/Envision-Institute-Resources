{

    let name = prompt("Enter Your Name :");

    let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
    let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
    let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));

    let average = (subject1 + subject2 + subject3) / 3;

    console.log(`Student Name: ${name}`);
    console.log(`Average Marks: ${average}`);
    alert(`Student Name: ${name} \n Average Marks: ${average}`);

}

// Q2 Take the name and basic salary of employee and print the gross salary by adding 40% bonus.
// Gross Salary=Basic Salary+(40%×Basic Salary)

{
    let name = prompt("Enter Your Name :");
    let basicSal = parseFloat(prompt("Enter Your Basic Sakary  :"));

    console.log(`MY Name is :${name}`)
    console.log(`MY Name is :${name} and My Salary is :${basicSal}`);

    let grossSal = basicSal + (0.4* basicSal);

    console.log(`MY Name is :${name} and My Salary is :${basicSal} \n and my Gross Salary is :${grossSal}`);
}

// 3. Write a program to calculate the area and perimeter of the rectangle. (P = (L + W) × 2)

// Rectangle
// Area = A = l × w	
// Perimeter = P = 2(l + w)

{

    let length = parseFloat(prompt("Enter Length of Rectangle :"));
    let Width = parseFloat(prompt("Enter Width of Rectangle :"));

    let area = (length * Width);
    let Parameter = 2 * (length + Width);
    console.log(`Area of Rectangle is :${area} \n and parameter of Rectangle is :${Parameter}`);

}

// 4. Write a program to calculate the perimeter of a triangle having sides of length 2,3 and 5 units. (P= a+b+c)


{

    let a = parseInt(prompt("Enter Value of side A :"));
    let b = parseInt(prompt("Enter Value of side B :"));
    let c = parseInt(prompt("Enter Value of side C :"));

    perimeterOfTriangle = a + b + c;

    console.log(`Parimeter of Triangle is : ${perimeterOfTriangle}`);

}


// 5. Write a program to print Circumference of Circle using prompt function.
// Circumference = 2 × π × radius
{
    let radius = parseFloat(prompt("Enter Radius Of Circle :"));
    const PI = 3.14;
    CircumferenceOfCircle = 2 * PI * radius;
    console.log(`Circumference of Circle  is :${CircumferenceOfCircle}`)
}
