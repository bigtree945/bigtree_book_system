<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 13:39:51
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 12:11:10
 * @FilePath: \my-project\src\views\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- layout容器 -->
    <el-container>
        <Nav></Nav>
        <!-- 右侧内容区 -->
        <el-container>
            <el-header>
                <Title></Title>
            </el-header>
            <!-- 右侧内容区 -->
            <el-main>
                <router-view>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Nav from "./nav"
import Title from "./title"
export default {
    name: 'Index',

    data() {
        return {

        };
    },
    components: {
        Nav,
        Title,
    },
    mounted() {

    },

    methods: {


    },
};
</script>

<style lang="less" scoped>
// 容器
.el-container {
    height: 100vh;

    .el-header {
        position: relative;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
        background-color: #fff;
        height: 74px !important;
    }

    // 右侧内容
    .el-container {
        min-width: 1160px;
        .el-main{
            width: 100%;
            height: 100%;
            padding: 0 30px;
            box-sizing: border-box;
            background-color: #f3f8ff;
        }
    }
}
</style>