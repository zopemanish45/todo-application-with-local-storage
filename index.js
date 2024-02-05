var todoArray=[];

function saveTodo(){
    const tittle =document.getElementById("tittle").value;
    todoArray.push(tittle);
    localStorage.setItem("todos", todoArray.toString());
    document.getElementById("tittle").value="";
    showTodos();
}

function showTodos(){
    const str =localStorage.getItem("todos");
    todoArray =str.split(",");
    var htmlstring = `
    <tr>
      <th>sr no.</th>
      <th>Tittle</th>
      <th>actions</th>
    <tr>
    `;

    var counter = 0;
    todoArray.forEach(ele=>{
        counter++;
        htmlstring+=`
        <tr>
          <td>${counter}</td>
          <td>${ele}</td>
       <td>
          <button class="btn btn-outline-warning" onclick="editTodo(${counter-1})">Edit</button>
          <button class="btn btn-outline-danger" onclick="deleteTodo(${counter-1})">Delete</button> 
        <td>
        <tr>  
        `

    });
    document.getElementById("todo-table").innerHTML=htmlstring;  

}
function editTodo(index){
   var nawValue = prompt("Do you want to edit?",todoArray[index]);
   if(nawValue !=""){
     
    todoArray[index]=nawValue;
    localStorage.setItem("todos", todoArray.toString());
    showTodos();

  }

}

function deleteTodo(index){
    if(confirm("Do you  really want to delete?")){
        todoArray.splice(index,1);
        localStorage.setItem("todos", todoArray.toString());
       showTodos();
    }
}

function removeAlltodos(){
    localStorage.removeItem("todos");
    todoArray = [];
    document.getElementById("todo-table").innerHTml=""; 
}