function convertTemperatureRange() {
   let startValue = Number(prompt("Enter a starting temperature"));
   let endValue = Number(prompt("Enter an ending temperature")); 
   let scale = prompt("Enter a Scale of F or C CAPITALIZED ONLY");  
   let html = document.getElementById("results"); 
   for ( let i = startValue; i <= endValue; i++ ) {
    if ( scale === "F" ) {
        let celsius = (i-32) * 5/9 
        console.log(celsius);
        html.innerHTML += `<p>${celsius.toFixed(2)} C converts from ${i} F </p>`
    } else if  ( scale === "C" ) {
        let fahrenheit = (i * 9/5) + 32
        html.innerHTML += `<p>${fahrenheit.toFixed(2)} F converts from ${i} C </p>`    
    } else {
        alert("Please enter capital F or C");
    }
    console.log( i, scale );
    }
}

