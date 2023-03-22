<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 13:02:24
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 16:42:46
 * @FilePath: \my-project\src\views\index\HotTable\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1>{{ title.titleText }}</h1>
        <el-table :data="hotData" style="width: 100%" size="small" :header-cell-style="{ 'text-align': 'center' }"
            :cell-style="{ 'text-align': 'center' }">
            <el-table-column :label="title.header[0]">
                <template slot-scope="scope">
                    <div class="id">{{ scope.row.id }}</div>
                </template>
            </el-table-column>
            <el-table-column :prop="Object.keys(this.hotData[0] || {})[1]" :label="title.header[1]">
            </el-table-column>
            <el-table-column prop="count" :label="title.header[2]">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Department',

    data() {
        return {

        };
    },
    props: {
        hotData: {
            type: Array,
            default: () => []
        },
        title: Object
    },
    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
/deep/.el-table__cell {
    background: #fff;
}

.id {
    margin: 0 auto;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 50%;
    background: linear-gradient(to right, #aaa, #d8d8d8);
    color: #fff;
    font-size: 16px;
    margin-bottom: 6px;
}

.el-table__row:nth-of-type(1) .id {
    background: linear-gradient(to right, #f46566, #f2a8b1) !important;
}

.el-table__row:nth-of-type(2) .id {
    background: linear-gradient(to right, #2fd477, #cdf98d) !important;
}

.el-table__row:nth-of-type(3) .id {
    background: linear-gradient(to right, #ff9239, #face93);
}
</style>