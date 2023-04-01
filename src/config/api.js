/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 10:29:58
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 16:33:00
 * @FilePath: \my-project\src\config\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {get,post} from "@/config/http"
import {get as mockGet , post as mockPost} from "@/config/mock"
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
// 预约核酸检测页
export const getBookMonitor = (params={})=>mockGet("/book-monitor",params)
// 预约体检页
export const getBookingCheckup = (params={})=>mockPost("/book-checkup",params)
//医生管理页
export const getDoctor = (params={})=>mockPost("/doctor-management",params)
export const search = (params={})=>mockPost("/search",params)


