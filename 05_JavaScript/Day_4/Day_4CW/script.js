{
    let n = parseInt(prompt("Enter Number : "));
    document.write(`Print 1 to ${n} alternate numbers by using while loop <br/>`);
    let i = 0;
    while (i <= n) {
        demo = document.write(`${i} <br>`);
        i += 2;
    }
}


document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);

{

    let n = parseInt(prompt("Enter  Number: "));
    document.write(`Print 1 to ${n} Even Number <br/>`);
    let i = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            document.write(`${i} <br/>`);
            document.write(` <br/>`);
        }
        i++;
    }

}


document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);

{
    let n = parseInt(prompt(`Enter Number : `));
    document.write(`Print 1 to ${n} Odd Number <br/>`);
    let i = 1;
    while (i <= n) {
        if (i % 2 != 0) {
            document.write(`${i} <br/>`);
        }
        i++;
    }

}



document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);


{
    let n = parseInt(prompt(`Enter Number: `));
    document.write(`Print sum of 1 to ${n} Even Number <br/>`);
    let i = 1;
    sum = 0;
    while (i <= n) {
        if (i % 2 == 0) {
            document.write(`${i} <br/>`);
            sum += i;
        }
        i++;
    }
    document.write(`Sum of 1 to ${n} even number is ${sum}`);

}


document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);


{
    let n = parseInt(prompt(`Enter Number : `));
    document.write(`Print sum of 1 to ${n} Odd Number <br/>`);
    let i = 1;
    sum = 0;
    while (i <= n) {
        if (i % 2 != 0) {
            document.write(`${i} <br/>`);
            sum += i;
        }
        i++;
    }
    document.write(`Sum of 1 to ${n} Odd number is ${sum}`);

}



document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);


{
    let n = 229;
    document.write(`Write a program to print odd numbers from 521 to 229 using do___while loop.`);
    let i = 521;
    do {
        if (i % 2 != 0) {
            document.write(`${i} <br/>`);
        }
        i--;
    } while (i >= n);

}


document.write(` <br/>`);
document.write(` <br/>`);
document.write(` <br/>`);

{
    document.write(`Write a program to print table of number given by the user.`);
    let n = parseInt(prompt(`Enter Number To print table : `));
    let i = 1
    while (i <= 10) {
        let table = i * n;
        document.write(`${n} x ${i} : ${table} <br/>`);
        i++;
    }
}
