<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-02-20 20:21:14
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-06 16:59:44
 * @FilePath: \my-project\src\views\content\systemSettings\changePassword.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>修改密码</span>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                label-position="left" :hide-required-asterisk="true">
                <el-form-item label="新密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ChangePassword',

    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            title: {
                text: "修改密码"
            },
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请输入确认密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },

    mounted() {

    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        type:'success',
                        message: '修改密码成功，请重新登录'
                    })
                    sessionStorage.removeItem('token')
                    this.$router.push('/login')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
};
</script>

<style lang="less" scoped>
/deep/.el-card {
    margin: 30px 0;

    .el-card__header {
        background-color: #f2f2f2;
        color: #006eff;
    }

    .el-form-item__label::after {
        content: '*';
        color: #F56C6C;
        margin-left: 4px;
    }

    .el-input {
        .el-input__inner {
            width: 320px;
        }
    }
}
</style>