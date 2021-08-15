function apply(item){
    item.style.color='red';
    item.style.display='block';
    item.style.textAlign='left';
}
function validation(){
    let user=document.getElementById('user-input').value;
    let pass=document.getElementById('user-password').value;
    let con_pass=document.getElementById('confirm-user-password').value;
    let mobile=document.getElementById('mobile').value;
    let email=document.getElementById('email').value;
    if (user==""){
        document.getElementById('username-span').innerHTML="***Please fill the username field...";
        let change1=document.getElementById('username-span');
        apply(change1);
        return false;
    }
    if ((user.length<=2) || (user.length>20)){
        document.getElementById('username-span').innerHTML="***user name length must be between 2 to 20..."
        let change2=document.getElementById('username-span');
        apply(change2);
        return false;
    }
    if (isNaN(user)==false){
        document.getElementById('username-span').innerHTML="***only characters are allowed...";
        let change3=document.getElementById('username-span');
        apply(change3);
        return false;
    }
    document.getElementById('username-span').innerHTML="";
    if (pass==""){
        document.getElementById('password-span').innerHTML="***Please fill the password field...";
        let change4=document.getElementById('password-span');
        apply(change4);
        return false;
    }
    if (pass.length<5 || pass.length>20){
        document.getElementById('password-span').innerHTML="***password length must be between 5 20...";
        let change5=document.getElementById('password-span');
        apply(change5);
        return false;
    }
    if (pass!=con_pass){
        document.getElementById('password-span').innerHTML="***password and confirm passwords are not matching...";
        let change6=document.getElementById('password-span');
        apply(change6);
        return false;
    }
    if (con_pass==""){
        document.getElementById('confirm-password-span').innerHTML="***Please fill the username field...";
        let change7=document.getElementById('username-span');
        apply(change7);
        return false;
    }
    document.getElementById('password-span').innerHTML="";
    document.getElementById('confirm-password-span').innerHTML="";
    if (mobile==""){
        document.getElementById('mobile-span').innerHTML="***Please fill the mobile number field...";
        let change8=document.getElementById('mobile-span');
        apply(change8);
        return false;
    }
    if (isNaN(mobile)){
        document.getElementById('mobile-span').innerHTML="***only numbers are allowed...";
        let change9=document.getElementById('mobile-span');
        apply(change9);
        return false;
    }
    if (mobile.length!=10){
        document.getElementById('mobile-span').innerHTML="***mobile must be 10 digits...";
        let change10=document.getElementById('mobile-span');
        apply(change10);
        return false;
    }
    document.getElementById('mobile-span').innerHTML="";
    if (email==""){
        document.getElementById('email-span').innerHTML="***Please fill the email field...";
        let change11=document.getElementById('email-span');
        apply(change11);
        return false;
    }
    if (email.indexOf('@')==0){
        document.getElementById('email-span').innerHTML="***Invalid Position for @..."
        let change12=document.getElementById('email-span');
        apply(change12);
        return false;
    }
    if (email.charAt(email.length-4)!='.' || email.charAt(email.length-3)!='.'){
        document.getElementById('email-span').innerHTML="***Invalid Position for .";
        let change13=document.getElementById('email-span');
        apply(change13);
        return false;
    }
    document.getElementById('email-span').innerHTML="";
    return true;
}