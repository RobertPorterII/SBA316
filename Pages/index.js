// Creating a header and footer
function createFooter() {
    let header="Darth Vader: A Star Wars Story";
    let footer="LucasFilms 2024";
    document.body.innerHTML=header+document.body.innerHTML+footer;
}
window.addEventListener("load", createFooter);

// styling the header and footer cause u cant see em with all black back ground
 // cant figure out how to color the header and footer i made.. but their on the page
 //document.getElementsBy("Footer").style.color = "red";
// gonna just my code to color a different element

//document.getElementById("Story").style.color = "blue";

// css is currently overiding my DOM commands so it wont style over the css styling 
// going just add a little text to Trailer section so i can DOm style it
document.getElementById("Trailer").style.color = "blue";
 
