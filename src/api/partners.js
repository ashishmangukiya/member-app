import PartnersService from '../requestApi/partners';

export function getPartners(memberId) {
    return (dispatch)=>{
        PartnersService.partners(memberId).then((data)=>{
            console.log(data);
        })
    }
}

export function getPartnersHistory(memberId,partnerId) {
    return (dispatch)=>{
        PartnersService.partnerHistory(memberId,partnerId).then((data)=>{
            console.log(data);
        })
    }
}

export function getPartnersRewards(memberId,partnerId) {
    return (dispatch)=>{
        PartnersService.partnerReward(memberId,partnerId).then((data)=>{
            console.log(data);
        })
    }
}