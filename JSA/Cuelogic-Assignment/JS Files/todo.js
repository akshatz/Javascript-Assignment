var  user_name, user, duedate, reminder, categories, isPublic;
var user_array = JSON.parse(localStorage.getItem("userDetails"));
user_name = sessionStorage.getItem("user"); //fetch data from session storage
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
//Add function
function newElement() {
    var description= document.getElementById("description").value;
    var reminder= document.getElementById("reminder").value;
    var Due_Date=document.getElementById("due_date").value;
    var categories=document.getElementById("categories").value;
    var todoid=new Date().getTime();
    var isPublic =  document.querySelector('input[name="chooseone"]:checked').value;
    var pending = document.getElementById("pending").value;
    var todoObj = {
      "TodoId" : todoid,
      "Description" : description,
      "Reminder" : reminder,
      "Due_Date" : Due_Date,
      "Categories" :categories,      
      "isPublic" : isPublic,
      "isDone": pending
  }
  window.location.reload();
  if(description==""||reminder==""||due_date==""||categories==""||isPublic==""){
     return false;
  }
  
  for(var i = 0; i < user_array.length; i++)
  {
    if(user_name == user_array[i].Username)   // username found then break
    {
      user_array[i].ToDO.push(todoObj);
      break;
    }
  }
  localStorage.setItem("userDetails",JSON.stringify(user_array));
}
  function getRadioVal(todo,name) {
    if(document.getElementsByClassName("radio").values === "Public"){
      isPublic = "Public";
      }
    else if(document.getElementsByName("radio").values === "Private"){
        isPublic = "Private";
      }
    return  isPublic;
}
 //local storage
//  for (var i = 0, length = radios.length; i < length; i++){
//   if (radio[i].checked){
//    alert(radio[i].value);
//    break;
//   }
//  }

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
      var row = "<tr><td><input type ='checkbox' class='check' name='rows' id=checkbox-"+inputArray[index].TodoId+"></td><td>"+inputArray[index].Description+"</td><td>"+inputArray[index].Categories+"</td><td>"+inputArray[index].Due_Date+"</td><td>"+inputArray[index].Reminder+"</td><td>"+inputArray[index].isPublic  +"</td><td>"+inputArray[index].isDone+"</td><td><input type='button'  value='Done' id= done-"+inputArray[index].TodoId+" onclick = done("+inputArray[index].TodoId+")></td><td><input type = 'button' value = 'Edit' id = edit-"+inputArray[index].TodoId+" onclick=edit("+inputArray[index].TodoId+") /></td> <td><input type='button' value='Save'  id = save-"+inputArray[index].TodoId+" onclick=save("+inputArray[index].TodoId+")></td></tr>";
      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
    }
}
//Delete Function
function onDelete(){
  var checkedarray=[];
  user_array= JSON.parse(localStorage.getItem("userDetails"));
  var deletearray = document.getElementsByName("rows");
  for(var j = 0;j < deletearray.length;j++){
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
