export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return {...state.friends, action}
      //{friends: state.friends.push(action.payload)}
    case "friends/remove":
      return state.friends.filter(action.payload)
    default: 
      return state;
  }
}
