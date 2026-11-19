var buttons = document.querySelectorAll(".drum");

for(let i =0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let buttonName = buttons[i].innerHTML.toLowerCase();
        let audio = document.querySelector("#"+ buttonName)
        audio.play();
    })
}

//Keyboard Linking

document.addEventListener("keydown", function(event){
    var buttonName = event.key.toLowerCase();
    var audio = document.querySelector("#" + buttonName);
    if (audio !== null){
        audio.play();
    }
})