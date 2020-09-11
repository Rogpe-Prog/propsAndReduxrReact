const initialState = {
    age: 0
}
function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                age: state.age + 1
            }
        case 'SUB':
            return {
                ...state,
                age: state.age - 1
            }
        default:
            return state
    }
}
export default reducer