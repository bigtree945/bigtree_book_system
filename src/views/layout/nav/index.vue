<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 10:32:55
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 10:36:32
 * @FilePath: \my-project\src\views\layout\nav\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- 导航栏 -->
    <el-aside width="240px">
        <el-header>
            <div class="logo">Logo</div>
            <p class="title-text">大树医疗服务后台</p>
        </el-header>
        <!-- 导航列表 -->
        <el-menu active-background-color="#fff" active-text-color="#fff" background-color="#197cfe" text-color="#fff"
            router>
            <el-menu-item :route="{ path: '/' }" index="/">
                <img src="../images/u5416.svg" alt="">&nbsp;
                <span slot="title">首页</span>
            </el-menu-item>
            <!-- 折叠菜单 -->
            <el-submenu :index="index.toString()" v-for="(item, index) in nav" :key="item.path">
                <template #title>
                    <img :src="require('../images/' + index + '.svg')" alt="">&nbsp;
                    <span>{{ item.meta.type }}</span>
                </template>
                <el-menu-item :index="index + i.toString()" :route="item.path + '/' + jtem.path"
                    v-for="(jtem, i) in item.children" :key="jtem.path">
                    {{ jtem.meta.title }}
                </el-menu-item>
            </el-submenu>

        </el-menu>
    </el-aside>
</template>

<script>
export default {
    name: 'Nav',

    data() {
        return {

        };
    },
    computed: {
        // 导航列表
        nav() {
            // 遍历路由找到导航列表路由
            let arr = this.$router.options.routes
                .filter(item => item.path.includes("-"))
            return arr
        }
    },
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
// 导航栏
.el-aside {
    background-color: #197cfe;
    color: #fff;

    .el-header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 40px 0;
        font-size: 18px;

        .logo {
            width: 32px;
            height: 32px;
            background-color: #fff;
            color: #2483ff;
            font-size: 12px;
            text-align: center;
            line-height: 32px;
            border-radius: 50%;
        }
    }

    .el-menu {
        .el-submenu {
            .el-menu-item {
                padding-left: 50px !important;
            }
        }
    }
}
</style>