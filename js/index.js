// Your code goes here

//variables
const imgList = document.querySelectorAll('img');
const navHeader = document.querySelector('.logo-heading');
const pList = document.querySelectorAll('p');
const header = document.querySelector('.main-navigation');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
console.log(header);

//add event 

imgList.forEach((item)=>{
    item.addEventListener('mouseover',(event)=>{
        event.target.style.borderRadius = '100px';
    })
});

navHeader.addEventListener('dblclick',(event)=>{
    event.target.style.fontSize = '100px';
});

pList.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        event.target.style.color = 'green'
    });
});

document.addEventListener('keydown',(event)=>{
    console.log('hi');
    header.style.backgroundColor = 'yellow';
});

window.onresize = ()=>{
    body.style.backgroundColor = 'blue'
}

nav.addEventListener('mouseleave', (event)=>{
    nav.style.color = 'blue';
});
