<template>
    <div>
        <el-table :data="tableData" style="width: 100%" size="mini" cell-class-name="cell-style"
            header-cell-class-name="header-style">
            <el-table-column prop="name" label="类型名称">
            </el-table-column>
            <el-table-column prop="name" label="套餐数量">
            </el-table-column>
            <el-table-column prop="address" label="包含套餐" width="600">
            </el-table-column>
            <el-table-column label="项目状态"  width="150">
                <template slot-scope="{row}">
                    <el-switch v-model="row.state" active-color="#006eff" inactive-color="#ccc" border>
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="{row}">
                    <i class="iconfont icon-Editwritedraft"></i>
                    <i class="el-icon-delete-solid"></i>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize"
            layout="total, prev, pager, next, sizes, jumper,slot" :total="tableData.total || 0" prev-text="上一页"
            next-text="下一页" @current-change="handleCurrentChange" @size-change="handleSizeChange">
            <el-button>确定</el-button>
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'Category',

    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:false
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                state:false
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                state:false
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                state:false
            }],
            currentPage: 1,
            pageSize: 10
        };
    },

    mounted() {

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

/deep/.el-table {
    margin-top: 15px;
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

    .image {
        width: 30px;
        height: 30px;
        background-color: #e6f1ff;
        border-radius: 8px;
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
</style>