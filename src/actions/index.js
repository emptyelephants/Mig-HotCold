export const addGuess = (guess) => ({
  type:'ADD_GUESS',
  guess
})

export const restartGame = () => ({
  type:'RESTART_GAME'
})

export const showInstructions = () =>({
  type:'SHOW_INSTRUCTIONS'
})
