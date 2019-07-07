profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
todo_array = user_array;

function edit(){
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("Address").disabled = false;
    document.getElementById("male").disabled = false;
    document.getElementById("female").disabled = false;
    document.getElementById("profile_picture").disabled = false;
    document.getElementsByName("gender").disabled = false;
}
function save(){
        for(index = 0; index < todo_array.length; index++)
            if(sessionStorage.user == todo_array[index].Username){
                break;
            }
            todo_array[index].FirstName = document.getElementById("fname").value;
            todo_array[index].LastName = document.getElementById("lname").value;
            todo_array[index].Address = document.getElementById("Address").value;
            todo_array[index].Gender = document.getElementsByName("gender").value;
            todo_array[index].image = document.getElementById("profile_picture").value;
            user_array = JSON.stringify(user_array);
            localStorage.setItem('userDetails',user_array);
            
            window.location.reload();
      
    }

//view profile
function viewProfile(){
    for (var i=0; i< profile.length; i++){
        unameSession=uname;
        document.getElementsByName("gender").value=profile[i].gender;
        document.getElementById("fname").value=profile1[i].FirstName;
        document.getElementById("lname").value=profile1[i].LastName;
        document.getElementById("Address").value=profile1[i].Address;
        // document.getElementById("gender").value=profile1[i].Gender;
        document.getElementById("profile_picture").value=profile1[i].image;
        break;
    }
}
