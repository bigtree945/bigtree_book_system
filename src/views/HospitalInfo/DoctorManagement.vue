<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-02-20 20:10:16
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-06 15:59:58
 * @FilePath: \my-project\src\views\content\hospitalInfo\doctorManagement.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title">
            <el-button type="danger">删除</el-button>
            <el-button type="primary">新增医生信息</el-button>
        </main-header>
        <el-card>
            <!-- 表头 -->
            <el-form :inline="true">
                <el-form-item>
                    <el-cascader v-model="cascaderValue" :options="options" size="medium" placeholder="请选择科室"></el-cascader>
                </el-form-item>
                <el-form-item><el-input v-model="inputValue" size="medium" placeholder="请输入医生姓名"
                        class="search-input"></el-input></el-form-item>
                <el-form-item><el-button type="primary" size="medium" @click="search">搜索</el-button></el-form-item>
            </el-form>
            <el-table :data="tableData.doctor" style="width: 100%" cell-class-name="cell-style"
                header-cell-class-name="header-style" size="mini">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="name" label="医生姓名">
                </el-table-column>
                <el-table-column label="医生头像">
                    <template slot-scope="{row,$index}">
                        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column prop="region" label="院区">
                </el-table-column>
                <el-table-column prop="title" label="职称">
                </el-table-column>
                <el-table-column prop="department" label="科室" width="200">
                </el-table-column>
                <el-table-column label="标签" width="250">
                    <template slot-scope="{row,$index}">
                        <el-tag :type="item.type" v-for="item in row.tag">{{ item.disease }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="profile" label="医生简介" width="250" class-name="profile">
                </el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="{row,$index}">
                        <i class="iconfont icon-Editwritedraft" @click="goEdit(row)"></i>
                        <i class="el-icon-delete-solid" @click="deleteRow(row)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize"
                layout="total, prev, pager, next, sizes, jumper,slot" :total="tableData.total || 0" prev-text="上一页"
                next-text="下一页" @current-change="getData" @size-change="handleSizeChange">
                <el-button>确定</el-button>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'DoctorManagement',

    data() {
        return {
            title: {
                text: "医生管理",
                showButtons: true,
            },
            cascaderValue: [],
            options: [{
                value: "内科",
                label: "内科",
                children: [{
                    value: "消化内科",
                    label: "消化内科",
                }, {
                    value: "血液内科",
                    label: "血液内科",
                }, {
                    value: "风湿免疫内科",
                    label: "风湿免疫内科",
                }, {
                    value: "肾内科",
                    label: "肾内科",
                },]
            }, {
                value: "外科",
                label: "外科",
                children: [{
                    value: "消化外科",
                    label: "消化外科",
                }, {
                    value: "血液外科",
                    label: "血液外科",
                }, {
                    value: "风湿免疫外科",
                    label: "风湿免疫外科",
                }, {
                    value: "肾外科",
                    label: "肾外科",
                },]
            }],
            inputValue: "",
            tableData: {},
            currentPage: 1,
            pageSize: 10
        };

    },

    mounted() {
        this.getData()
    },

    methods: {
        async getData(currentPage = 1,total) {
            this.currentPage = currentPage;
            let res = await this.$api.getDoctor({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                total
            })
            if (res.code == 200) {
                this.tableData = res.data
            }
        },
        async search() {
            if (this.cascaderValue == "" && this.inputValue == "") {
                return this.$message({
                    type: "warning",
                    message: "请输入内容"
                })
            }
            let res = await this.$api.search({
                cascaderValue: this.cascaderValue,
                inputValue: this.inputValue
            })
            if (res.code == 200) {
                this.tableData = res.data
            }
            this.cascaderValue = []
            this.inputValue = ''
        },
        goEdit(row) {
            this.$router.push({
                name: 'edit',
                params: {
                    id: row.id,
                }
            })
        },
        deleteRow(row) {
            this.$confirm(`<div>
            <div class="delete-confirm">删除确认</div>
            <div class="tip">删除后无法恢复，确定要删除此条信息吗?</div>
        </div>`, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                // type: 'warning',
                iconClass: 'iconfont icon-confirm blue',
                customClass: 'confine-width',
                center: true,
                showClose: false,
                dangerouslyUseHTMLString: true
            }).then(() => {
                this.getData(this.currentPage,1)
                this.$message({
                    type: 'success',
                    message: '删除成功'
                });
            }).catch((e) => {
                console.log(e);
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
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
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    .el-form {
        .el-cascader {
            width: 160px;
        }

        .search-input {
            width: 315px;
        }

        .el-button {
            background-color: #006eff;
        }
    }

    .el-table {
        .header-style {
            font-weight: normal;
            text-align: center;
        }

        .cell-style {
            text-align: center;
            height: 60px;
        }

        .el-tag {
            margin: 0 5px;
            height: 25px;
            line-height: 25px;
            border-radius: 30px;

        }

        .profile .cell {
            //文字用省略号代替超出的部分
            text-overflow: ellipsis;
            //超出部分隐藏
            overflow: hidden;
            //弹性伸缩盒子模型显示
            display: -webkit-box;
            //限制在一个块元素显示的文本的行数
            -webkit-line-clamp: 2;
            //设置或检索伸缩盒子对象的子元素的排列方式
            -webkit-box-orient: vertical;
        }

        .icon-Editwritedraft,
        .el-icon-delete-solid {
            margin: 0 15px;
            background-color: #fff;
            color: #006eff;
            font-size: 20px;
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

    //messageBox
}
</style>
<style>
.confine-width {
    width: 400px;
}

.delete-confirm {
    font-size: 20px;
    margin-bottom: 10px;
}

.tip {
    color: #999;
}
</style>