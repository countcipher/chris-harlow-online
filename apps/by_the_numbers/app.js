const numbers = document.querySelector('.numbers');

let int = 0;

window.addEventListener('scroll', myFunc);

//numbers.addEventListener('click', myFunc);



function myFunc(){
    const goUp = setInterval(function(){
    const trigger = window.innerHeight + 200;
    const boxTop = numbers.getBoundingClientRect().top;

        if(boxTop < trigger){
            console.log(int);

    
    
        if(int < 10){
            int++;
        }
    
        if(int >= 10){
            clearInterval(goUp);
            
        }
    
        numbers.innerText = int;
        }
        
    }, 500);
}



