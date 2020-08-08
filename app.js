const intro=document.querySelector('.intro');
const video=intro.querySelector('video');
const text=intro.querySelector('h1');
//end intro
const section=document.querySelector('section');
const end =section.querySelector('h1');
//scroll magic
//create the controller to the scrollmagic
const controller=new ScrollMagic.Controller();

//create the scene to hte scroll and make a duration to it=>
let scene =new ScrollMagic.Scene({
    duration:9000,//the red thing on the screen and it depend on the video seconds and it increase the scroll
    triggerElement: intro,
    triggerHook:0,//the blue thing  and this if you want to make the efect start from the begging make it 0 or else

}).setPin(intro).addTo(controller);
//addIndicators is the blue and red thing you see on the screen and it's for the test
//setPin function make the thing you pin stay in his place while you scroll
//any scene you create you must to add it to the controller

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

const textAnim2 = TweenMax.fromTo(end, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

  let scene3 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: section,
    triggerHook: 0.5
  })
    .setTween(textAnim2)
    .addTo(controller);


//Video Animation
//this like the transtion give you a time whrn you scroll
let accelamount = 0.1;
//the scroll postion  you want to start from
let scrollpos = 0;
//the time you want to catch up with you on thw setinterval
let delay = 0;
 
//every time the scroll update 
scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    
});
setInterval(()=>{
    delay+=(scrollpos -delay) *accelamount;
    video.currentTime=delay;
    
},15);
