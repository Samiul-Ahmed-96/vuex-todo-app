import Axios from "axios";

const state = {
    todos:[]
};
const getters = {
    allTodos : (state) =>{
      return state.todos;
    }
};
const actions = {
async fetchTodos({commit}){
     const  response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
     commit('setTodos', response.data)
  }
};
const mutations = {
  setTodos : (state , todos) =>{
    state.todos = todos;
  }
};



export default{
  state,
  getters,
  actions,
  mutations
}