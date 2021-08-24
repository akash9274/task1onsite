var randomnum

var score = 0
var newnumb = document.createElement("div")


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

    if(randomnum==x){
        alert("YOU HAVE BEEN BOWLED OUT WITH SCORE OF "+score)
        document.location.reload()
    }
    else
    score= score+x

    
}



