let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/slider 5.PNG"
  }
];

let slideIndex = 0;
let sliders = [];
const caraousel = document.querySelector(".caraousel");

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  let content = document.createElement("div");
  var slideImg = document.createElement("img");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  // slideImg.appendChild(document.createTextNode(''));
  caraousel.appendChild(slide);
  slide.appendChild(content);
  slide.appendChild(slideImg);
  content.appendChild(h1);
  content.appendChild(p);

  slideImg.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-desc";
  slideImg.className = "slider-img";
  
  sliders.push(slide);

  if(sliders.length){
      sliders[0].style.marginLeft=`calc(-${100* (sliders.length-2)}% - ${30* (sliders.length-2)}px)`;
  }
};

for(let i=0;i<5;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

//video-cards
const videoCards=document.querySelectorAll('.video-card');
videoCards.forEach(item=>{
  item.addEventListener('mouseover',()=>{
    let video=item.children[1];
    video.play();
    // console.log(video);
  });
  item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
    video.pause();
  });
});

//card-sliders

let cardContainers=document.querySelectorAll('.card-container');
let preBtns=document.querySelectorAll('.pre-btn');
let nextBtns=document.querySelectorAll('.next-btn');

cardContainers.forEach((item,i)=>{
  let containerDimensions=item.getBoundingClientRect();
  let containerWidth=containerDimensions.width;

  nextBtns[i].addEventListener('click',()=>{
    item.scrollLeft+=containerWidth-200;
  })
  preBtns[i].addEventListener('click',()=>{
    item.scrollLeft-=containerWidth+200;
  })
})

