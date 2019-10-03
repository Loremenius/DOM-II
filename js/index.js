// Your code goes here

//random number and color functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function createColor(){
    const r = getRandomInt(255);
    const g = getRandomInt(255);
    const b = getRandomInt(255);
    return `rgb(${r},${g},${b})`
  }

//variables
const imgList = document.querySelectorAll('img');
const navHeader = document.querySelector('.logo-heading');
const pList = document.querySelectorAll('p');
const header = document.querySelector('.main-navigation');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const h2El = document.querySelectorAll('h2');
const all = document.querySelectorAll('*');
console.log(all);

//add event 

imgList.forEach((item)=>{
    item.addEventListener('mouseover',(event)=>{
        event.target.style.borderRadius = '100px';
    })
    item.addEventListener('mouseleave', (event)=>{
        item.style.width = '200px';
    });
});

navHeader.addEventListener('dblclick',(event)=>{
    event.target.style.fontSize = '100px';
});

pList.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        event.target.style.color = 'green'
    });
    item.addEventListener('wheel',(event)=>{
        event.preventDefault();
        event.target.style.color = createColor()
    });
});

document.addEventListener('keydown',(event)=>{
    console.log('hi');
    header.style.backgroundColor = 'yellow';
});

window.onresize = ()=>{
    body.style.backgroundColor = 'blue'
}

h2El.forEach((item)=>{
    item.addEventListener('mousemove',(event)=>{
        item.style.color = createColor();
    })
});
window.addEventListener('scroll',(event)=>{
    body.style.backgroundColor = createColor();
});
all.forEach((item)=>{
    item.addEventListener('contextmenu',(event)=>{
        event.target.style.display = 'none';
    })
})


