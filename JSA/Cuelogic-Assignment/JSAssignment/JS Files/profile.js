function logout(){
    sessionStorage.clear();
}
localStorage.getItem("userDetails");
function edit(){
    document.getElementById("fname").readOnly=false;
    document.getElementById("lname").readOnly=false;
    document.getElementById("address").readOnly=false;
}
function viewProfile(){
    var viewProfile= JSON.parse(localStorage.getItem("userDetails"));
    var unameSession= sessionStorage.getItem(uname);
    for (var i=0; i< userDetails.length; i++){
        unameSession=i;
        break;
    }
    document.getElementById("fname").value=viewProfile[unameSession].fname;
    document.getElementById("fname").value=viewProfile[unameSession].lname;
    document.getElementById("fname").value=viewProfile[unameSession].address;
}