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

	var myChart = echarts.init(document.getElementById('main'));
	var arr = [];//用来存放最近七天的时间
 
	function getBeforeDate(i) {
		var n = i;
    var s = 0;
		console.log(n);//
		var d = new Date();
		var year = d.getFullYear();
		var mon = d.getMonth() + 1;
		var day = d.getDate();
		if(day <= n) {
			if(mon > 1) {
				mon = mon - 1;
			} else {
				year = year - 1;
				mon = 12;
			}
		}
		d.setDate(d.getDate() + n); //很重要，+n取得是前一天的时间
		year = d.getFullYear();
		mon = d.getMonth() + 1;
		day = d.getDate();
		s = (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
		return s;
	}
 
	for(var i = 0; i > -7; i--) {
		arr.push(getBeforeDate(i));
 
	}
	console.log(arr);
	var option = {

          tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  width: 3,
                  color: '#019688',
                },
              },
        },
        grid: {
          left: '4%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
        },
        color: ['#019688', '#119AC2'],
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: arr.reverse(),
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                type: 'solid',
                color: 'rgba(226,226,226,0.5)',
              },
            },
            axisTick: { // 轴刻度线
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '用例个数',
            max: 0.5,
            interval: 0.1,
            axisTick: { // 轴刻度线
              show: false,
            },
            // 刻度文字颜色
            axisLabel: { color: '#808080' },
            // y轴刻度设置
            axisLine: {
              lineStyle: {
                width: 2,
                color: '#019688',
              },
            },
            // y轴分隔线设置
            splitLine: {
              lineStyle: {
                color: 'rgba(226,226,226,0.5)',
              },
            },
            // y轴分隔区域设置
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(226,226,226,0.3)'],
              },
            },
          },
          {
            type: 'value',
            name: '测量原始值',
            min: 0,
            max: 10,
            interval: 2,
            axisTick: { // 轴刻度线
              show: false,
            },
            axisLabel: { color: '#808080' },
            axisLine: {
              lineStyle: {
                width: 2,
                color: '#019688',
              },
            },
            // y轴分隔线设置
            splitLine: {
              lineStyle: {
                color: 'rgba(226,226,226,0.5)',
              },
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(226,226,226,0.3)'],
              },
            },
          },
        ],
        series: [
          {
            name: '浓度数据',
            type: 'line',
            data: [0.2, 0.049, 0.07, 0.23, 0.25, 0.07, 0.15, 0.162, 0.32, 0.2, 0.06, 0.33],
            smooth: true,
            symbolSize: 6,
            areaStyle: {},
            itemStyle: {
              borderWidth: 2,
            },
          },
          {
            name: '日期',
            type: 'line',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 6.4, 8.7, 0.7, 5.6, 2.2, 0.4, 0.18, 0.24, 0.25],
            smooth: true,
            symbolSize: 6,
            areaStyle: {},
            itemStyle: {
              borderWidth: 2,
            },
          }],

        };
        myChart.setOption(option);

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
