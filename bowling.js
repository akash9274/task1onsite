var randomnum

var battingscore = 0
var bowlingscore =0
var newnumb = document.createElement("div")
var y=0

function getvalue(x){
    console.log(x)

    var randomnum=Math.floor(Math.random()*6)+1
    const playernumb =document.getElementById("player")
    const computernumb =document.getElementById("comp")
    playernumb.innerHTML="PLAYER NUMBER : " + x

    computernumb.innerHTML="COMPUTER GENERATED NUMBER : " + randomnum

    if(randomnum==x&&y==0){
        const bowlingdisplay =document.createElement("div")
        const content= document.createTextNode("BATTING WITH SCORE TO BEAT : " + bowlingscore)
        bowlingdisplay.appendChild(content)
        document.body.appendChild(bowlingdisplay)
        y=1
    }
    else if(randomnum==x&&y==1&&bowlingscore>battingscore){
        alert("YOU HAVE LOST BY"+(bowlingscore-battingscore))
        window.location.reload()
    }
    else if(y==0)
    bowlingscore+=x
    else if(y==1)
    battingscore+=x

    if(battingscore>bowlingscore)
    {alert("YOU HAVE WON")
    location.reload()}
}

    
