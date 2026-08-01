let bouquet = document.getElementById("bouquet");
let emptyText = document.getElementById("empty");

let flowerCount = 0;


function addFlower(flowerName) {


    // remove empty message

    if (flowerCount === 0) {
        emptyText.style.display = "none";
    }


    let flower = document.createElement("img");


    flower.src = `images/${flowerName}.jpg`;

    flower.classList.add("flower-added");



    // random bouquet placement

    let positions = [
        {x:-120, y:20},
        {x:-80, y:-20},
        {x:-40, y:40},
        {x:0, y:-30},
        {x:40, y:20},
        {x:80, y:-10},
        {x:120, y:30}
    ];


    let pos = positions[flowerCount % positions.length];



    flower.style.left =
    `calc(50% + ${pos.x}px)`;


    flower.style.bottom =
    `${80 + pos.y}px`;



    // slight rotation

    flower.style.transform =
    `rotate(${Math.random()*30-15}deg)`;



    bouquet.appendChild(flower);


    flowerCount++;

}





function sparkleBouquet() {

    const bouquet = document.getElementById("bouquet");

    for (let i = 0; i < 40; i++) {

        let sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * bouquet.offsetWidth + "px";
        sparkle.style.top = Math.random() * bouquet.offsetHeight + "px";

        sparkle.style.animationDelay = Math.random() * 0.5 + "s";

        bouquet.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}




function openLetter(){


let letter =
`
My Love 💗

I hope you know how special you are.

Just like every flower in this bouquet,
you bring something beautiful into my life.

Thank you for being my happiness,
my comfort,
and my favorite person.

I hope this little garden reminds you
that you are loved every single day 🌸

Forever yours 💌
`;



let box=document.getElementById("letter");


box.style.display="block";


let i=0;


box.innerHTML="";



let typing=setInterval(()=>{


box.innerHTML += letter[i];


i++;


if(i>=letter.length){

clearInterval(typing);

}


},40);



}
