var sel = document.querySelectorAll("button").length
for (i = 0;i<sel;i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click",function (skks = this.innerHTML) {
        
        keyboard(this.innerHTML)
        
    })
}

document.addEventListener("keypress",function(eve) {
    keyboard(eve.key)
    
});

function keyboard(key){
    switch (key) {
        case "w":
            var w = new Audio('sounds/kick-bass.mp3')
            w.play()
            break
            
        case "a":
            var a = new Audio('sounds/crash.mp3')
            a.play()
            break
        case "s":
            var s = new Audio('sounds/snare.mp3')
            s.play()      
            break
            
        case "d":
            var d = new Audio('sounds/tom-1.mp3')
            d.play()
            break

        case "j":
            var j = new Audio('sounds/tom-2.mp3')
            j.play()
            break

        case "k":
            var k = new Audio('sounds/tom-3.mp3')
            k.play()
            break

        case "l":
            var l = new Audio('sounds/tom-4.mp3')
            l.play()
            break

        default:
            console.log(this.innerHTML)




    }
}
