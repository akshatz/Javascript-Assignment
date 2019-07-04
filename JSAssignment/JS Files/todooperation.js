var todoList;
function edit(){
    user_name = sessionStorage.getItem("user"); //fetch data from session storage
    for(var i = 0; i < ToDo_array.length; i++)
    {
      if(user_name == ToDo_array[i].Username)   // username found then break
      {
        userIndex=i;    
        todoList = ToDo_array[i].ToDO;
            break;
      }
    }
    var count = 0;
    for(var index=0; index<=ToDo_array.length;index++){
        document.getElementById("description")[index].value =
        ToDO_array[index].todoList[count].description
        document.getElementById("date")[index].value =
        ToDO_array[index].todoList[count].Reminder
        document.getElementById("categories")[index].value =
        ToDO_array[index].todoList[count].categories;
        document.getElementById("duedate")[index].value =
        ToDO_array[index].todoList[count].categories;
    }
    
}