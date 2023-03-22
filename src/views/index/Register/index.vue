<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 13:00:44
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 15:04:37
 * @FilePath: \my-project\src\views\index\Register\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1>实时挂号</h1>
        <el-table :data="RealTimeRegistration" stripe style="width: 100%" height="370" size="small"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column label="头像" width="60">
                <template slot-scope="scope"><img :src="scope.row.avatar" alt="" class="avatar"></template>
            </el-table-column>
            <el-table-column prop="name" label="患者姓名" width="70">
            </el-table-column>
            <el-table-column prop="tel" label="患者手机号码" width="100">
            </el-table-column>
            <el-table-column prop="Department" label="挂号科室" fit>
            </el-table-column>
            <el-table-column prop="cost" label="挂号费" width="80">
            </el-table-column>
            <el-table-column prop="time" label="挂号时间" width="160">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Register',

    data() {
        return {

        };
    },
    props: {
        RealTimeRegistration: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
// 图片样式
.avatar {
    border-radius: 50%;
}
/deep/.el-table__cell {
    // padding: 18px 0 !important;
    background: #f5f9ff;
}

// 斑马纹样式
/deep/.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
    background: #fff;
}
</style>