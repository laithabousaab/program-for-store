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