
    var email_input=document.getElementById('email');
var errorMessage=document.getElementById('errorMessage')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    email_input.addEventListener('change',()=>{
       
      if(email_input.value.match(mailformat))
         {
            //document.write("Valid email address!");
            email_input.style.border='1px solid #01cb44';
            email_input.style.background='#FFFFFF';
            errorMessage.style.display='none'
            return true;
         }
         else
         {

            //email_input.style.placeholder='example@email/com';
            email_input.style.border='1px solid #FF5466';
            email_input.style.border='1px solid #FF5466';
            email_input.style.boxShadow= '0px 0px 7px 3px rgba(0, 0, 0, 0.0001)'; 
            email_input.style.background='#FFFFFF';
            errorMessage.style.display='block'
            document.email-form.email.focus();
           
             return false;
         }
         
    })
    
