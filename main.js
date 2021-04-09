var expensiveitem=[];
function submit(){
    var name1=document.getElementById("item1").value;
    var name2=document.getElementById("item2").value;
    var name3=document.getElementById("item3").value;
    var name4=document.getElementById("item4").value;
    var name5=document.getElementById("item5").value;
    var name6=document.getElementById("item6").value;
expensiveitem.push(name1);
expensiveitem.push(name2);
expensiveitem.push(name3);
expensiveitem.push(name4);
expensiveitem.push(name5);
expensiveitem.push(name6);
console.log(expensiveitem);
document.getElementById("display").innerHTML=expensiveitem;
document.getElementById("sub").style.display="none";
document.getElementById("sot").style.display="inline-block";
}
function sort(){
    expensiveitem.sort();
    console.log (expensiveitem);
    document.getElementById("display").innerHTML=expensiveitem;
}
