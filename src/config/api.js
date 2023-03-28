/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 10:29:58
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-28 13:09:49
 * @FilePath: \my-project\src\config\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {get,post} from "@/config/http"
// 登录
export const login = (data={})=>post("/login",data)
// 用户信息
export const getUserInfo = (data={})=>post("/user-info",data)
// 首页
export const getIndexData = (data={})=>post("/index",data)
// 预约挂号页
export const getBookingRegisterData = (data={})=>post("/booking-register",data)
export const getPreOrNextData = (data={})=>post("/change-page",data) // 分页器模拟切换页面接口
// 详情页
export const getPatientDetail = (data={})=>post("/patient-info",data)
export const getBookDetail = (data={})=>post("/book-info",data)

// export const getBookingMonitor = (data={})=>post("/booking-monitor",data)

// export const test = (data={})=>post("/test",data)
