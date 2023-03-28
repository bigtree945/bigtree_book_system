<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-24 16:13:07
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-28 16:29:53
 * @FilePath: \my-project\src\views\detail\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="{ text: title }"></main-header>
        <!-- 患者信息 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>患者信息</span>
            </div>
            <el-descriptions :labelStyle="{ 'width': '100px', 'height': '40px', 'line-height': '40px' }"
                :contentStyle="{ 'height': '40px', 'line-height': '40px' }" :colon="false">
                <el-descriptions-item label="患者姓名">{{ patientInfo.name }}</el-descriptions-item>
                <el-descriptions-item label="就诊卡号">{{ $route.params.id }}</el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <span class="avatar">患者头像</span>
                    </template>
                    <el-avatar :size="63" :src="patientInfo.avatar">
                    </el-avatar>
                </el-descriptions-item>
                <el-descriptions-item label="证件类型">{{ patientInfo.idType }}</el-descriptions-item>
                <el-descriptions-item label="证件号码" span="2">{{ patientInfo.userId }}</el-descriptions-item>
                <el-descriptions-item label="微信昵称">{{ patientInfo.nickname }}</el-descriptions-item>
                <el-descriptions-item label="手机号码">{{ patientInfo.tel }}</el-descriptions-item>
                <el-descriptions-item label="关系">{{ patientInfo.relation }}</el-descriptions-item>
                <el-descriptions-item label="就诊人地址">{{ patientInfo.address }}</el-descriptions-item>
            </el-descriptions>
        </el-card>
        <!-- 预约信息 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>预约信息</span>
            </div>
            <el-descriptions :labelStyle="{ 'width': '100px', 'height': '40px', 'line-height': '40px' }"
                :contentStyle="{ 'height': '40px', 'line-height': '40px' }" :colon="false">
                <el-descriptions-item label="就诊医院">{{ bookInfo.hospital }}</el-descriptions-item>
                <el-descriptions-item label="医院地址">{{ bookInfo.hospitalAddress }}</el-descriptions-item>
                <el-descriptions-item label="就诊科室">{{ bookInfo.department }}</el-descriptions-item>
                <el-descriptions-item label="就诊医生">{{ bookInfo.doctor }}</el-descriptions-item>
                <el-descriptions-item label="医生职称">{{ bookInfo.title }}</el-descriptions-item>
                <el-descriptions-item label="挂号类型">{{ bookInfo.type }}</el-descriptions-item>
                <el-descriptions-item label="门诊时间">{{ bookInfo.date }}</el-descriptions-item>
                <el-descriptions-item label="候诊时间">{{ bookInfo.time }}</el-descriptions-item>
                <el-descriptions-item label="挂号费">{{ bookInfo.fee }}</el-descriptions-item>
                <el-descriptions-item label="预约时间">{{ bookInfo.bookTime }}</el-descriptions-item>
                <el-descriptions-item label="就诊状态">{{ bookInfo.state }}</el-descriptions-item>
                <el-descriptions-item label="取消原因">{{ bookInfo.reason }}</el-descriptions-item>
                <el-descriptions-item label="取消时间" span="3">{{ bookInfo.cancelTime }}</el-descriptions-item>
                <el-descriptions-item label="挂号备注" span="3">
                    <el-col :span="10"><el-input placeholder="请输入内容" v-model="notes"></el-input></el-col>
                </el-descriptions-item>
                <el-descriptions-item>
                    <el-button type="primary" class="save-btn" @click="save">保存</el-button>
                    <el-button type="primary" plain @click="$router.back()">取消</el-button>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>

    </div>
</template>

<script>
export default {
    name: 'Detail',

    data() {
        return {
            patientInfo: {},
            bookInfo: {},
            notes: ""
        };
    },
    computed: {
        title() {
            return this.$route.params.title.slice(2) + '详情'
        }
    },
    mounted() {
        this.getPatientInfo()
        this.getBookInfo()
    },

    methods: {
        async getPatientInfo() {
            let res = await this.$api.getPatientDetail(this.$route.params.id)
            if (res.code == 200) {
                this.patientInfo = res.data
            }
        },
        async getBookInfo() {
            let res = await this.$api.getBookDetail(this.$route.params.id)
            if (res.code == 200) {
                this.bookInfo = res.data
            }
        },
        save() {
            const h = this.$createElement;
            this.$message({
                iconClass: "el-icon-circle-check",
                message: "保存成功",
                customClass: "msg",
            });
            this.$router.back()

        },
    },
    components: {
    }
};
</script>

<style lang="less" scoped>
.box-card {
    width: 100%;
    margin: 30px 0;
    border-radius: 8px;

    /deep/.el-card__header {
        background-color: #f2f2f2;
        color: #197cfe;
        height: 50px;
    }

    .el-descriptions {
        margin: 0 20px;
    }
}

.avatar {
    margin-top: 35px;
}

.el-avatar {
    margin-top: 20px;
}

// 按钮
.el-button {
    width: 120px;
    border: none;
}

.save-btn {
    background-color: #006eff;
    width: 100px;
}




.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;

}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>

<style lang="less">
// message提示
// 盒子样式
.el-message.msg {
    min-width: 180px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 1px;
    background-color: #fff;
}

// 图标样式
.el-message.msg .el-icon-circle-check {
    margin-right: 10px;
    font-size: 18px;
    color: #2ed477;
    font-weight: bold;
    background-color: #fff;
}

// 文字样式
// .el-message.msg .el-message__content {}
</style>