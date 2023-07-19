function add()
{
let a=parseFloat(document.getElementById("value1").value);
let b=parseFloat(document.getElementById("value2").value);
let c=a+b;
document.getElementById("answer1").innerHTML="Addition is "+c;
document.getElementById("name").innerHTML="Addition is "
}
function sub()
{
let a=parseFloat(document.getElementById("value1").value);
let b=parseFloat(document.getElementById("value2").value);
let c=a-b;
document.getElementById("answer1").innerHTML="Substraction is "+c;
document.getElementById("name").innerHTML="Substraction is "
}
function mul()
{
let a=parseFloat(document.getElementById("value1").value);
let b=parseFloat(document.getElementById("value2").value);
let c=a*b;
document.getElementById("answer1").innerHTML="Multiplication is "+c;
document.getElementById("name").innerHTML="Multiplication is "
}
function div()
{
let a=parseFloat(document.getElementById("value1").value);
let b=parseFloat(document.getElementById("value2").value);
let c=a/b;
document.getElementById("answer1").innerHTML="Division is "+c;
document.getElementById("name").innerHTML="Division is "
}
function mod()
{
let a=parseFloat(document.getElementById("value1").value);
let b=parseFloat(document.getElementById("value2").value);
let c=a%b;
document.getElementById("answer1").innerHTML="Modulus is "+c;
document.getElementById("name").innerHTML="Modulus is "
}