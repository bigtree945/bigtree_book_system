<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-02-20 20:15:47
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-01 15:53:09
 * @FilePath: \my-project\src\views\content\hospitalInfo\hospitalProfile.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div>编辑医院简介</div>
            </div>
            <el-form hide-required-asterisk="true">
                <el-form-item  required label="内容">
                    <quill-editor :options="editorOption" v-model="content"></quill-editor>
                </el-form-item>
                <el-form-item class="button">
                    <el-button type="primary">保存</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
    name: 'HospitalProfile',

    data() {
        return {
            title: {
                text: "医院简介"
            },
            editorOption: {
                placeholder: '请输入文章内容',
            },
            content:'',
        };
    },

    mounted() {

    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
/deep/.el-card {
    margin: 30px 10px;

    .el-card__header {
        background-color: #f2f2f2;

        span {
            color: #1a7dff;
        }
    }

    .title {
        margin-bottom: 10px;

        .require {
            color: red;
        }
    }
    .el-form{
        margin: 0 20px;
    }
    .el-form-item__label::after {
        content: '*';
        color: #F56C6C;
        margin-left: 4px;
    }
    .quill-editor {
        height: 360px;
        margin: 50px 0;
    }
    .ql-toolbar{
        background-color: #f2f2f2;

    }
    .ql-container::after{
        position: absolute;
        bottom: 0;
        display: block;
        content: '';
        width: 100%;
        height: 58px;
        background-color: #f2f2f2;
    }
    .button{
        margin-top: 60px;

    }
    .el-button--primary {
        padding: 12px 45px;
        background-color: #006eff;
    }
}
</style>