const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    markers:false
  });
  
  
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'initial'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  
  var aboutebtn = document.querySelector('#aboute');
  var contactbtn = document.querySelector('#contact');
  var socialbtn = document.querySelector('#social');
  
  var aboutesec = document.querySelector('.aboute-section');
  var contactsec = document.querySelector('.contact-section');
  var socialsec = document.querySelector('.social-section');
  
  aboutebtn.addEventListener("click",function(){
    aboutesec.style.display = "initial"
  })
  contactbtn.addEventListener("click",function(){
    contactsec.style.display = "initial"
  })
  socialbtn.addEventListener("click",function(){
    socialsec.style.display = "initial"
  })
  
  //mobile ke liye
  var aboutemob = document.querySelector('.aboutemob');
  var contactmob = document.querySelector('.contactmob');
  var socialemob = document.querySelector('.socialmob');
  
  
  aboutemob.addEventListener("click",function(){
    aboutesec.style.display = "initial"
  })
  contactmob.addEventListener("click",function(){
    contactsec.style.display = "initial"
  })
  socialemob.addEventListener("click",function(){
    socialsec.style.display = "initial"
  })
  
  
  
  
  
  
  
  // gsap start 
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.9,
  });
  
  
  Shery.imageMasker(".right img", {
  
    mouseFollower: true,
    text: "Umesh",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet(".right img" , {
  
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  
  Shery.textAnimate(".left span " , {
  
    style: 1,
    y: 10,
    delay: 1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });