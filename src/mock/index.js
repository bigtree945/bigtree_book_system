/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-30 13:33:22
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-31 20:37:20
 * @FilePath: \my-project\src\mock\mockServe.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs'
// /\/mock\/test(\?.*)?/
// 预约核酸检测页数据
Mock.mock(/\/mock\/book-monitor(\?.*)?/, 'get', (options) => {
    let query = options.url.split('?')[1]
    let paramsArr = query.split('&')
    let params = paramsArr.map((item, index) => {
        let res = item.split('=')
        return {
            [res[0]]: decodeURI(res[1])
        }
    })
    let obj = {}
    params.forEach(item => {
        Object.assign(obj, item)
    })
    return Mock.mock({
        code: 200,
        data: {
            total: 1000,
            currentPage: +obj.currentPage,
            ["BookMonitor|" + obj.pageSize]: [{
                name: "@cname",
                "cardId|+1": 5000909000,
                "userId": "@id",
                tel: "@string('number',11)",
                "department": "保健科",
                fee: "@natural(6,99)0.00",
                "state|1": obj.state || ["待就诊", "已就诊", "已取消"],
                date: obj.date || "@date",
                time: "@time",
                "bookTime": "@datetime"
            }],
        },
        msg: "请求成功"
    })
})

// 预约体检页数据
Mock.mock(/\/mock\/book-checkup(\?.*)?/, 'post', (options) => {
    let { pageSize, state ,date} = JSON.parse(options.body)
    return Mock.mock({
        code: 200,
        data: {
            total: 999,
            ["BookingCheckup|" + pageSize]: [{
                name: "@cname",
                "cardId|+1": 5000909001,
                "userId": "@id",
                tel: "@string('number',11)",
                "setMeal|1": ["男性体检基础A套餐","男性体检基础B套餐","女性体检基础A套餐","女性体检基础B套餐"],
                fee: "@natural(1,80)00.00",
                "state|1": state || ["待体检", "已体检", "已取消"],
                date: date || "@date",
                "bookTime": "@datetime"
            }],
        },
        msg: "请求成功"
    })
})

