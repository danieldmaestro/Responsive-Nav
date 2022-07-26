const navBtn = document.querySelector('.navBtn');
const links = document.querySelector('.links');
const navContainer = document.querySelector('.nav-container')

navBtn.addEventListener('click', function(){
    console.log('it works')
    links.classList.toggle('responsive');
    navContainer.classList.toggle('responsive');

})
