import { handleActions } from 'redux-actions'
import { 
  GET_USERINFO, 
  EDIT_USERINFO, 
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_MYORDERS,
  GET_ORDERDETAIL
} from '../types/user'

export default handleActions({

  // 获取用户信息
  [GET_USERINFO] (state, action) {
    state.wxInfo = action.payload
    
    return {...state}
  },

  // 修改用户信息
  [EDIT_USERINFO] (state, action) {
    state.wxInfo[action.payload.key] = action.payload.value

    return {...state}
  },  

  // 新增收货地址
  [ADD_ADDRESS] (state, action) {
    state.addressArr.push(action.payload)

    return {...state}
  },

  // 删除收货地址
  [DELETE_ADDRESS] (state, action) {
    const index = state.addressArr.findIndex( p => p.id === action.payload )
    state.addressArr.splice(index, 1)
    
    return {...state}
  },

  // 获取我的订单列表
  [GET_MYORDERS] (state, action) {
    state.myOrders = action.payload
    
    return {...state}
  },

  // 获取订单详细
  [GET_ORDERDETAIL] (state, action) {
    state.orderDetail = action.payload
    
    return {...state}
  }

}, {
  wxInfo: null,
  addressArr: [],
  myOrders: [],
  orderDetail: null
})