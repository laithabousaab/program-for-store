let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submite=document.getElementById('submite');
let mood='creat';
let tmp;

//gett total

function gettotal()
{

    if(price.value !='' ){



        let result=(+price.value  +  +taxes.value  +  +ads.value)
        - +discount.value;
        total.innerHTML=result;
        total.style.background= "green";
     

    } else{

        total.innerHTML=''
        total.style.background= "red";


    }


    

}

//لازم نحدد وين بنا نحفظ البيانات  وافضل شي هي الاري 
//  بس هون الابجيكت افضل  لانو منوعة عاد منحط الاوبجيكت جوات الاري عن طريق البش ومنحط 
//جوات الوكل ستوريج نعرف جوتها لبردكت لكي يعني





//great prodect
let datapro;
if(localStorage.product != null){

datapro = JSON.parse(localStorage.product)

}else{

datapro=[];

}


submit.onclick =function(){

let newpro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,


}

if(title.value !=''&& price.value !=''&& category.value !='' 
&& newpro.count < 100){
    if(mood ==='create'){


        if(newpro.count>1){
    
            for( let i=0; i < newpro.count ; i++) 
            datapro.push(newpro);
         }else{
         
             datapro.push(newpro);
         }
         
    }else{
    
     datapro[tmp] =  newpro;
    mood='create';
    submit.innerHTML='create';
    count. style.display='block';
    }

    cleardata();
}






localStorage.setItem('product', JSON.stringify(datapro))

showdata();
}
//clear inpouts

function cleardata(){

    title.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    total.innerHTML="";
    count.value="";
    category.value="";



}

//read


function showdata(){

     gettotal();
    let table='';
     for( i=1 ; i < datapro.length ; i++){

     table += `
     
      
     <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].count}</td>
        <td>${datapro[i].category}</td>
        <td> <button onclick = "updatedata (${i})"id="update">update</button></td>
        <td> <button onclick ="deletedata(${i})"id="delete">delete</button></td>

     <tr>
     
     `; 
     


     }

      document.getElementById('tbody').innerHTML = table;



      let btndelete=document.getElementById('deleteall');
if(datapro.length>0){

    btndelete.innerHTML=`<td> <button onclick="deleteall()">DELETE ALL (${datapro.length})</button></td>`





}else {

    btndelete.innerHTML=" ";


}


}
showdata()

//delet

function deletedata(i){



datapro.splice(i,1);
localStorage.product= JSON.stringify(datapro);
showdata();


}


//delete all
function deleteall(){

localStorage.clear()
datapro.splice(0)
showdata()

}

//abtate

function updatedata(i){

title.value= datapro[i].title;
price.value= datapro[i].price;
taxes.value= datapro[i].taxes;
ads.value= datapro[i].ads;
title.discount= datapro[i].discount;
category.value= datapro[i].category;
gettotal()
mood='update'
submit.innerHTML = 'update'
count.style.display="none"

tmp=i;
scroll({

top:0,
behavior:"smooth"

})
}




//search

let searchmood='title';
function getsearchmood(id)
{
    let search = document.getElementById('search');
    if(id =='searchtitle'){
    searchmood='title';
    search.placeholder ='search by title';
    }else{
    searchmood='category';
    search.placeholder ='search by cetegory';
}
  
   search.focus()
   
 showdata()
}






function searchdata(value)



{


    let table='';
    if(searchmood =='title')
    {
 
      for(let i = 0; i < datapro.length ; i++){
 
         if(datapro[i].title.includes(value)){

            table += `
     
            <tr>
               <td>${i}</td>
               <td>${datapro[i].title}</td>
               <td>${datapro[i].price}</td>
               <td>${datapro[i].taxes}</td>
               <td>${datapro[i].ads}</td>
               <td>${datapro[i].discount}</td>
               <td>${datapro[i].count}</td>
               <td>${datapro[i].category}</td>
               <td> <button onclick = "updatedata (${i})"id="update">update</button></td>
               <td> <button onclick ="deletedata(${i})"id="delete">delete</button></td>
       
            <tr>
            
            `; 
            
         }
 
     }

    }
    
    else{
        for(let i = 0; i < datapro.length ; i++){
 
            if(datapro[i].category.includes(value)){
             
                table += `
                <tr>
                   <td>${i}</td>
                   <td>${datapro[i].title}</td>
                   <td>${datapro[i].price}</td>
                   <td>${datapro[i].taxes}</td>
                   <td>${datapro[i].ads}</td>
                   <td>${datapro[i].discount}</td>
                   <td>${datapro[i].count}</td>
                   <td>${datapro[i].category}</td>
                   <td> <button onclick = "updatedata (${i})"id="update">update</button></td>
                   <td> <button onclick ="deletedata(${i})"id="delete">delete</button></td>
           
                <tr>
                
                `; 
                
   
            }
    
        }


    }


document.getElementById('tbody').innerHTML = table;

}

//clean data 
