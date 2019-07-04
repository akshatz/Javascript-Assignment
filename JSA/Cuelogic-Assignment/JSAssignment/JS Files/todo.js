var  index, user_name, user;
function newElement() {
  
  var description=document.getElementById("description").value;
  var reminder=document.getElementById("date").value;
  var duedate=document.getElementById("due-date").value;
  var categories=document.getElementById("categories").value;
  var todoObj = {
    "Description": description,
    "Reminder": reminder,
    "Due Date":duedate,
    "Categories":categories
  }
  //local storage
  user_name = sessionStorage.getItem("user"); 
  // console.log(sessionStorage.getItem('user'))//fetch data from session storage
      
      var Todo12 = JSON.parse(localStorage.getItem("userDetails"));
      for(var i = 0; i < Todo12.length; i++)
      {

        console.log(`IN for loop`);
        if(user_name == Todo12[i].Username)   // username found then break
        {
          Todo12[i].ToDO.push(todoObj);
          break;
        }
      }
          localStorage.setItem("userDetails",JSON.stringify(Todo12));
        }
    
  

 
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Pls relogin to complete the transaction.");
  window.location="login.html";
}
function profile(){
  sessionStorage=false;
  window.location.href='profile.html';
}
