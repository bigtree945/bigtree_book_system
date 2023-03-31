<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-21 09:45:40
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-28 22:59:59
 * @FilePath: \my-project\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <main-header :title="title"></main-header>
        <Overview :overview="content.overview"></Overview>
        <div class="chart">
            <book-chart class="item a-item" :chartData="content.BookChart"></book-chart>
            <recharge-chart class="item a-item" :chartData="content.RechargeChart"></recharge-chart>
            <Register class="item a-item a-table" :RealTimeRegistration="content.RealTimeRegistration"></Register>
            <div class="item table">
                <hot-table class="table-item a-table" :hotData="content.hotDepartment" :title="hotDepartment"></hot-table>
                <hot-table class="table-item a-table" :hotData="content.hotDoctor" :title="hotDoctor"></hot-table>
            </div>
        </div>

    </div>
</template>

<script>
import Overview from './overview'
import BookChart from './BookChart'
import RechargeChart from './RechargeChart'
import Register from './Register'
import HotTable from './HotTable'
export default {
    name: 'Index',

    data() {
        return {
            title: {
                text: "首页",
                showButtons: false
            },
            content: {},
            hotDepartment: {
                titleText: "热门科室",
                header: ["排名", "科室", "挂号量"]
            },
            hotDoctor: {
                titleText: "热门医生",
                header: ["排名", "医生姓名", "挂号量"]
            },
        };
    },

    mounted() {
        this.getData()
    },

    methods: {
        async getData() {
            let res = await this.$api.getIndexData()
            if (res.code == 200) this.content = res.data
        }
    },
    components: {
        Overview,
        BookChart,
        RechargeChart,
        Register,
        HotTable
    }
};
</script>

<style lang="less" scoped>
.chart {
    display: flex;
    justify-content: space-between;
    width: 1285px;
    flex-wrap: wrap;
    margin: 15px 0 50px;

    .item {
        width: 630px;
        height: 433px;
        margin: 15px 0;
    }

    .a-item {
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, .2);
        background-color: #fff;
        border-radius: 6px;

    }

    .a-table {
        padding: 0 20px;
        box-sizing: border-box;
    }

    .table {
        display: flex;
        justify-content: space-between;
    }

    .table-item {
        width: 48.5%;
        height: 100%;
        border-radius: 6px;
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, .2);
        background-color: #fff;

    }
}
</style>