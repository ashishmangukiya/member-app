export function storeUserDetails(data) {
    return (dispatch)=>{
        dispatch({
            data:data,
            type:'USER_DETAILS'
        })
    }
    
}