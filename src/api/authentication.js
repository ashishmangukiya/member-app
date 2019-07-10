import AuthenticationService from '../requestApi/authentication';

export function signUpFunction(data,response,error) {
    return (dispatch)=>{
        AuthenticationService.signup(data).then((data)=>{
            if(data.status==200) {
                response(data.data)
                // dispatch({
                //     data:data,
                //     type:'USER_DETAILS'
                // })
            } else {

            }
           
        })  
    }
}

export function logInFunction(data,response,error) {
    return (dispatch)=>{
        AuthenticationService.login(data).then((data)=>{
            console.log(data)
            if(data.status==200) {
                response(data.data)
                dispatch({
                    data:{
                        firstname:'ashish',
                        lastname:'mangukiya',
                        phoneNumber:'8446680648',
                        email:'ashishmangukiya97@gmail.com'
                    },
                    type:'USER_DETAILS'
                })
            } else {
            }
        })  
    }
}