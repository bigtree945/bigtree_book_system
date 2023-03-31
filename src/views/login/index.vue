<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-20 15:33:59
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-30 13:19:49
 * @FilePath: \my-project\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login">
        <main>
            <img src="./images/u5312.svg" alt="">
            <div class="form-container">
                <h1>登录</h1>
                <h3>大树医疗服务后台管理系统</h3>
                <el-form :model="user" label-width="50px">
                    <el-form-item prop="uname">
                        <template slot="label">
                            <div class="label" ref="uname">账号</div>
                        </template>
                        <el-input type="text" v-model="user.uname" placeholder="请输入账号"
                            @focus="changeStyle('focus', 'uname')" @blur="changeStyle('blur', 'uname')"></el-input>
                    </el-form-item>
                    <el-form-item prop="upass">
                        <template slot="label">
                            <div class="label" ref="upass">密码</div>
                        </template>
                        <el-input type="password" v-model="user.upass" placeholder="请输入密码"
                            @keyup.enter.native="submitForm(user)" @focus="changeStyle('focus', 'upass')"
                            @blur="changeStyle('blur', 'upass')"></el-input>
                    </el-form-item>
                    <div class="text">忘记密码请联系管理员</div>
                    <el-button type="warning" @click="submitForm(user)" @keyup.enter="submitForm(user)">登录</el-button>
                </el-form>
            </div>
            <img src="./images/u5313.svg" alt="">
        </main>
        <el-footer>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602007393"
                class="police">
                <img src="./images/beian.png" />
                <p class="police-text">粤公网安备 44030602007393号</p>
            </a>
            <a target="_blank" href="https://beian.miit.gov.cn">
                <p>粤ICP备2023001689号-1</p>
            </a>
        </el-footer>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data() {
        return {
            user: {
                uname: "",
                upass: "",
            }
        };
    },

    mounted() {

    },

    methods: {
        changeStyle(type, ref) {
            if (type == 'focus') this.$refs[ref].style.color = "blue"
            else this.$refs[ref].style.color = "#000"
        },
        async submitForm(user) {
            // 校验表单
            if (user.uname === "" || user.upass === "") {
                this.$message({
                    message: '请填写账号或密码',
                    type: 'warning'
                });
                return
            }

            try {
                // 发送请求登录
                let { code, data } = await this.$api.login(user)
                // 判断状态码确定是否登录成功
                if (code == 200) {
                    // 存储token
                    window.localStorage.setItem("token", data.token)
                    // 路由跳转到首页
                    this.$router.push('/')
                } else {
                    this.$message.error('用户名或密码不正确');
                }
            } catch (e) {
                console.log(e);
            }
        }
    },
};
</script>

<style lang="less" scoped>
// body
.login {
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;

    main {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1300px;
        min-width: 1300px;
        height: 560px;
        margin: auto;

        img {
            width: 100%;
            height: 100%;
        }

        // 表单
        .form-container {
            margin: 0 150px;
            padding: 10px 50px;
            background-color: #006eff;
            color: #fff;
            text-align: center;
            border-radius: 5px;

            h1 {
                font-size: 40px;
            }

            h3 {
                font-weight: normal;
            }

            .el-form {
                margin: 50px 0;

                .el-form-item {
                    border-radius: 4px;
                    background-color: #fff;

                    /deep/.el-input__inner {
                        border: none !important;
                    }
                }

                .text {
                    margin: -10px 0 30px;
                    text-align: end;
                    font-size: 13px;
                }

                .el-button {
                    width: 350px;
                    font-size: 16px;
                    background-color: rgba(255, 145, 56, 1);
                }
            }
        }
    }
}

// footer
.el-footer {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    background-color: #ccc;
    font-size: 12px;

    .police {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;

        .police-text {
            margin-left: 5px;
        }
    }
}
</style>