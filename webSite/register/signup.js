const addPerson=()=>{
const person ={
    lastName : document.getElementById('lastName').value,
    firstName : document.getElementById('firstName').value,
    birthday : document.getElementById('date').value,
    email : document.getElementById('email').value,
    password : document.getElementById('password').value,
    admin : false,
}

  
  if(!localStorage.getItem('key')){
 var tab = []
 tab.push(person)
 localStorage.setItem('key',JSON.stringify(tab)) ;
}
  else{
  tab = JSON.parse(localStorage.getItem('key'));
 tab.push(person);
 localStorage.setItem('key',JSON.stringify(tab)) ;
}}