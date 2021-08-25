var randomnum

var battingscore = 0
var bowlingscore =0
var newnumb = document.createElement("div")
var y=0

function getvalue(x){
    console.log(x)

    var randomnum=Math.floor(Math.random()*6)+1
    const playernumb =document.createElement("div")
    const newcontent= document.createTextNode("PLAYER NUMBER : " + x)

    playernumb.appendChild(newcontent)
    document.body.appendChild(playernumb)

    const computernumb =document.createElement("div")
    const newcontent2= document.createTextNode("COMPUTER GENERATED NUMBER : " + randomnum)

    computernumb.appendChild(newcontent2)
    document.body.appendChild(computernumb)

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


    
