const initialState={
    userDetails:{
    }
}

const userDetails= (state=initialState,action)=>{
    switch(action.type) {
        case 'USER_DETAILS': 
            return {
                ...state,
                userDetails: action.data,
                };
        default:
        return state
    }
}

export default userDetails;