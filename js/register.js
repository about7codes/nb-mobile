// Register Form steps switch JS ----------------------------------------

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const nxregContent = document.getElementById('nxreg-content');
const nxtBtn = document.getElementById('nxt-btn');;
const backBtn = document.getElementById('back-btn');;

// Highlight of step heads
function stepHead(){

    if(nxregContent.classList.contains('step-switch')){
        step1.classList.remove('active');
        step2.classList.add('active');
    }else{
        step1.classList.add('active');
        step2.classList.remove('active');
    }
}


// Moving to step 2 
nxtBtn.addEventListener('click', ()=> {
    nxregContent.classList.add('step-switch');
    stepHead();
});

// Back to step 1 
backBtn.addEventListener('click', () => {
    nxregContent.classList.remove('step-switch');
    stepHead();
})



// Show/Hide password input type 

const nxregPass = document.getElementById('nxreg-pass');
const showPass = document.getElementById('showpass');


function changeType(){
    if(nxregPass.type == 'password'){
        nxregPass.type = 'text';
        showPass.classList.add('hidepass');
    }else{
        nxregPass.type = 'password';
        showPass.classList.remove('hidepass');
    }

}


showPass.addEventListener('click', changeType)