<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 15:08:45
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-31 20:46:01
 * @FilePath: \my-project\src\views\layout\BookingManagement\BookingMonitor.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card>
            <header>
                <div class="radio" @change="radioChange">
                    <el-radio v-model="radio" label="全部">全部</el-radio>
                    <el-radio v-model="radio" label="待检测">待检测</el-radio>
                    <el-radio v-model="radio" label="已完成">已完成</el-radio>
                    <el-radio v-model="radio" label="已退款">已退款</el-radio>
                </div>
                <el-date-picker v-model="date" type="daterange" range-separator="~" start-placeholder="请选择日期"
                    end-placeholder="请选择日期" size="medium" format="yyyy年MM月dd日" value-format="yyyy-MM-dd">
                </el-date-picker>
                <el-button size="medium" @click="search">搜索</el-button>
            </header>
            <el-table style="width: 100%" header-cell-class-name="header-row" cell-class-name="cell-row"
                :data="tableData.BookMonitor" size="medium">
                <el-table-column type="selection" width="50">
                </el-table-column>
                <el-table-column prop="name" label="患者姓名">
                </el-table-column>
                <el-table-column prop="cardId" label="就诊卡号" width="120">
                </el-table-column>
                <el-table-column prop="userId" label="身份证号" width="180">
                </el-table-column>
                <el-table-column prop="tel" label="手机号码" width="120">
                </el-table-column>
                <el-table-column prop="department" label="科室">
                </el-table-column>
                <el-table-column prop="fee" label="检测费">
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="{row,$index}">
                        <span class="state">{{ row.state }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="就诊日期" width="100">
                </el-table-column>
                <el-table-column prop="time" label="候诊时间">
                </el-table-column>
                <el-table-column prop="bookTime" label="预约时间" width="160">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="{row,$index}">
                        <img src="./BookingRegister/images/u5660.svg" alt="" @click="goDetail(row)">
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40,50]" :page-size="pageSize"
                layout="total, prev, pager, next, sizes, jumper,slot" :total="tableData.total || 0" prev-text="上一页"
                next-text="下一页" @current-change="handleCurrentChange" @size-change="handleSizeChange">
                <el-button>确定</el-button>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'BookMonitor',

    data() {
        return {
            title: {
                text: "预约核酸检测",
                showButtons: true,
            },
            radio: "全部",
            date: [],
            tableData: {},
            currentPage: 1,
            pageSize: 10
        };
    },

    mounted() {
        document.querySelector('.el-range__close-icon').classList.add('el-icon-date')
        this.getData()
    },

    methods: {
        async getData() {
            let state = this.radio
            if (state == "全部") state = undefined
            let date = this.date[0] || ""
            if (date == "") date = undefined
            let res = await this.$api.getBookMonitor({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                state,
                date
            })
            if (res.code == 200) {
                this.tableData = res.data
            }
        },
        radioChange() {
            this.getData()
        },
        search() {
            // 发请求带上this.date参数即可
            if (this.date == "" || this.date == null) {
                // 用户手动清空日期会修改值为null，手动重置成
                this.date = []
                return this.$message({
                    type: 'warning',
                    message: '请选择日期'
                })
            }
            this.getData()
        },
        goDetail(row){
            this.$router.push({
                name:"detail",
                params: {
                    id:row.cardId,
                    title: this.title.text
                }
            })
        },
        handleCurrentChange(currentPage){
            this.currentPage= currentPage
            this.getData()
        },
        handleSizeChange(pageSize){
            this.pageSize = pageSize
            this.getData()
        }
    },

};
</script>

<style lang="less" scoped>
.el-card{
    margin-bottom: 50px;
}
// 标题
header {

    // 标题单选框
    .radio {
        display: inline-block;
        margin-right: 30px;

        /deep/.el-radio__inner {
            width: 15px;
            height: 15px;
            border: 2.5px solid #999;
        }

        /deep/.el-radio__inner::after {
            width: 7px;
            height: 7px;
            background-color: #006eff;
        }

        /deep/.el-radio__input.is-checked .el-radio__inner {
            border-color: #006eff;
            background: #fff;
        }
    }


    // 日期选择器
    /deep/.el-date-editor {
        width: 300px;
    }

    /deep/.el-range__icon {
        display: none;
    }

    .el-button {
        margin: 0 10px;
        color: #fff;
        background-color: #006eff;
    }
}

// 表格
.el-table {
    margin-top: 30px;

    /deep/.header-row {
        font-weight: normal;
        text-align: center;
    }

    /deep/.cell-row {
        padding: 15px 0;
        text-align: center;

    }

    .state {
        color: #35d67c;
    }
}


/deep/.el-pagination {
    margin-top: 20px;
    text-align: right;

    .btn-prev {
        height: 30px;
        border: 1px solid #ccc;
        padding: 0 15px;
    }

    .el-pager {

        .number,
        .more {
            border: 1px solid #ccc;
            border-left: none;
            font-weight: normal;
            height: 30px;

        }

        .number.active {
            background-color: #006eff;
            color: #fff;
            border-radius: 2px;
        }
    }

    .btn-next {
        height: 30px;
        border: 1px solid #ccc;
        border-left: none;
        padding: 0 15px;
    }

    .el-input--suffix .el-input__inner {
        width: 80px;
        height: 30px;
    }

    .el-button {
        margin-left: 10px;
        border: 1px solid #e6f1ff;
        color: #006eff;
    }

    .el-button span {
        font-size: 12px;
    }
}
</style>