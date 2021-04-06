


// Quick links show/hide function ----------------------------------

const nxboxContainer = document.getElementById('nxbox-container');
const nxboxToggle = document.getElementById('nxbox-toggle');
const nxboxOverlay = document.getElementById('nxbox-overlay');


nxboxToggle.addEventListener('click', ()=> {
  nxboxContainer.classList.toggle('open');
  const body = document.body;

  if(nxboxContainer.classList.contains('open')){
    body.style.overflow = 'hidden';
  }else{
    body.style.overflow = 'auto';
  }
});

nxboxOverlay.addEventListener('click', ()=> {
  nxboxContainer.classList.toggle('open');
  const body = document.body;

  if(nxboxContainer.classList.contains('open')){
    body.style.overflow = 'hidden';
  }else{
    body.style.overflow = 'auto';
  }
});


// Home page main slider js -----------------------------------

// Documentation - https://nickpiscitelli.github.io/Glider.js/

window._ = new Glider (document.querySelector ('.glider'), {

    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    rewind: true,
    scrollLock: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 700,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          // itemWidth: 150,
          // duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // itemWidth: 150,
          // duration: 0.25
        }
      }
    ]
});



var glider = new Glider(document.getElementById('nxmob-slider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 5000);



// Dropdown on Home page *-------------------------------


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





// Dummy for Charts 


// Our labels and three data series
var data = {
  labels: ['', '', '', '', '','', '', '','',''],
  series: [
      [15.75, 15.44, 13.25, 14, 15, 13.2, 14.5, 14, 13.5],
      [8, 8, 7.2, 8, 7.8, 8.1, 8.3, 8.4, 8.5],
      [1.12, 1.11, 1.23, 1.44, 1.22, 1.20, 1.54, 1.34, 1.04]
  ]
};
  
  // We are setting a few options for our chart and override the defaults
var options = {
  // Don't draw the line chart points
  showPoint: true,
  // Disable line smoothing
  lineSmooth: true,
  fullWidth: true,
  // X-Axis specific configuration
  axisX: {
      // We can disable the grid for this axis
      showGrid: true,
      // and also don't show the label
      showLabel: false
  },
  plugins: [
      Chartist.plugins.ctPointLabels({
      textAnchor: 'middle'
      })],
  chartPadding: {
    left: 20,
    right: 20,
    top: 30,
    bottom: 30
    },
  // Y-Axis specific configuration
  axisY: {
      // Lets offset the chart a bit from the labels
      offset: 30,
      // The label interpolation function enables you to modify the values
      // used for the labels on each axis. Here we are converting the
      // values into million pound.
      labelInterpolationFnc: function(value) {
      return value;
      }
  }
};

  // All you need to do is pass your configuration as third parameter to the chart function
new Chartist.Line('.ct-chart', data, options);