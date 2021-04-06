// Show/Hide password input type 

const nxlogPass = document.getElementById('nxlog-field-pas');
const showPass = document.getElementById('showpass');



function changeType(){
    if(nxlogPass.type == 'password'){
        nxlogPass.type = 'text';
        showPass.classList.add('hidepass');
    }else{
        nxlogPass.type = 'password';
        showPass.classList.remove('hidepass');
    }

}


showPass.addEventListener('click', changeType);