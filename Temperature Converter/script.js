//create variables to store element from html
const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")

//to perform the action
function computeTemp(event){
    const currentValue = +event.target.value//+ is added so that value gets added in real time

    switch (event.target.name){
        case "celsius":
            kelvin.value = (currentValue + 273.32).toFixed(2)//toFixed=to make 2 decimal no.s
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        
        case "fahrenheit":
            celsius.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
            break;

        case "kelvin":
            celsius.value = (currentValue - 273.32).toFixed(2)
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2)
            break;

        default:
            break;
    }
}