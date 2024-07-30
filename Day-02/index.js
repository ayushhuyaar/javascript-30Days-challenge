//==== Day - 02 -> Operators ======//

// Activity 01 - 
// <=========Task 01========>

function add (num1 , num2) {
    console.log(num1 + num2 );
}

add(5 , 6);

//  <=========Task 02=======>

function sub (num1 , num2) {
    console.log(num1 - num2);
}
sub(20 , 22);

// <==========Task 03==========>


function multiply (num1 , num2) {
    console.log(num1 * num2);
}

multiply(4 , 5);

// <===========Task 04===========>

function divide (num1 , num2) {
    console.log(num1/ num2);
}
divide(20 , 4) ;


// <============Task 05===========>
function rem (num1 , num2) {
    console.log(num1%num2);
}
rem(45 , 14);

// Activity 02

// <=============Task 06============>

let myNum = 4;
myNum += 5;
console.log(myNum);

// <==============Task 07=============>

    myNum -= 3;
    console.log(myNum);

// Activity 03

// <=============Task 08================>
function compare (num1 , num2) {
    console.log(num1 + " < " + num2 + " = " + `${num1 < num2}`);
    
    console.log(num1 + " > " + num2 + " = " + `${num1 > num2}`);
    
}
compare(12 , 34);

// <==============Task 09================>
    function compare2(num1 , num2) {

    console.log(num1 + " <= " + num2 + " = " + `${num1 <= num2}`);

    console.log(num1 + " >= " + num2 + " = " + `${num1 >= num2}`);
    }
    compare2(12 , 12);

// <==============Task 10=================>
    function compare3 (num1 , num2) {
        console.log(num1 +  " == " + num2 + " = " + `${num2 == num2}`);

        console.log(num1 +  " === " + num2 + " = " + `${num1 === num2}`)
    };
    compare3(12 , "12");

// Activity 04

// <================Task 11===============>
    const condition = 1 > 3 && 3 < 5;
    console.log(condition);

// <===============Task 12================>

    const condition2 = 1>3 || 3<5;
    console.log(condition2);

// <=================Task 13================>
    const condition3 = 5 !== "6";
    console.log(condition3);

// <=================Task 14=================>

    function oddEven (num1 ) {
        const condition4 = num1%2==0 ? "Even" : "Odd" ;
        console.log(condition4);
    }
    oddEven(6);