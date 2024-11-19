let homepage = document.querySelector(".main");
let card = document.querySelector(".trand");
let about = document.querySelector(".about");
let card2 = document.getElementById("trandsec");
let contact = document.querySelector(".contact")
let blog = document.querySelector(".trands");

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


function homes(){
    homepage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";

    
    document.getElementById("home").style.color="rgb(5, 142, 142)";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";

}
function shops(){
    homepage.style.display="none";
    blog.style.display="none";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(5, 142, 142)";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
}
function blogs(){
    homepage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";


    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="rgb(5, 142, 142)";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    
}
function abouts(){
    homepage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    contact.style.display="none";
    about.style.display="block";

    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(5, 142, 142)";
}



function contacts(){
    homepage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";

    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(5, 142, 142)";

}













// problem 
// pik ar oopur clock korle product ar all deteals ase na ?
















// single card start 
function cart(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.sre=img.sre;

    homepage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";


    document.querySelector(".cart").style.display="flex";
}