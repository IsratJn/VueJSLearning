<template>
  <div class="container" style="max-width: 600px">
    
    <h2 class="text-center mt-5">To do list</h2>

    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />

      <button class="btn btn-warning rounded-0" @click="submitTask">
        ADD
      </button>

    </div>

   
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
      
          <th scope="col" class="text-center">DELETE</th>
          <th scope="col" class="text-center">EDIT</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span>
              {{ task.name }}
            </span>
          </td>
          
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>

          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editedTask: null,
      tasks: [],
    };
  },

  methods: {
    
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

  
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

  
    submitTask() {
      if (this.task.length === 0) return;

    
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }

      this.task = "";
    },
  },
};
</script>

