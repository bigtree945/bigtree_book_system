<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 10:56:11
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 15:55:51
 * @FilePath: \my-project\src\views\layout\main\MainHeader\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- 内容区标题 -->
    <div class="main-header">
        <div class="header-left">
            <span class="icon"></span><span class="header-text"> {{title.text}} </span>
        </div>
        <div class="header-right" v-if="title.showButtons">
            <el-button plain size="bigger">导入</el-button>
            <el-button plain >导出</el-button>
        </div>
        <div v-else><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'MainHeader',

    data() {
        return {

        };
    },
    props:['title'],
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
// 主体标题
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    box-sizing: border-box;
    .header-left {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 24px;
            height: 8px;
            border-radius: 4px;
            background-color: #197cfe;
        }

        .header-text {
            font-size: 24px;
            margin: 0 10px;
        }

    }

    .el-button {
        height: 40px;
        background-color: #dbebff;
        color: #006EFF;
        border: none;
    }
    .el-button--primary{
    background-color: #006eff;
    color: #fff;
}
}
</style>