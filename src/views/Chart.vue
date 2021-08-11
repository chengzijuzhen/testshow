<template>
  <div>
    <h3>图表</h3>
    <div class="container" ref="chartContainer"></div>

  </div>
</template>

 <script>
 import * as echarts from 'echarts';

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        
      }
    },
      mounted() {
        // 基于准备好的dom，初始化echarts实例
        console.log('this', this.$refs.chartContainer)
        const myChart = echarts.init(this.$refs.chartContainer);
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

  },
    //定义了登录按钮的点击方法，即向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /home
    methods: {

    } 
  }


</script>


<style>
.container {
  width: 100%;
  height: 600px;
}
</style>
