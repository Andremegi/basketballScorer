let pointsHome = document.getElementById("points_home")
let pointsGuest = document.getElementById("points_guest")

let count = 0
let countg = 0

pointsHome.innerText=count
pointsGuest.innerText=countg


function plus1(){
    count +=1
    pointsHome.innerText=count

}
function plus2(){
    count +=2
    pointsHome.innerText=count

}
function plus3(){
    count +=3
    pointsHome.innerText=count

}
function plus1g(){
    countg +=1
    pointsGuest.innerText=countg

}
function plus2g(){
    countg +=2
    pointsGuest.innerText=countg

}
function plus3g(){
    countg +=3
    pointsGuest.innerText=countg

}
function newgame(){
    count = 0
    pointsHome.innerText=count

    countg =0
    pointsGuest.innerText=countg
}