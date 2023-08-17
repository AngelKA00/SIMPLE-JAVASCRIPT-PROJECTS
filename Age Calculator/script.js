// declare variables

let userInput = document.getElementById("date");
let result = document.getElementById("result");

// it prevents the user to select future dates
// to get date as a string, toisostring(in-built-ISO-8601) is used
userInput.max = new Date().toISOString().split("T")[0];

// when user clicks on calculate button
function calculateAge(){
    // declare some more variables
    let birthDate = new Date(userInput.value);//it will store i/p by user

    // declare variables for i/p given by user
    let d1 = birthDate.getDate();
    // since january starts from 0 as per system, so if we give +1 ,
    //  then it will consider january as 1 and december as 12
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    // to calculate age from today's date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    // to store that difference
    let d3,m3,y3;

    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    // if month goes negative
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    // to display the result
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}

// to get exact date
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}