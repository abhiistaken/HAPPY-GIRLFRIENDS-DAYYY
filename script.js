let bouquet = document.getElementById("bouquet");
let emptyText = document.getElementById("empty");

let flowerCount = 0;


function addFlower(flowerName) {


    // remove empty message

    if (flowerCount === 0) {
        emptyText.style.display = "none";
    }


    let flower = document.createElement("img");


  flower.src = `${flowerName}.jpg`;

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





function wrapBouquet(){

    if(flowerCount===0){

        alert("Your bouquet needs flowers first 🌸");

        return;

    }

    document.querySelector(".ribbon").classList.add("show");



    for(let i=0;i<30;i++){

        let s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML=Math.random()>.5?"✨":"🌸";



        s.style.left=Math.random()*100+"%";

        s.style.top=(250+Math.random()*120)+"px";



        document.querySelector(".bouquet-area").appendChild(s);



        setTimeout(()=>{

            s.remove();

        },1600);

    }



    setTimeout(()=>{

        let msg=document.createElement("div");

        msg.className="complete-message";



        msg.innerHTML=`
        💐 Your bouquet is beautifully wrapped! <br><br>

        Every flower you chose reminds me of something I love about you. 🌸
        `;



        document.querySelector(".bouquet-area").appendChild(msg);



    },700);

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
