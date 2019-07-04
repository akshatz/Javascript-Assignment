profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
users = localStorage.getItem('userDetails');
var user1 = JSON.parse(users);
    
function logout(){
    sessionStorage.clear();
}
function edit(){
    document.getElementById("fname").disabled=false;
    document.getElementById("lname").disabled=false;
    document.getElementById("Address").disabled=false;
  }
function save(){
    for( index=0;index<user1.length;index++){
        if(user1[index].uname === sessionStorage.getItem('user')){
            user1[index].fname = fname;
            user1[index].lname = lname;
            user1[index].Address = Address;
            user1[index] = JSON.stringify(user1[index]);
        }
        localStorage.setItem('userDetails',(user1[index].fname,user1[index].lname, user1[index].fname));
    
}    
}
//view profile
function viewProfile(){
    for (var i=0; i< profile.length; i++){
        unameSession=uname;
        //document.getElementsByName("gender").value=profile[i].gender
        document.getElementById("fname").value=profile1[i].FirstName;
        document.getElementById("lname").value=profile1[i].LastName;
        document.getElementById("Address").value=profile1[i].Address;
        
        break;
    }
}
