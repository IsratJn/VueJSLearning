new Vue({
     el:'#app',
     data:{
         todo:'',
        todos:[],
        isEditing:false,
        selectedIndex:null
     },

     methods:{
         storeTodo(){
             this.todos.push(this.todo);
             this.todo='';
         },
         editTodo(index,todo){
             this.todo=todo; 
             this.selectedIndex=index;
             this.isEditing=true;

         },
         updateTodo(){
             this.isEditing=false;
             this.todos.splice(this.selectedIndex,1,this.todo)
         },
         deleteTodo(index){
             this.todos.splice(index,1);
         }
     }
});