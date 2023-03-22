<template>
    <div>
        <p class="overview-text">数据总览</p>
        <div class="overview">
            <div class="item" v-for="(item, index) in overview" :key="item.id">
                <div class="img">
                    <img :src="require('../images/' + index + '.svg')">
                </div>
                <div class="content">
                    <div class="content-text">
                        <span class="text"> {{item.count}}</span>
                        <img src="../images/u5450.svg" alt="">
                    </div>
                    <span class="title"> {{item.title}} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'overview',

    data() {
        return {

        };
    },
    props: {
        overview: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.overview-text {
    font-size: 20px;
    margin: 20px;
    color: #555;
}

.overview {
    width: 1285px;
    display: flex;
    justify-content: space-evenly;
    .item {
        display: flex;
        width: 210px;
        padding: 15px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);

        .img {
            width: 70px;
            height: 70px;
            text-align: center;
            line-height: 80px;
            border-radius: 6px;
            background: linear-gradient(to right, #8401ff, #c27fff);
        }


        .content {
            padding-left: 20px;
            flex: 1;

            .content-text {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .text {
                    font-size: 30px;
                    font-weight: bold;
                }

                img {
                    width: 14px;
                    height: 14px;
                }
            }

            .title {
                font-size: 12px;
                color: #aaa;
            }

        }
    }

    &>.item:nth-child(1)>.img {
        background: linear-gradient(to right, #016eff, #619cf4);
    }

    &>.item:nth-child(2)>.img {
        background: linear-gradient(to right, #f46363, #eb7f8c);
    }

    &>.item:nth-child(3)>.img {
        background: linear-gradient(to right, #2fd477, #c9f982);
    }

    &>.item:nth-of-type(4)>.img {
        background: linear-gradient(to right, #ff9239, #facd91);

    }

    &>.item:nth-of-type(5)>.img {
        background: linear-gradient(to right, #8401ff, #c27fff);

    }
}
</style>