<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 13:32:41
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-24 09:52:22
 * @FilePath: \my-project\src\views\404.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <el-result title="404" subTitle="抱歉，请求错误" icon="warning">
            <template slot="extra">
                <el-button type="primary" size="medium" @click="$router.back()">返回</el-button>
            </template>
        </el-result>
    </div>
</template>

<script>
export default {
    name: 'err',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped></style>