import axios from "axios"
import { REQUEST_SUCCESS,REQUEST_FAIL,NETWORK_REQUEST} from "./layoutactiontype"

export const requestSuccess=(payload)=>{
    return {
        type:REQUEST_SUCCESS,
        payload
    }
}

export const networkRequest = ()=>{
    return{
        type:NETWORK_REQUEST
    }
}
export const requestFail = ()=>{
    return {
        type:REQUEST_FAIL
    }
}

export const getData = (params)=>(dispatch)=>{
    let id = 0
    dispatch(networkRequest())
 return  axios.get(`https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data/${id}.json`).then((res)=>{
       console.log(res.data)
        dispatch(requestSuccess(res.data));
   }).catch((err)=>{
       console.log(err);
       dispatch(requestFail());
   })
}