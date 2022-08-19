var player=document.querySelector(".player")
var block = document.querySelector('.block');
var btn=document.querySelector("button")
function jump(){
    if (player.classList != 'animation') {
        player.classList.add("animation")
    }
    setTimeout(() => {
        player.classList.remove("animation");
    }, 500);
}

var checDead = setInterval(() => {

    var characterTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))

    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if(blockleft < 40 && blockleft > 0 && characterTop >= 98){
        block.style.animation = 'none'
        btn.style.display="block"
    }
});