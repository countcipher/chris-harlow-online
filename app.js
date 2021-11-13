const toolboxImg = document.querySelectorAll('.toolbox');
const sections = document.querySelectorAll('section');
const contact_modal_button = document.querySelector('#contact_modal_button');
const contact_modal = document.querySelector("#contact_modal");
const close_modal_button = document.querySelector('#close_modal_button');


//Trigger for showing sections onscroll
window.addEventListener('scroll', showSections);

//Function for showing modal
contact_modal_button.addEventListener('click', () => {
    contact_modal.classList.add('reveal');
});

//Function for closing modal
close_modal_button.addEventListener('click', () => {
    contact_modal.classList.remove('reveal');
});

//Anonymous function controlling bouncing logos in
//Toolbox section
(function(){
    toolboxImg[0].style.animation = "move1 1s infinite";
    toolboxImg[1].style.animation = "move1 1.5s infinite";
    toolboxImg[2].style.animation = "move1 2s infinite";
    toolboxImg[3].style.animation = "move1 2s infinite";
    toolboxImg[4].style.animation = "move1 1.5s infinite";
    toolboxImg[5].style.animation = "move1 1s infinite";
    toolboxImg[6].style.animation = "move1 .5s infinite";
})();

//Showing sections onscroll function
function showSections(){
    const triggerBottom = window.innerHeight - 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if(sectionTop < triggerBottom){
            section.classList.add('show');
        }
    });
}