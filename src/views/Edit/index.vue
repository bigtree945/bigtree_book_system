<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-04-02 07:07:34
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-04-06 15:41:15
 * @FilePath: \my-project\src\views\add\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                编辑医生信息
            </div>
            <el-form label-position="left" label-width="110px" :model="doctor" :rules="rules" ref="ruleForm">
                <el-form-item class="require" label="医生姓名" prop="name">
                    <el-input v-model="doctor.name"></el-input>
                </el-form-item>
            <el-form-item class="require" label="上传照片" prop="imageUrl">
                <el-upload class="avatar-uploader" action="http://localhost:8080/mock/uploader" :on-success="handleAvatarSuccess"
                
                    :before-upload="beforeAvatarUpload">
                    <img v-if="doctor.imageUrl" :src="doctor.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                </el-form-item>
                <el-form-item class="require" label="所属院区" prop="region">
                    <el-select v-model="doctor.region" placeholder="请选择院区">
                        <el-option v-for="item in regionOptions" :key="item.region" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="require" label="所属科室" prop="department">
                    <!-- @change="handleChange" -->
                    <el-cascader v-model="doctor.department" :options="departmentOptions" placeholder="请选择科室"></el-cascader>
                </el-form-item>
                <el-form-item class="require" label="医生职称" prop="title">
                    <el-select v-model="doctor.title" placeholder="请选择医生职称">
                        <el-option v-for="item in titleOptions" :key="item.region" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="医生标签">
                    <el-select v-model="doctor.tag" multiple placeholder="请选择医生标签">
                        <el-option v-for="item in tagOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="require" label="挂号费" prop="bookFee">
                    <el-input v-model.number="doctor.bookFee"></el-input>
                </el-form-item>
                <el-form-item class="require" label="诊查费" prop="checkFee">
                    <el-input v-model.number="doctor.checkFee"></el-input>
                </el-form-item>
                <el-form-item label="医生简介">
                    <el-input type="textarea" v-model="doctor.profile" :rows="5" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="医生状态" prop="state">
                    <el-switch v-model="doctor.state" active-color="#006eff" inactive-color="#ccc">
                    </el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="blue" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button type="primary" plain>取消</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Edit',

    data() {
        return {
            title: {
                text: '编辑医生信息'
            },
            doctor: {
                name: "",
                imageUrl: '',
                region: '',
                department: '',
                title: "",
                tag: '',
                bookFee: '',
                checkFee: '',
                profile: '',
                state: false
            },
            regionOptions: [{
                value: '东院区',
                label: '东院区'
            }, {
                value: '南院区',
                label: '南院区'
            }, {
                value: '西院区',
                label: '西院区'
            }, {
                value: '北院区',
                label: '北院区'
            }],
            departmentOptions: [{
                value: "内科",
                label: "内科",
                children: [{
                    value: "消化内科",
                    label: "消化内科",
                }, {
                    value: "血液内科",
                    label: "血液内科",
                }, {
                    value: "风湿免疫内科",
                    label: "风湿免疫内科",
                }, {
                    value: "肾内科",
                    label: "肾内科",
                },]
            }, {
                value: "外科",
                label: "外科",
                children: [{
                    value: "消化外科",
                    label: "消化外科",
                }, {
                    value: "血液外科",
                    label: "血液外科",
                }, {
                    value: "风湿免疫外科",
                    label: "风湿免疫外科",
                }, {
                    value: "肾外科",
                    label: "肾外科",
                },]
            }],
            titleOptions: [{
                value: '医士',
                label: '医士'
            }, {
                value: '医师',
                label: '医师'
            }, {
                value: '住院医师',
                label: '住院医师'
            }, {
                value: '主治医师',
                label: '主治医师'
            }, {
                value: '副主任医师',
                label: '副主任医师'
            }, {
                value: '主任医师',
                label: '主任医师'
            }],
            tagOptions: [{
                value: '肝功能',
                label: '肝功能'
            }, {
                value: '肾功能',
                label: '肾功能'
            }, {
                value: '心脑血管',
                label: '心脑血管'
            }, {
                value: '泌尿学科',
                label: '泌尿学科'
            }, {
                value: '心脏病',
                label: '心脏病'
            }],
            rules: {
                name: [
                    { required: true, message: '请输入医生姓名', trigger: 'blur' },
                    // { , message: '长度在 2 到 4 个字符', trigger: 'blur' },
                    { pattern: /^[\u4e00-\u9fa5]{2,4}$/, min: 2, max: 4, message: '必须为2-4个中文字符', trigger: 'blur' }

                ],
                // 问题：无服务器
                // imageUrl: [
                //     {type: 'image' ,required: true, message: '请上传照片' },
                // ],
                region: [
                    { required: true, message: '请选择所属院区' }
                ],
                department: [
                    { required: true, message: '请选择所属科室' }
                ],
                title: [
                    { required: true, message: '请选择职称' }
                ],
                bookFee: [
                    { required: true, message: '请输入挂号费', trigger: 'blur' },
                    { type: 'number', message: '请输入数字', trigger: 'blur' }
                ],
                checkFee: [
                    { required: true, message: '请输入检查费', trigger: 'blur' },
                    { type: 'number', message: '请输入数字', trigger: 'blur' }
                ],
            },
        };
    },

    mounted() {

    },

    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })
                    this.$router.back()

                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
/deep/.el-card {
    margin: 30px 0;
    box-shadow: 0 2px 18px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .el-card__header {
        background-color: #f2f2f2;
        color: #006eff;
    }

    .el-form {
        margin: 10px 20px;

        .el-form-item {
            .el-input {
                width: 300px;
            }

            .el-textarea {
                width: 300px;
            }

            .el-button {
                border: none;
                padding: 12px 45px;
            }

            .blue {
                background-color: #006eff;
            }
        }

        .require {
            .el-form-item__label::before {
                content: '';
            }

            .el-form-item__label::after {
                content: '*';
                color: #F56C6C;
                margin-left: 4px;
            }
        }

        // 头像上传
        .avatar-uploader .el-upload {
            position: relative;
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .el-icon-plus::after{
            position: absolute;
            bottom: -25px;
            left: 25px;
            content: '点击上传';
            font-size: 12px;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background-color: #fafafa;
        }

        .avatar {
            width: 100px;
            height: 100px;
            display: block;

        }

    }
}
</style>