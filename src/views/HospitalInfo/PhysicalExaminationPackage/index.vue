<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-04-01 11:41:20
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 12:00:17
 * @FilePath: \my-project\src\views\HospitalInfo\PhysicalExaminationPackage\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-02-20 20:13:26
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 11:40:13
 * @FilePath: \my-project\src\views\content\hospitalInfo\physicalExaminationPackage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title">
            <el-button>删除</el-button>
            <el-button type="primary">新增套餐信息</el-button>
        </main-header>
        <el-card>
            <!--   -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="体检套餐" name="setMeal">
                    <set-meal></set-meal>
                </el-tab-pane>
                <el-tab-pane label="体检项目" name="project">
                    <project></project>
                </el-tab-pane>
                <el-tab-pane label="套餐类型" name="category">
                    <category></category>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import setMeal from "./SetMeal"
import project from "./Project"
import category from "./Category"
export default {
    name: 'PhysicalExaminationPackage',

    data() {
        return {
            title: {
                text: "体检套餐管理",
            },
            activeName: 'setMeal'
        };
    },

    mounted() {

    },

    methods: {
        handleClick(vc){
            console.log(vc);
        }
    },
    components:{
        setMeal,
        project,
        category
    }
};
</script>

<style lang="less" scoped>
/deep/.el-card{
    .el-tabs__item{
        font-size: 16px;
        font-weight: 500;
    }
    .is-active{
        color:#006eff;
    }
    .el-tabs__active-bar{
        background-color: #006eff;
        height: 3px;
    }
}
</style>