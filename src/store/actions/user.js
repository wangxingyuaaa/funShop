import { createAction } from 'redux-actions'
import wepy from 'wepy'
import 'wepy-async-function'

import { GET_USERINFO, EDIT_USERINFO, ADD_ADDRESS } from '../types/user'

// // 例子
// export const getUserInfo = createAction(GET_USERINFO, () => {
//   console.log('我执行了', GET_USERINFO)
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(1)
//     }, 1000)
//   })
// })

// 获取用户信息
export const getUserInfo = createAction(GET_USERINFO, async function () {
  const { userInfo } = await wepy.getUserInfo()
  return userInfo
})

// 修改用户信息
export const editUserInfo = createAction(EDIT_USERINFO, (params) => {
  return params
})

// 新增收货地址
export const addAddress = createAction(ADD_ADDRESS, (params) => {
  return params
})