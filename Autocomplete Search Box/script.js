// declare variables for search keywords

let availableKeywords=[
    'HTML',
    'CSS',
    'JS',
    'JAVA',
    'Web design',
    'Front end development',
    'Back end development',
    'Angular',
    'JS Frameworks',
    'React JS',
    'Python',
    'Django',
    'Server side programming',
    'Database'
]

// display suggested keywords
const resultsBox = document.querySelector(".result-box");
// input from user
const inputBox = document.querySelector("#input-box");

//onkey-if user start to type anything , that function gets executed
inputBox.onkeyup = function(){ 
    let result = []; // this will store filtered keyword
    let input =inputBox.value;
    if(input.length){ // if user has typed something
        // it searches for similar keywords from available keywords 
        //in which the input is given by the user
        result = availableKeywords.filter((keyword) => { 
            //tolowercase-it is used hence user may type with uppercase or lowercase anything
            // so it changes everything to lowercase
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);// result will have all the filtered data 
    }
    display(result);
}

// the filtered data needs to be displayed in browser
function display(result){
    //map-it gets data from array and makes it a list and return as a list
    // that returned list is stored in a variable called content
    // and this content is displayed
    const content = result.map((list) => {
        // onclick is used to display the selected text from suggested keywords
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    // the content is displayed as ul
    // it will be displayed with commas since it is in array 
    // so we need to change it to be displayed as string, join is used for that
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
// to display the text in the input box
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';// after user has selected the text, other keywords must be hidden
}