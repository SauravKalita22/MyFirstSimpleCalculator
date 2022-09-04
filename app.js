// FUNCTION TO CLEAR THE SCREEN
document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#calculate").innerText="";
});
// Back
document.querySelector("#back").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    var length = query.length;
    var back = query.slice(0,length-1);
    document.querySelector("#calculate").innerText= back;
});
// %
document.querySelector("#percentage").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "%";
});
// /
document.querySelector("#divide").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "/";
});
// 1
document.querySelector("#one").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "1";
});
// 2 
document.querySelector("#two").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "2";
});
// 3 
document.querySelector("#three").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "3";
});
// +
document.querySelector("#add").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "+";
});
// 4
document.querySelector("#four").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "4";
});
// 5
document.querySelector("#five").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "5";
});
// 6
document.querySelector("#six").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "6";
});
// -
document.querySelector("#subtract").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "-";
});
// 7
document.querySelector("#seven").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "7";
});
// 8
document.querySelector("#eight").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "8";
});
// 9 
document.querySelector("#nine").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText=  query + "9";
});
// multiply
document.querySelector("#multiply").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "*";
});
//zero
document.querySelector("#zero").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "0";
});
// double zero
document.querySelector("#dbzero").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    document.querySelector("#calculate").innerText= query + "00";
});
// decimal
document.querySelector("#decimal").addEventListener("click",()=>{
    var query = document.querySelector("#calculate").innerText;
    if(!query.includes(".")){
        document.querySelector("#calculate").innerText= query + ".";
    }
});
// equals
document.querySelector("#equals").addEventListener("click",()=>{
    var calculated = document.querySelector("#calculate").innerText;
    var total = eval(calculated);
    document.querySelector("#calculate").innerText = total;
});