var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
var input = document.createElement("input");
var status ="Pending"; 
for(var index = 0; index < user_array.length; index++)
{
  var todoList= user_array[index].ToDO;
  if(session == user_array[index].Username)   // username found then break
  {
    userid = index;
    break;
  }
}

var todo_array = user_array[userid].ToDO;
input.setAttribute("type", "checkbox");
input.setAttribute("class", "selectedcheckbox");
var check = document.getElementsByClassName("selectedcheckbox");

//Edit ToDo
function edit(IdofElement){
// alert(IdofElement);
  var todoid = 0;
  for(var index = 0; index < todo_array.length; index++){
    if(todo_array.TodoId == IdofElement){
      var todoid = index;
      // alert(todoid);
      }
      document.getElementById("description").value = todo_array[todoid].Description;
      document.getElementById("categories").value = todo_array[todoid].Categories;
      document.getElementById("due_date").value = todo_array[todoid].due_date;
      document.getElementById("reminder").value = todo_array[todoid].Reminder;
    }
}
//Save ToDO
function save(IdofElement){
  for(var index = 0; index < todo_array.length; index++){
    if(todo_array[index].TodoId === IdofElement){
         todoid = index;
      }
    var Description2= document.getElementById("description").value;
    var Categories = document.getElementById("categories").value;
    var due_date2 = document.getElementById("due_date").value;
    var Reminder2 = document.getElementById("reminder").value;

    user_array[userid].ToDO[todoid].Description = Description2;
    user_array[userid].ToDO[todoid].Categories = Categories;
    user_array[userid].ToDO[todoid].due_date = due_date2;
    user_array[userid].ToDO[todoid].Reminder = Reminder2;
    user_array = JSON.stringify(user_array);
    localStorage.setItem('userDetails',user_array);
    

}window.location.reload();
}


//Filter By Category
function filter(){
  if(document.getElementById("filterbycategories").value === "Category"){
    display_element(todo_array);
  }
  else if(document.getElementById("filterbycategories").value === "Office"){  
        var filteredarraybycategory=todo_array.filter(function(searchoffice){
          return (searchoffice.Categories==="Office");
    })
    display_element(filteredarraybycategory);
  }
  else if(document.getElementById("filterbycategories").value === "Personal")
  {    
    var filteredarraybycategory=todo_array.filter(function(searchoffice){
      return (searchoffice.Categories==="Personal");
})
display_element(filteredarraybycategory);
}
}
//Filter by Date
function filterbyDate(){
  var startDate =document.getElementById("sdate").value;
  var endDate = document.getElementById("edate").value;
  var newsDate=new Date(startDate);
  var dDate =new Date(endDate);
    var filterByDate = todo_array.filter(function(searchtime){
      return ((new Date(searchtime.Due_Date).getTime() >= newsDate.getTime()) && (new Date(searchtime.Due_Date).getTime() <= dDate.getTime()));
    })
    var a = document.getElementById("table_body");
    var del = a.lastElementChild;
    while(del){
      a.removeChild(del);
      del = a.lastElementChild;
    }
    display_element(filterbyDate);
  }



function replaceIsDone(){
  var input = document.createElement("input")
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "checkbox");
  var filterbyStatus=todo_array.filter(function(searchBystatus){
    if(checkbox.checked === true ){
      return (searchBystatus.status.replace("Pending", "done"));
    }
    
  })
 display_element(filterbyStatus);
 window.location.reload();
}

// function isPublic(){
//   var filteredbypublic = todo_array.filter(function(searchByPublic){
//     return (searchByPublic.isPublic);)
//   }  
// }