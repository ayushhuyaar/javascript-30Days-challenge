// DAY 03

// Activity 01

// <=================Task 01===============>
    function task1 (num1) {
        if(num1 > 0) {
            console.log("Positive");
        }
        else if (num1 < 0) {
            console.log("Negative");
        }
        else {
            console.log("Zero");
        }
    }

    task1(-45);

// <================Task 02=====================>

    function task2 (age) {
        if(age >=18) {
            console.log("Eligible for vote");
        }
        else {
            console.log("NOt eligible for vote");
        }
    }
    task2(45);

// Activity 02

// <=================Task 03====================>
    function task3 (num1 , num2 , num3) {
        if(num1> num2) {
            if(num1 > num3) {
                console.log(num1 + " is the greatest number");
            }
            else {
                console.log(num3 + " is the greatest number");
            }
        }
        else if(num2 > num1) {
            if(num2 > num3) {
                console.log(num2 + " is the greatest number ");
            }
            else {
                console.log(num3 + " is the greatest number");
            }
        } 
        else  {
            console.log(num3 + " is the greatest number");
        }
    }
    task3(1000 , 93 , 98);

// Activity 03

// <==================Task 04=========================>

    function  task4 (dayName) {
        switch(dayName) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
            console.log("Invalid Day");
            break;
        }

    }
    task4(7);
// <==================Task 5=========================>
    
    function task5 (marks) {
        switch (true) {
            case (marks >=90 && marks <=100):
                console.log("Grad A");
                
                break;
            case (marks >= 80 && marks < 90):
                console.log("Grade B");
                break;
            case (marks >= 70 && marks < 80):
                console.log("Grade C");
                break;
            case (marks >=60 && marks < 70):
                console.log("Grade D");
                break;
            case (marks >=50 && marks < 60) :
                console.log("Grade E");
                break;
            case (marks >=40 && marks < 50):
                console.log("Grade F");
                break;
            case (marks >=0 && marks < 40):
                console.log("failed");
                break;
            default:
                console.log("Invalid");
                break;
        }
    }
task5(100);

// Activity 4
// <==================Task 6====================>

    function task6 (num1)
    {
        console.log((num1%2==0) ? (num1 + " is Even") : (num1 + " is Odd"));
        
    }
    task6(55)

// Activity 5
// <===============Task 7==========================>
    let year = 2024

if((year%4==0 && year%100!=0) ||year%400==0 ){
    console.log("Leap Year")
}else{
    console.log("Not a Leap Year")
}

// <=====================END=======================>