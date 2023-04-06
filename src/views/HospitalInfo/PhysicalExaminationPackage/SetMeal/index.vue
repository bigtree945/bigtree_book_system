<template>
    <div>
        <el-form :inline="true">
            <el-form-item>
                <el-select v-model="value" placeholder="请选择套餐类型" size="medium">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入套餐名称" class="search-input" size="medium"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="medium">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" size="mini" cell-class-name="cell-style"
            header-cell-class-name="header-style">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="id" label="套餐ID">
            </el-table-column>
            <el-table-column prop="name" label="套餐名称">
            </el-table-column>
            <el-table-column label="套餐图片">
                <template slot-scope="{row}">
                    <img :src="row.imgURL" alt="" class="image">
                </template>
            </el-table-column>
            <el-table-column prop="type" label="套餐类型">
            </el-table-column>
            <el-table-column prop="region" label="适用院区">
            </el-table-column>
            <el-table-column prop="price" label="套餐价格（元）">
            </el-table-column>
            <el-table-column prop="project" label="套餐项目" width="300">
            </el-table-column>
            <el-table-column label="套餐状态">
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
            layout="total, prev, pager, next, sizes, jumper,slot" :total="total || 0" prev-text="上一页" next-text="下一页"
            @current-change="handleCurrentChange" @size-change="handleSizeChange">
            <el-button>确定</el-button>
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'setMeal',

    data() {
        return {
            options: [{
                value: '男性套餐',
                label: '男性套餐'
            }, {
                value: '女性套餐',
                label: '女性套餐'
            }, {
                value: '老年人套餐',
                label: '老年人套餐'
            }, {
                value: '入职套餐',
                label: '入职套餐'
            }],
            value: '',
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            total: 0
        };
    },

    mounted() {
        this.getData()
    },

    methods: {
        async getData() {
            let res = await this.$api.getSetMeal()
            if (res.code == 200) {
                this.tableData = res.data.setMeal
                this.total = res.data.total
            }
        },
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
.el-form {
    margin-top: 15px;

    .el-select {
        width: 160px;
    }

    .search-input {
        width: 320px;
    }

    .el-button {
        background-color: #006eff;
    }
}

/deep/.el-table {
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