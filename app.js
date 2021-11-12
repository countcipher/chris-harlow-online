const toolboxImg = document.querySelectorAll('.toolbox');

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', showSections);

(function(){
    toolboxImg[0].style.animation = "move1 1s infinite";
    toolboxImg[1].style.animation = "move1 1.5s infinite";
    toolboxImg[2].style.animation = "move1 2s infinite";
    toolboxImg[3].style.animation = "move1 2s infinite";
    toolboxImg[4].style.animation = "move1 1.5s infinite";
    toolboxImg[5].style.animation = "move1 1s infinite";
    toolboxImg[6].style.animation = "move1 .5s infinite";
})();

function showSections(){
    const triggerBottom = window.innerHeight - 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if(sectionTop < triggerBottom){
            section.classList.add('show');
        }
    });
}