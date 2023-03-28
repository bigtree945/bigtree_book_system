<template>
    <div class="header">
        <!-- 右侧标题 -->
        <div>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar v-if="userInfo.avatar">
                    <img :src="require(`../images/${userInfo.avatar}.svg`)" alt="图片出不来">
                </el-avatar>
                <span>{{ userInfo.uname }}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <span><el-dropdown-item>修改密码</el-dropdown-item></span>
                <span @click="dialogVisible = true"><el-dropdown-item>退出</el-dropdown-item></span>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- 弹框 -->
        <el-dialog :visible.sync="dialogVisible" width="394px" top="35vh" :show-close="false">
            <div class="dialog">
                <img src="../images/u5421.svg" alt="">
                <span class="confirm">退出确认</span>
                <span class="confirm-exit">确定退出系统吗？</span>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
                    <el-button type="primary" @click="exit">确 定</el-button>
                </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Title',

    data() {
        return {
            userInfo: {},
            dialogVisible: false,
        };
    },

    mounted() {
        this.getUserInfo()
    },

    methods: {
        // 获取用户信息
        async getUserInfo() {
            let { code, data } = await this.$api.getUserInfo()
            if (code == 200) this.userInfo = data
        },
        // 退出功能
        exit(e) {
            let _that = this
            sessionStorage.removeItem("token")
            this.dialogVisible = false
            this.$message({
                message: '退出成功',
                type: 'success'
            });
            setTimeout(() => _that.$router.replace("/login"), 1000)
        },
    },
};
</script>

<style lang="less" scoped>
// 标题栏
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .el-avatar {
            width: 40px;
            height: 40px;
            margin: 0 10px;
            background-color: #006eff;

            img {
                width: 24px;
                height: 24px;
                margin: 8px auto;
            }
        }
    }
}

// 退出确认遮罩层
.el-dialog {

    .dialog {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 200px;
        box-sizing: border-box;

        .el-button {
            border: none;
            width: 80px;
            height: 32px;
            line-height: 12px;
        }

        .cancel {
            color: #1a7dff;
            background-color: #e6f1ff;
        }
    }
}

// 遮罩层标题
/deep/.el-dialog__header {
    padding: 0 !important;
}

// 用户信息下拉列表
/deep/.el-dropdown-menu__item {
    width: 100px !important;
}
</style>