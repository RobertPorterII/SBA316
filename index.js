//Creating a header and footer
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
document.getElementById("trailer").style.color = "blue";

 // styling the main body and adding some text to main body with DOm


 
// creating nav Bar at top
const topMenuEl = document.getElementById("top-menu");

// styling no working but links do go to thier desired sections
// topMenuEl.style.height = "100%";
// topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// topMenuEl.setAttribute("class", "flex-around");
var menuLinks = [
    { text: "Story", href: "#story" },
    
    {
      text: "Cast&Crew",
      href: "#cast",
    },
    {
      text: "Trailer",
      href: "#trailer",
    },
  ];
  menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });

  // Making a line break at bottom of page
  let x = document.createElement("HR");
  document.body.appendChild(x);

  // Removing the random text i made just so i could remove it with Dom
  const elmnt = document.getElementById("p1");
  elmnt.remove("p1");

  