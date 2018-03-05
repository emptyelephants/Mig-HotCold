
const initialState ={
  answers:[],
  currentGuess:null,
  correctAnswer:Math.floor(Math.random()*100),
  isInstructing:false
}

export const hotAndColdReducer = (state =initialState,action) =>{
  switch (action.type) {
    case 'ADD_GUESS':
      if(state.answers.includes(action.guess)){
        alert('You tried that number already');
        return{...state}
      }
      else{
        return{
          ...state,
          answers:[...state.answers,action.guess],
          currentGuess:action.guess
        }
      }
    case 'SHOW_INSTRUCTIONS':
      return{
        ...state,
        isInstructing:!state.isInstructing
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
