var  user_name, user, duedate, reminder, categories;
var user_array = JSON.parse(localStorage.getItem("userDetails"));
user_name = sessionStorage.getItem("user"); //fetch data from session storage
//Add function
function newElement() {
    var description= document.getElementById("description").value;
    var reminder= document.getElementById("reminder").value;
    var Due_Date=document.getElementById("due_date").value;
    var categories=document.getElementById("categories").value;
    var todoid=new Date().getTime();
    var todoObj = {
      "TodoId":todoid,
      "Description": description,
      "Reminder": reminder,
      "Due_Date":Due_Date,
      "Categories":categories
  }
   window.location.reload();
  if(description==""||reminder==""||due_date==""||categories==""){
     return false;
  }
 //local storage
      for(var i = 0; i < user_array.length; i++)
      {
        if(user_name == user_array[i].Username)   // username found then break
        {
          user_array[i].ToDO.push(todoObj);
          break;
        }
      }
      localStorage.setItem("userDetails",JSON.stringify(user_array));}
//Display function
function display_element(inputArray){
  let a=document.getElementById("table_body");
  let deleteChild=a.lastElementChild;
  while(deleteChild)
  {
  a.removeChild(deleteChild);
  deleteChild=a.lastElementChild;
  } 

  for( var index = 0; index < inputArray.length; index++ ) {
      var input= document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("class", "selectedcheckbox"+index);
      var td1=document.createElement("tr");
      var row = "<tr><td><input type ='checkbox' class='checkbox' name='rows' id=checkbox-"+inputArray[index].TodoId+"></td><td>"+inputArray[index].Description+"</td><td>"+inputArray[index].Categories+"</td><td>"+inputArray[index].Due_Date+"</td><td>"+inputArray[index].Reminder+"</td><input type='button' value='Edit'id=edit-"+inputArray[index].TodoId+" onclick=edit("+inputArray[index].TodoId+"); />&nbsp;</td<td><input type='button' value='Save' onclick=save("+inputArray[index].TodoId+")></td></tr>";

      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
    }
}
//Delete Function
function onDelete(){
  var user_array = JSON.parse(localStorage.getItem("userDetails"));
  var session = sessionStorage.user;

  for(var index = 0; index < user_array.length; index++)
  {
    if(session == user_array[index].Username)   // username found then break
    {
      var userid =index;
      break;
    }
  }
  var checkedarray=[];
  user_array= JSON.parse(localStorage.getItem("userDetails"));
  var deletearray = document.getElementsByName("rows");
  for(var j = 0;j < deletearray.length;j++)
  {
    todostring = deletearray[j].id;
    todoid = todostring.split("-");
    if(document.getElementById("checkbox-"+todoid[1]).checked == true)
    {
      checkedarray.push(todoid[1]);
    }
  }
  for(var i =checkedarray.length-1;i>=0 ;i--)
  {
    for(var j = 0;j < user_array[userid].ToDO.length;j++)
    {
    if(user_array[userid].ToDO[j].TodoId == checkedarray[i]){
        user_array[userid].ToDO.splice(j, 1);
    }
  }
}

      localStorage.setItem("userDetails",JSON.stringify(user_array));
      window.location.reload();
    }

//logout function
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Please relogin to complete the transaction.");
  window.location="login.html";
}
//Redirects to Profile page
function viewprofile(){
  window.location.href='profile.html';
}
