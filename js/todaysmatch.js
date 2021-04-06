
// (Choose Sport) Slider on Todays match page JS 

window._ = new Glider (document.querySelector ('.ncglider'), {

    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    rewind: true,
    scrollLock: true,
    arrows: {
        prev: '.ncglider-prev',
        next: '.ncglider-next'
    },
    
});




// Dropdown on Todays Match page *-------------------------------


// This is the important part!

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;
    
    // temporarily disable all css transitions
    let elementTransition = element.style.transition;
    element.style.transition = '';
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;
    
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
  
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener('transitionend', arguments.callee);
      
      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });
    
    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }
  
  
const bxTop = document.getElementsByClassName('bx-top');
const bxDown = document.getElementsByClassName('bx-down');


for (let i = 0 ; i < bxTop.length; i++) {
  bxTop[i].addEventListener('click' , ()=> {

    const section = bxDown[i];
    const isCollapsed = section.getAttribute('data-collapsed') === 'true';
    
    if(isCollapsed) {
        expandSection(section)
        section.setAttribute('data-collapsed', 'false')
      } else {
        collapseSection(section)
    }

  } );
}



// Popular Markets show/hide ------------------------------------

// Infobox show/hide 
const mktInfoBtn = document.getElementById('mkt-info-btn');
const mktInfoBox = document.getElementById('mkt-info-box');


mktInfoBtn.addEventListener('click' , ()=> {

  if(mktInfoBox.style.display === 'block'){
    mktInfoBtn.classList.remove('fa-times-circle');
    mktInfoBtn.classList.add('fa-info-circle');
    mktInfoBox.style.display = 'none';
  }else{
    mktInfoBtn.classList.add('fa-times-circle');
    mktInfoBtn.classList.remove('fa-info-circle');
    mktInfoBox.style.display = 'block';
  }

});





// Main content show/hide 
const chMkt = document.getElementById('ch-mkt');
const mktArrow = document.getElementById('mkt-arrow');
const mktB = document.getElementById('mkt-b');


chMkt.addEventListener('click' , ()=> {

  if(mktB.style.display === 'block'){
    chMkt.classList.remove('show');
    mktArrow.style.transform = '';
    mktB.style.display = 'none';
  }else{
    chMkt.classList.add('show');
    mktArrow.style.transform = 'rotate(180deg)';
    mktB.style.display = 'block';
  }

} ); 


// Popular mkts Accordion-Box show/hide 
const accordionToggle = document.getElementsByClassName('accordion-toggle');
const accordionContent = document.getElementsByClassName('accordion-content');


for (let i = 0 ; i < accordionToggle.length; i++) {
  accordionToggle[i].addEventListener('click' , ()=> {
    
    if(accordionContent[i].style.display === 'block' || accordionContent[i].scrollHeight > 0){
      accordionToggle[i].classList.remove('collapsible');
      accordionContent[i].style.display = 'none';
    }else{
      accordionToggle[i].classList.add('collapsible');
      accordionContent[i].style.display = 'block';
    }

  }); 
}