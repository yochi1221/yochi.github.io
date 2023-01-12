function openNav() {
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

const moreButton = document.querySelector('.moreButton')
    moreButton.addEventListener('click', function(){
        document.querySelector('.moreText').classList.toggle('show')
        document.querySelector('.moreButton').classList.toggle('show')
        document.querySelector('.dots').classList.toggle('show')
    })  
