let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.video-container video').forEach(vid =>{
    vid.onclick=() => {
   document.querySelector('.popup-video').style.display= 'block';
   document.querySelector('.popup-video video').src= vid.getAttribute('src');
   }
});

document.querySelector('.popup-video span').onclick=() => {
document.querySelector('.popup-video').style.display= 'none';
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
