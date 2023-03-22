<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 12:59:24
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 15:00:58
 * @FilePath: \my-project\src\views\index\BookChart\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div ref="RegisterBook"></div>
</template>

<script>
import echarts from "@/echarts/echarts"
export default {
    name: 'HotTable',

    data() {
        return {
            options: {
                title: {
                    show: true,
                    text: "近7日挂号预约情况",
                    textStyle: {
                        fontSize: 20,
                        height: 50,
                        lineHeight: 50
                    },
                    padding: 20
                },
                textStyle: {
                    color: "#aaa",
                },
                grid: {
                    top: 130,
                    right: 30,
                    bottom: 40,
                    left: 30,
                    containLabel: true
                },
                xAxis: {
                    axisTick: { show: false },
                    type: 'category',
                    name: "日期",
                    nameLocation: "start",
                    nameTextStyle: {
                        verticalAlign: "bottom",
                        padding: [0, 0, -20, 0],
                    },
                    data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日']
                },
                yAxis: {
                    type: 'value',
                    name: "预约人次",
                    nameTextStyle: {
                        verticalAlign: "top",
                        padding: [-20, 0, 0, -30],
                    },
                },
                series: [{
                    barWidth: 12,
                    data: [],
                    type: 'bar',
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#016fff'
                            }, {
                                offset: 1, color: '#fff'
                            }],
                            global: false,
                        },
                        borderRadius: 50,
                    },
                    label: {
                        show: true,
                        position: 'top',
                        fontWeight: 'bold',
                    }
                }]
            },
        };
    },
    props: {
        chartData: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        chartData: {
            handler() {
                this.options.series[0].data = this.chartData
                // 基于准备好的模板引用，初始化echarts实例
                var myChart = echarts.init(this.$refs.RegisterBook);
                // 绘制图表
                myChart.setOption(this.options);
            },
        }
    },
    mounted() {
    },

    methods: {
    },
};
</script>

<style lang="less" scoped></style>