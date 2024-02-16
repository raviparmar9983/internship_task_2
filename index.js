

function change() {
    var btn1 = document.getElementById('tab-btn1');
    var btn2 = document.getElementById('tab-btn2');
    btn1.style.backgroundColor = "rgba(241, 124, 33, 1)";
    btn1.style.color = "rgb(255, 255, 255, 1)";
    btn2.style.backgroundColor = "transparent";
    btn2.style.color = "rgba(98, 112, 101, 1)";
    let coll1=document.getElementsByClassName("p111");
    let coll2=document.getElementsByClassName("p222");
    for(let i=0;i<coll1.length;i++){
        coll1[i].style.display="block";
        coll2[i].style.display="none";
    } 
}
function change2() {
    var btn1 = document.getElementById('tab-btn1');
    var btn2 = document.getElementById('tab-btn2');
    btn2.style.backgroundColor = "rgba(241, 124, 33, 1)";
    btn2.style.color = "rgb(255, 255, 255, 1)";
    btn1.style.backgroundColor = "transparent";
    btn1.style.color = "rgba(98, 112, 101, 1)";
    let coll1=document.getElementsByClassName("p111");
    let coll2=document.getElementsByClassName("p222");
    
    for(let i=0;i<coll1.length;i++){
        coll1[i].style.display="none";
        coll2[i].style.display="block";
    } 
}