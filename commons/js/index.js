window.addEventListener('scroll',navBar);

function navBar(){
    let navi = document.querySelector('#visual_bar');
    let navi_back = document.querySelector('.bgcolor');
    if (document.documentElement.scrollTop == 0){
        navi.setAttribute('class','')
        navi_back.setAttribute('class','bgcolor ');
    } else {
        navi.setAttribute('class','vbar_up') 
        
        navi_back.setAttribute('class','bgcolor bg');
    
    }

}

function imagesearch(){
    let imageJson = {};
    var herofull = document.getElementsByClassName('hero_full');
    herofull.forEach((ele,index)=>{
        
    });
}

let saveEle;
function changeImages(e){
    let herolist = document.getElementsByClassName('pic');
    let herofull = document.getElementsByClassName('hero_full');
    let herotxt = document.getElementsByClassName('txt');
    let txt = e.currentTarget.className.split(' ');

    image = document.querySelector('.'+txt[1]+'.'+'hero_full');
    saveImage = document.querySelector('.'+saveEle+'.'+'hero_full');


    image.classList.add('hero_fullon');
    if (saveEle == txt[1] ) {
        return 0;
    }

    if (saveImage != undefined){
        saveImage.classList.remove('hero_fullon');  
        saveImage.classList.add('hero_full');
    }

    text = document.querySelector('.'+'hero'+'.'+txt[1]+'.'+'txt');
    console.log(text);
    saveText = document.querySelector('.'+'hero'+'.'+saveEle+'.'+'txt');
    console.log(saveText);

    text.classList.add('txt_on');

    if(saveText != undefined){
        saveText.classList.remove('txt_on');
        saveText.classList.add('txt');
    }
    saveEle = txt[1];
}

function init(){
    let herofull = document.getElementsByClassName('hero_full');
    let herolist = document.getElementsByClassName('pic');
    let herotxt = document.getElementsByClassName('txt');
   
    for(i=0; i<herolist.length; i++){
        herolist[i].addEventListener('mouseenter',changeImages);
        
    }

}
window.addEventListener('DOMContentLoaded',init);
