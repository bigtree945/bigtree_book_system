<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 16:45:09
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-28 09:52:35
 * @FilePath: \my-project\src\views\BookingManagement\BookingRegister\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card class="box-card">
            <div class="clearfix">
                <div v-if="tableTitle.radio" class="radio" @change="radioSearch">
                    <el-radio v-model="radio" :label="index" v-for="item, index in tableTitle.radio" :key="index">{{ item
                    }}</el-radio>
                </div>
                <el-date-picker v-if="tableTitle.search.showData" v-model="date" type="daterange" range-separator="~"
                    start-placeholder="请选择日期" end-placeholder="请选择日期" style="width:300px" size="medium"
                    @change="dateChange">
                    <i class="el-icon-s-order"></i>
                </el-date-picker>
                <el-cascader v-if="tableTitle.search.showDepartment" v-model="department" :options="options"
                    @change="departmentChange" placeholder="请选择科室" size="medium"></el-cascader>
                <el-input v-model="name" placeholder="请输入医生/病人姓名" size="medium"></el-input>
                <el-button type="primary" size="medium" @click="search">搜索</el-button>
            </div>
            <el-table ref="multipleTable" :data="tableData.BookingRegister" tooltip-effect="dark" size="medium"
                :header-cell-style="{ 'text-align': 'center', 'font-size': '12px', 'font-weight': 'normal', }"
                :cell-style="{ 'text-align': 'center' }" @selection-change="handleSelectionChange" :fit="false">
                <el-table-column type="selection" width="50">
                </el-table-column>
                <el-table-column prop="name" label="患者姓名" width="65">
                </el-table-column>
                <el-table-column prop="card-id" label="就诊卡号" width="105">
                </el-table-column>
                <el-table-column prop="user-id" label="身份证号" width="170">
                </el-table-column>
                <el-table-column prop="tel" label="手机号码" width="115">
                </el-table-column>
                <el-table-column prop="department" label="挂号科室" width="100">
                </el-table-column>
                <el-table-column prop="type" label="挂号类型" width="70">
                </el-table-column>
                <el-table-column prop="fee" label="挂号费" width="70">
                </el-table-column>
                <el-table-column label="挂号状态" width="70">
                    <template slot-scope="{row}">
                        <span style="color:#2ed477">{{ row.state }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="就诊日期" width="110">
                </el-table-column>
                <el-table-column prop="time" label="候诊时间" width="">
                </el-table-column>
                <el-table-column prop="booking-time" label="预约时间" width="160">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="{row}">
                        <img src="./images/u5660.svg" @click="goDetail(row)">
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="10"
                layout="->,total,  prev, pager, next,sizes, jumper,slot" :total="tableData.totalCount" prev-text="上一页"
                next-text="下一页">
                <el-button>确定</el-button>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>


export default {
    name: 'BookingRegister',

    data() {
        return {
            title: {
                text: "预约挂号",
                showButtons: true,
            },
            tableTitle: {
                radio: ["全部", "待就诊", "已就诊", "已取消"],
                search: {
                    showData: true,
                    showDepartment: true
                }
            },
            tableData: {},
            // 标题
            radio: "1",
            date: [],
            department: [],
            options: [{
                value: "inner",
                label: "内科",
                children: [{
                    value: "digest",
                    label: "消化内科",
                }, {
                    value: "blood",
                    label: "血液内科",
                }, {
                    value: "rheumatism",
                    label: "风湿免疫内科",
                }, {
                    value: "kidney",
                    label: "肾内科",
                },]
            }, {
                value: "outer",
                label: "外科",
                children: [{
                    value: "digest",
                    label: "消化外科",
                }, {
                    value: "blood",
                    label: "血液外科",
                }, {
                    value: "rheumatism",
                    label: "风湿免疫外科",
                }, {
                    value: "kidney",
                    label: "肾外科",
                },]
            }],
            name: '',
            // 分页器
            pageSize: 10,
            currentPage: 1
        };
    },

    mounted() {
        this.getData()
    },

    methods: {
        async getData(pageSize) {
            let res = await this.$api.getBookingRegisterData({
                pageSize: pageSize || this.pageSize,
                currentSize: this.currentPage
            })
            if (res.code == 200) this.tableData = res.data
            // console.log(res.data);
        },
        radioSearch() {
            // 实际开发发送请求带上参数去获取相应的数据
            // this.$api.getRadioSearch()
            this.$message({
                message: '抱歉，没有模拟对应接口',
                type: 'warning'
            })
        },
        // 日期改变
        dateChange(res) {
            this.date = res
            console.log(res);
        },
        // 科室级联菜单
        departmentChange(res) {
            this.department = res
            console.log(res);
        },
        // 搜索框改变
        getName(res) {
            this.name = res
            console.log(res);
        },
        // 搜索
        search() {
            // 实际开发发送请求带上参数去获取相应的数据
            // this.$api.getSearchRes()
            this.$message({
                message: '抱歉，没有模拟对应接口',
                type: 'warning'
            })
        },
        // 复选框
        handleSelectionChange(res) {
            console.log(res);
        },
        // 分页器
        handleSizeChange(pageSize) {
            this.getData(pageSize)
        },
        handleCurrentChange(currentPage) {
            this.$message({
                message: '使用了随机数据模拟切换页面',
                type: 'warning'
            })
            this.currentPage = currentPage
            this.getChangeData({
                pageSize: this.pageSize,
                currentPage: this.currentPage
            })
        },
        async getChangeData() {
            let res = await this.$api.getPreOrNextData({
                pageSize: this.pageSize,
                currentSize: this.currentPage
            })
            if (res.code == 200) this.tableData = res.data
        },
        // 路由跳转
        goDetail(row) {
            this.$router.push({
                name: "detail",
                params:{
                    id:row['card-id'],
                    title: this.title.text
                }
            })
        }
    },
};
</script>

<style lang="less" scoped>
.el-table {
    margin: 40px 0;
}

/deep/.el-table__cell {
    padding: 15px 0 !important;
}

.box-card {
    width: 100%;
    margin: 20px 0;
    border-radius: 8px;

    .clearfix {
        display: flex;
        align-items: center;

        .radio {
            margin: 0 15px;

            .el-radio {
                margin-right: 20px;
            }
        }

        .el-cascader {
            width: 160px;
            margin-left: 5px;
        }

        .el-input {
            width: 320px;
            margin: 0 10px;
        }

        .el-button {
            background-color: #006eff;
        }
    }

    /deep/ .el-pager li {
        margin: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-left: none;
        border-radius: 0;

    }

    /deep/ .btn-prev {
        margin: 0;
        border: 1px solid #ccc;
        background-color: #fff;
        padding: 0 10px;
        border-radius: 0;
    }

    /deep/ .btn-next {
        margin: 0;
        border: 1px solid #ccc;
        background-color: #fff;
        padding: 0 10px;
        border-radius: 0;
    }

    .el-pagination {
        .el-button {
            margin-left: 10px;
            color: #006eff;
            border: 1px solid #c5eefb;
        }
    }
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
    font-size: 13px;
}

.clearfix:after {
    clear: both
}
</style>