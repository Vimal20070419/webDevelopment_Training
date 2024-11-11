var a= parseFloat(prompt("enter your your phy mark"))
let b= parseFloat(prompt("enter your your math mark"))
let c= parseFloat(prompt("enter your your chemistry mark"))
console.log("1.sum of u mark \n 2.avg of u mark \n 3.number of subject pass")
var d=parseInt(prompt("enter your ur choice"))

if(d==1){
    var g=a+b+c;
    console.log("sum of u mark is",g);
}
else if(d==2){
    var g=a+b+c/3;
    console.log("avg of u mark is",g);
}
else if(d==3){
   if(a>=35 && b>=35 && c>=35){
    console.log("all pass")}
   else if(a<35 && b>=35 && c>=35){
    console.log("phy fail")}
    else if(a>=35 && b<35 && c>=35){
        console.log("math fail");}
    else if(a>=35 && b>=35 && c<35){
        console.log("chemistry fail")}  }

else{
    console.log("-----");
    
}