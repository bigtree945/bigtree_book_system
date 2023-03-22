<!--
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-22 13:00:09
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-22 14:14:20
 * @FilePath: \my-project\src\views\index\Recharge\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div ref="RechargeChart"></div>
</template>

<script>
import echarts from "@/echarts/echarts"
export default {
    name: 'RechargeChart',

    data() {
        return {
            options: {
                title: {
                    text: "近7日门诊充值趋势",
                    textStyle: {
                        height: 50,
                        lineHeight: 50,
                        fontSize: 20
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
                    type: 'category',
                    data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
                    name: "日期",
                    nameLocation: "start",
                    nameTextStyle: {
                        verticalAlign: "top",
                        padding: [10, 0, 0, 0]
                    },
                    axisTick: {
                        show: false,
                    }
                },
                yAxis: {
                    type: 'value',
                    name: "单位（元）",
                    nameTextStyle: {
                        verticalAlign: "bottom",
                        padding: [0, 0, 0, -30]
                    }
                },
                series: [
                    {
                        data: [],
                        type: 'line',
                        smooth: true,
                        symbolSize: 0,
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#ff9138'
                                }, {
                                    offset: 1, color: '#fbdaaf'
                                }],
                                global: false
                            },
                            width: "5",
                        },
                        label: {
                            show: true,
                            position: "top",
                            distance: 20,
                            fontWeight: "bold",
                            formatter(value) {
                                if (value.dataIndex % 2 != 0) {
                                    return `{bottom|${value.data}}`
                                }
                                if (value.dataIndex == 6) {
                                    return `{emphasize|${value.data}}`
                                }
                            },
                            rich: {
                                emphasize: {
                                    backgroundColor: "#fff",
                                    padding: [0, -5, -2, 0],
                                    borderWidth: 5,
                                    borderColor: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 0,
                                        colorStops: [{
                                            offset: 0, color: '#ff9138'
                                        }, {
                                            offset: 1, color: '#fbdaaf'
                                        }],
                                        global: false
                                    },
                                    fontWeight: "bold",
                                    distance: 10,
                                },
                                bottom: {
                                    padding: [0, 0, -80, -20],
                                    fontWeight: "bold",
                                }
                            }
                        }
                    }
                ]
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
                var myChart = echarts.init(this.$refs.RechargeChart);
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