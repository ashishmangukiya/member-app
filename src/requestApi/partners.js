
import request from '../api/request'

const headers = {
    'Content-Type': 'application/json',
    
}

function partners(memberId) {
  return request({
    url:    `/v1/member/${memberId}`,
    method: 'POST',
    headers
  });
}

function partnerHistory(memberId,partnerId) {
  return request({
    url:    `/v1/member/${memberId}/partner/${partnerId}`,
    method: 'POST',
    headers
  });
}

function partnerReward(memberId,partnerId) {
  return request({
    url:    `/v1/member/${memberId}/partner/${partnerId}/rewards`,
    method: 'POST',
    headers
  });
}

const PartnersService = {
  partners,
  partnerHistory,
  partnerReward
}

export default PartnersService;