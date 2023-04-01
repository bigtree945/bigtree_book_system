<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-02-20 19:58:53
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 16:25:59
 * @FilePath: \my-project\src\views\content\bookingManagement\rostering.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card>
            <!-- 表头 -->
            <el-form :inline="true">
                <el-form-item>
                    <el-radio-group v-model="radio" size="small">
                        <el-radio-button label="上一周"></el-radio-button>
                        <el-radio-button label="本周"></el-radio-button>
                        <el-radio-button label="下一周"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <!-- @change="handleChange" -->
                <el-form-item>
                    <el-cascader v-model="cascaderValue" :options="options" size="small" placeholder="请选择科室"></el-cascader>
                </el-form-item>
                <el-form-item><el-input v-model="inputValue" size="small" placeholder="请输入医生姓名"></el-input></el-form-item>
                <el-form-item><el-button type="primary" size="small">搜索</el-button></el-form-item>
            </el-form>
            <el-table :data="tableData" style="width: 100%" size="mini" cell-class-name="cell-style" header-cell-class-name="header-style">
                <el-table-column prop="name" label="医生姓名" class-name="doctor" width="70">
                </el-table-column>
                <el-table-column prop="deparment" label="科室" width="100">
                </el-table-column>
                <el-table-column :label="`2021/01/0${index+1} ${item}`" v-for="(item,index) in week">
                    <el-table-column label="上午" width="70">
                        <template>
                            <span><span style="color:red;">10</span>/<span>20</span></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="下午" width="70" class-name="gray">
                        <template>
                            <span  class="gray">休</span>
                        </template>
                    </el-table-column>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="{row,$index}">
                            <i class="el-icon-s-tools"></i>
                    </template>
                </el-table-column>
                
            </el-table>
            <!-- 分页器 -->
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize"
                layout="total, prev, pager, next, sizes, jumper,slot" :total="tableData.total || 0" prev-text="上一页"
                next-text="下一页" @current-change="handleCurrentChange" @size-change="handleSizeChange">
                <el-button>确定</el-button>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'DoctorScheduling',

    data() {
        return {
            title: {
                text: "医生排班",
            },
            // 表头数据
            radio: "本周",
            cascaderValue: [],
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
            inputValue: "",
            // 表格数据
            week:["星期一","星期二","星期三","星期四","星期五","星期六","星期日",],
            tableData: [{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            },{
                name: '张三',
                deparment: '内科-心脏内科',
            }],
            currentPage: 1,
            pageSize: 10
        };

    },

    mounted() {
        this.$message({
            type:'error',
            message: '需求不明确，暂未实现功能'
        })
    },

    methods: {
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage
            this.getData()
        },
        handleSizeChange(pageSize) {
            this.pageSize = pageSize
            this.getData()
        },
    },
};
</script>

<style lang="less" scoped>
/deep/.el-card {
    margin: 30px 0;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);

    // 表头
    .el-form {

        // 单选按钮
        .el-radio-button__inner {
            padding: 9px 25px;
            color: #006eff;
        }

        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
            background-color: #006eff;
            border-color: #006eff;
            color: #fff;
        }

        .el-button {
            padding: 9px 20px;
            background-color: #006eff;
        }
    }
    .el-table{
        .gray{
            color: #aaa;
            background-color: #fafafa;
        }
        .header-style{
            font-weight: normal;
            text-align: center;
            background-color: #fff;
        }
        .cell-style{
            text-align: center;
            height: 60px;
        }
        .doctor{
            color: #006eff;
        }
        .el-icon-s-tools{
            transform: scale(2);
            color: #006eff;
            font-weight: bold;
        }
        
        
    }
    // 分页器
    .el-pagination {
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
}
</style>