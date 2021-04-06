
// live page drop-down

const nxtypeA = document.getElementById('nxtype-a');
const nxtypeAll = document.getElementById('nxtype-all');


function nxtypeToggle(){
  nxtypeAll.classList.toggle('dispit');
}

nxtypeA.addEventListener('click', nxtypeToggle);


// Dropdown on live page *-------------------------------


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
  
  
  const nxcardA = document.getElementsByClassName('nxcard-a');
  const nxcardArrow = document.getElementsByClassName('nxcard-arrow');
  const nxcardB = document.getElementsByClassName('nxcard-b');
  
  
  for (let i = 0 ; i < nxcardA.length; i++) {
    nxcardA[i].addEventListener('click' , ()=> {

      nxcardArrow[i].classList.toggle("rotate90");
  
      const section = nxcardB[i];
      const isCollapsed = section.getAttribute('data-collapsed') === 'true';
      
      if(isCollapsed) {
        expandSection(section)
        section.setAttribute('data-collapsed', 'false')
      } else {
        collapseSection(section)
      }
  
    } ); 
  }