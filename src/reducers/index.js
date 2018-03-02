
const initialState ={
  answers:[],
  curretGuess:null,
  correctAnswer:Math.floor(Math.random()*100)
}

export const hotAndColdReducer = (state =initialState,action) =>{
  switch (action.type) {
    case 'ADD_GUESS':
      return{
        ...state,
        answers:[...state.answers,action.guess],
        curretGuess:action.guess
      }
    case 'RESTART_GAME':
      return{
        answers:[],
        currentGuess:null,
        correctAnswer:Math.floor(Math.random()*100)
      }
    default:
      return state;

  }
};
