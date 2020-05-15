const signup=()=>{
    window.location.replace('../signup/signup.html');
}


const login = () =>{

  const personTab = JSON.parse(localStorage.getItem('key'));

  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  if(personTab.length !== 0){
      const email = personTab.find(m => m.email == emailInput);
      if(email){
        const index = personTab.indexOf(email);
         if(passwordInput === personTab[index].password){
           if( personTab[index].admin == true){
             window.location.replace('../adminpage/admin.html');
           }else{
            window.location.replace('../homepage/homepage.html');
           }
          
         }else{
          alert('check your password');
      }
     }else{
        alert("check your email ");
  }
  }
}

