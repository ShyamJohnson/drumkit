var sel = document.querySelectorAll("button").length
var w = new Audio('sounds/kick-bass.mp3')
var a = new Audio('sounds/crash.mp3')
var s = new Audio('sounds/snare.mp3')
var d = new Audio('sounds/tom-1.mp3')
var j = new Audio('sounds/tom-2.mp3')
var k = new Audio('sounds/tom-3.mp3')
var l = new Audio('sounds/tom-4.mp3')
var skks = 0
for (i = 0;i<sel;i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        skks = this.textContent
        skks.play()
        
    })
}