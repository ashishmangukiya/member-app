
import request from '../api/request'

const headers = {
    'Content-Type': 'application/json',
    
}

function signup(data) {
  return request({
    url:    '/v1/member',
    method: 'POST',
    data,
    headers
  });
}

function login(data) {
  return request({
    url:    '/v1/member/signin',
    method: 'POST',
    data,
    headers
  });
}


const AuthenticationService = {
  signup,
  login
}

export default AuthenticationService;