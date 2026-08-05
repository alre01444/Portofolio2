const animations = [

["line-html",".html-dot",0],
["line-css",".css-dot",400],
["line-js",".js-dot",800],
["line-php",".php-dot",1200],

["line-mysql",".mysql-dot",1600],
["line-git",".git-dot",2000],
["line-github",".github-dot",2400],
["line-figma",".figma-dot",2800]

];

animations.forEach(item=>{

const path=document.getElementById(item[0]);

const dot=document.querySelector(item[1]);

const length=path.getTotalLength();

function animate(){

let start=null;

function frame(time){

if(!start) start=time;

let progress=((time-start)+item[2])%4000;

let point=path.getPointAtLength(

(progress/4000)*length

);

dot.setAttribute("cx",point.x);

dot.setAttribute("cy",point.y);

requestAnimationFrame(frame);

}

requestAnimationFrame(frame);

}

animate();

});