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
  }
};
const mutations = {

  setTodos : (state , todos) =>{
    state.todos = todos;
    console.log(state.todos)
  },
  newTodo : (state,todo) =>{
    state.todos.unshift(todo);
  }
};



export default{
  state,
  getters,
  actions,
  mutations
}