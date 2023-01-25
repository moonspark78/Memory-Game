
const image1 = document.getElementById("cd1");
const image2 = document.getElementById("cd2");
const image3 = document.getElementById("cd3");
const image4 = document.getElementById("cd4");
const image5 = document.getElementById("cd5");
const image6 = document.getElementById("cd6");
const image7 = document.getElementById("cd7");
const image8 = document.getElementById("cd8");
const image9 = document.getElementById("cd9");
const image10 = document.getElementById("cd10");
const image11 = document.getElementById("cd11");
const image12 = document.getElementById("cd12");
const image13 = document.getElementById("cd13");
const image14 = document.getElementById("cd14");
const image15 = document.getElementById("cd15");
const image16= document.getElementById("cd16");



const back= document.querySelector(".card__face--back");

const cards= document.querySelectorAll(".card");

const ta = [...cards];


/* [...cards] */
ta.forEach((card)=>{
    card.addEventListener( 'click', function() {
      card.classList.toggle('is-flipped');
    });
  });


  // Tableau des emojis:
  const emojis = ['🥑','🍆','🥔','🧅','🥜','🍄','🥦','🥕'];
  /* const emojis = ['qs','ww','mm','dn','tyu','rr','rt','ae']; */



  function randomIndex (array){
    return Math.floor(Math.random() * array.length)
  } 

  function randomMessage() {
    if (cards) {
      let nbrAleaoire = randomIndex(emojis);
      back.innerHTML = emojis[nbrAleaoire];
    }    
  }

image1.addEventListener("click", ()=>{
    randomMessage()
})

image2.addEventListener("click", ()=>{
    randomMessage()
    
})
image3.addEventListener("click", ()=>{
    randomMessage()
})


