let TotalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 0;

document.querySelector('.slideshow').style.width = `calc(100vw *${TotalSlides})`;




function Previous(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = TotalSlides - 1;
    }
    updateDisplay();
}

function Next(){
    currentSlide++
    if(currentSlide > (TotalSlides -1 )){
        currentSlide = 0;
    }
    updateDisplay();
}










function updateDisplay(){
    SlideWidth = document.querySelector('#container').clientWidth;
    NewMargin = (SlideWidth * currentSlide);
    document.querySelector('.slideshow').style.marginLeft = `-${NewMargin}px`;
    let posicaoSlide 
    switch(currentSlide){
        case 0:
            posicaoSlide ='1';
            document.querySelector('.btn-navi-slide .AL').style.display= 'none';
            break;
        case 1:
            posicaoSlide ='2';
            document.querySelector('.btn-navi-slide .AL').style.display= 'block';
            break;
        case 2:
            posicaoSlide ='3';
            document.querySelector('.btn-navi-slide .AL').style.display= 'block';
            break;
    }
    document.querySelector('.btn-navi-slide span').style.transform= 'translateY(225px)'
    setTimeout(()=>{
        document.querySelector('.btn-navi-slide span').innerHTML = posicaoSlide;
    },200)
    setTimeout(()=>{
        document.querySelector('.btn-navi-slide span').style.opacity = 0
        },100)  
    setTimeout(()=>{
    document.querySelector('.btn-navi-slide span').style.transform= 'translateY(-225px)'
    },100)  
    setTimeout(()=>{
        document.querySelector('.btn-navi-slide span').style.transform= 'translateY(0px)'
        },300)  
    setTimeout(()=>{
    document.querySelector('.btn-navi-slide span').style.opacity= 1;
            },400)  
    
}














function Search(){
    let searchArea = document.querySelector('.search');
    searchArea.classList.toggle('active');
}