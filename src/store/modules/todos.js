import Axios from "axios";

const state = {

    todos : []
};
const getters = {

    allTodos : (state) =>{
      return state.todos;
    }
};
const actions = {

  async fetchTodos ({commit}){
    const response = await Axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos',response.data)

  },
  async addTodo({commit},title){
    const responce  = await Axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,completed:false
    })
    commit('newTodo', responce.data)
  },
  async deleteTodo({commit},id){
    await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo' , id)
  },
  async filterTodos({commit},e){
    //get the limit

    const limit  = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    console.log(limit)

    const responce = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

    commit('setTodos',responce.data)

  },
  async updateTodo({commit},updatedTodo){
    const responce  = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`)
    commit('updateTodo',updatedTodo)
  }
};
const mutations = {

  setTodos : (state , todos) =>{
    state.todos = todos;
    console.log(state.todos)
  },
  newTodo : (state,todo) =>{
    state.todos.unshift(todo);
  },
  removeTodo : (state,id) =>{
    state.todos = state.todos.filter( todo => todo.id != id)
  },
  updateTodo : (state,upTodo) =>{
    const index = state.todos.findIndex(todo => todo.id === upTodo.id)
    if(index !==-1){
      state.todos.splice(index,1,upTodo);
    }
  }
};



export default{
  state,
  getters,
  actions,
  mutations
}