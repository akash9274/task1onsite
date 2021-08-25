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
        const battingdisplay =document.createElement("div")
        const content= document.createTextNode("BOWLING WITH SCORE TO DEFEND : " + battingscore)
        battingdisplay.appendChild(content)
        document.body.appendChild(battingdisplay)
        y=1
    }
    else if(randomnum==x&&y==1&&bowlingscore<battingscore){
        alert("You have won by"+(battingscore-bowlingscore))
        window.location.reload()
    }
    else if(y==0)
    battingscore= battingscore+x
    else if(y==1)
    bowlingscore= bowlingscore+x

    if(bowlingscore>battingscore)
    {alert("YOU HAVE LOST ")
    location.reload()}
}




