var  user_name, user, duedate, reminder, categories;
var ToDo_array = JSON.parse(localStorage.getItem("userDetails"));
//Add function
function newElement() {
    var description1= document.getElementById("description").value;
      var eminder= document.getElementById("date").value;
      var duedate=document.getElementById("duedate").value;
      var categories=document.getElementById("categories").value;
    var todoObj = {
      "Description": description1,
      "Reminder": reminder,
      "DueDate":duedate,
      "Categories":categories
  }
 //local storage
 user_name = sessionStorage.getItem("user"); //fetch data from session storage
      for(var i = 0; i < ToDo_array.length; i++)
      {
        if(user_name == ToDo_array[i].Username)   // username found then break
        {
          ToDo_array[i].ToDO.push(todoObj);
          break;
        }
      }
      localStorage.setItem("userDetails",JSON.stringify(ToDo_array));
  }
//Display function  
function display_element()
{

    //var is_public = document.getElementById("is_public").value;
    var todoList = [];
    user_name = sessionStorage.getItem("user"); //fetch data from session storage
    for(var i = 0; i < ToDo_array.length; i++)
    {
      if(user_name == ToDo_array[i].Username)   // username found then break
      {
        todoList = ToDo_array[i].ToDO;
        break;
      }
    }

    for( var i=0 ;i<todoList.length;i++ ) {
      var input= document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("class", "selectedcheckbox"+i);
      var td1=document.createElement("tr");
      var row = "<tr><td><input type ='checkbox' class='checkbox'/></td><td>"+todoList[i].Description+"</td><td>"+todoList[i].Categories+"</td><td>"+todoList[i].DueDate+"</td><td>"+todoList[i].Reminder+"</td><input type='button' type='button' value='Edit' onclick='edit()'/></tr>";
      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
}
}
//Delete Function
function onDelete(){

  userArrayItems= JSON.parse(localStorage.getItem("userDetails"));
  ToDo_array= JSON.parse(localStorage.getItem("userDetails"));
  var checker =0;
  var todoList;
  var check = document.getElementsByClassName("checkbox");
  var table = document.getElementById("table_body");
  var userIndex = null;
  for(var i = 0; i < ToDo_array.length; i++)
  {
    if(user_name == ToDo_array[i].Username)   // username found then break
    {
      userIndex = i;
      todoList = ToDo_array[i].ToDO;
      // break;
    }
  }
  //userDetails = userDetails[index].ToDO;
        
  // // console.log(todoList.length)
  for(var index=(todoList.length-1); index >= 0; index--){ 
    if(check[index].checked == true){ 
      checker+=1;
      table.deleteRow(index);
      todoList.splice(index, 1);
      
      ToDo_array[userIndex].ToDO= todoList;

      var updatedUserDetails = JSON.stringify(ToDo_array);
      // localStorage.removeItem("userDetails",userDetails_removed_Todo_Array);  
      localStorage.setItem("userDetails", updatedUserDetails );
      location.reload();
      }
  }
}
//logout function 
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Please relogin to complete the transaction.");
  window.location="login.html";
}
function viewprofile(){
  window.location.href='profile.html';
}

// function filter(){

// }