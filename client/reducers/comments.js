const postComments = (state = [], action) => {
  switch(action.type){
    case 'ADD_COMMENT':
    // return existing state with new comment
      return [...state, {
          user: action.author,
          text: action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log('Remove comment')
      return  [
        //from start to the one we want to delete
        ...state.slice(0, action.i),
        // after the one deleted, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined'){
    return {
      // take current state
      ...state, 
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}


export default comments;