let stars1=document.getElementById("stars1");
let moon2=document.getElementById("moon2");
let mountains30=document.getElementById("mountains30");
let mountains40=document.getElementById("mountains40");
let river50=document.getElementById("river50");
let boat6=document.getElementById("boat6");
let mountains70=document.getElementById("mountains70");
let laith=document.getElementById("laith");
let samer1=document.getElementById("samer1");

let signin =document.getElementById("signin");

samer1.style.display="none";
signin.onclick=function()
{

    samer1.style.display="block";

}







onscroll=function()
{
    let value = scrollY
    samer1.style.top =value*3 + "px";
    stars1.style.left =value + "px";
    moon2.style.top =value*3 + "px";
    mountains30.style.top =value*1.8 + "px";
    mountains40.style.top =value*1.5 + "px";
    river50.style.top =value*-0.05 + "px";
    boat6.style.left =value*3 + "px";

    laith.style.fontSize =value*0.3 + "px";
    if(scrollY >= 80){


        laith.style.fontSize =35 + "px";
        laith.style.position = "fixed";
        if(scrollY >=140){

            laith.style.display = "none";
             mountains30.style.display = "none";
             mountains40.style.display = "none";
             moon2.style.display = "none";
        }else{laith.style.display = "block";
        mountains30.style.display = "block";
        mountains40.style.display = "block";
        moon2.style.display = "block";

    }

    if(scrollY >=127){

        document.querySelector('.molar').style.background="linear-gradient(#ffff,#042094)";
    }else{ document.querySelector('.molar').style.background="linear-gradient(#00020a,#042094)"};
    }
    
}





let email=document.getElementById("email");
let email1=document.getElementById("email1");
let password=document.getElementById("password");
let password1=document.getElementById("password1");
let submit=document.getElementById("submit");
let submit1=document.getElementById("submit1");
let submit2=document.getElementById("submit2");
let loader3=document.querySelector(".loader3");
let b=document.querySelector(".b");
let page2=document.querySelector(".page2");







submit2.style.display="none";

loader3.style.display="none";
submit1.style.display="none";
b.style.display="none";
page2.style.display="none";
submit.style.display="none";


submit.onkeyup =function(){
    if(email.value && password.value !="")
    {
        submit.style.background="green";
    }
}


email.onkeyup =function(){

    if(email.value !="")
    {

         
         submit2.style.display="block";
         submit.style.display="block";

    }else{page2.style.display="none";
    
    submit2.style.display="none";
    submit.style.display="none";
}




}








submit.onclick = function(){

if(password&&email !="")
{

submit.style.background="green";

}else{

}


}






 submit2.onclick = function(){




 if (email.value == email1.value 
    && password.value == password1.value)

    {
       
submit2.style.background="green";
submit2.style.transition="3s";
submit.style.display="block";
loader3.style.display="block";
b.style.display="block";
page2.style.display="block";


 }else{
    page2.style.display="none";
    submit.style.display="none";
    submit1.style.background="red";
    submit1.style.display="block";
    submit2.style.display="none";
    loader3.style.display="none";
    b.style.display="none";
    

 }

 clear()

}




function clear(){

    email.value="";
    email1.value="";
    password.value="";
    password1.value="";


}




localStorage.setItem('pro', JSON.stringify(datapro));
let datapro;
if(localStorage.pro != null){

datapro = JSON.parse(localStorage.pro)

}else{

datapro=[];

}





