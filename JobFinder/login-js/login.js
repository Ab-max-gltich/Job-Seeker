const titleIn = document.querySelector('#in'),
    titleUp = document.querySelector('#up'),
    signIn = document.querySelector('.in'),
    signUp = document.querySelector('.up');


console.log(signUp);






events()

function events() {
    titleIn.addEventListener('click', changeTitSelector)
    titleUp.addEventListener('click', changeTitSelector)
}




function changeTitSelector(e) {
    console.log(e.srcElement.innerText);
    let pathItem = e.srcElement.innerText
        // Check if it is already selected when a button is clicked
    if (pathItem == 'Sign In' && titleIn.classList.length > 1) {
        console.log('Nothing');
    } else if (pathItem == 'Sign Up' && titleUp.classList.length > 1) {
        console.log('Nothing');
    }

    // Check which animation needs to be changed
    else if (pathItem == 'Sign In' && titleIn.classList.length > 0) {
        // change animation when clicked
        //replace animation classes
        signUp.classList.replace('anime--show', 'anime--hidden')




        // change animation after 800ms
        setTimeout(() => {

            signUp.style.display = 'none'
            signIn.style.display = 'block'
            signIn.classList.add('anime--show')

            // remove anime hidden from signUp
            signUp.classList.remove('anime--hidden')
        }, 800);

        // change selected class when click ob titles
        titleUp.classList.remove('selected--section')
        titleIn.classList.add('selected--section')



        // Sign Up click
    } else if (pathItem == 'Sign Up' && titleUp.classList.length > 0) {
        signIn.classList.add('anime--hidden')
        signIn.classList.remove('anime--show')


        setTimeout(() => {

            signIn.style.display = 'none'
            signUp.style.display = 'block'
            signUp.classList.add('anime--show')

            // remove anime hidden from signIN
            signIn.classList.remove('anime--hidden')

        }, 800);

        // change selected class when click ob titles
        titleUp.classList.add('selected--section')
        titleIn.classList.remove('selected--section')



    }
}
