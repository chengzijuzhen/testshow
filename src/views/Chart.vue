<template>
  <div>
    <h3>图表</h3>
    <div class="container" ref="chartContainer"></div>
  </div>
</template>

 <script>
import * as echarts from "echarts";
import { res } from "./mockData";
export default {
  name: "Chart",
  data() {
    return {
      testData: [],
    };
  },

  // dom 元素渲染出来
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.chartContainer);

    this.getLineData().then((d) => {
      console.log("fetch data", d);
      const option = this.getOpts(d.data);
      myChart.setOption(option);
    });
    // .then(d => {
    //   console.log('请求结果数据', d)
    //   // todo
    // })
    // .catch(err => {
    //   console.log('请求失败', err)
    //   // todo
    // })
  },
  //定义了登录按钮的点击方法，即向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /home
  methods: {
    // 生成前i天的日期字符串
    getBeforeDate(i) {
      var n = i;
      var s = 0;
      console.log(n); //
      var d = new Date();
      var year = d.getFullYear();
      var mon = d.getMonth() + 1;
      var day = d.getDate();
      if (day <= n) {
        if (mon > 1) {
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
      s = (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
      return s;
    },

    // 获取折线图数据
    getLineData() {
      /**
       * get 请求
       */
      // this.$axios
      //   //post 的异步请求，//这里一般请求后端的接口，接口返回一个json字符串
      //   .get("/api/getTestData", {
      //     dt: ["10-01", "10-02"],
      //   });

      // 模拟请求
      return Promise.resolve(res);
    },

    // 根据数据生成折线图配置
    getOpts(data = []) {
      //用来存放最近七天的时间
      var arr = data.map((d) => d.date);

      return {
        // 鼠标移上去显示的提示信息 popup
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              width: 3,
              color: "#019688",
            },
          },
        },
        // 网格样式
        grid: {
          left: "4%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#019688", "#119AC2"],
        // x坐标轴配置
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: arr,
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                type: "solid",
                color: "rgba(226,226,226,0.5)",
              },
            },
            axisTick: {
              // 轴刻度线
              show: false,
            },
          },
        ],
        // y坐标轴
        yAxis: [
          {
            type: "value",
            name: "百分比",
            // max: 0.5,
            interval: 0.1,
            axisTick: {
              // 轴刻度线
              show: false,
            },
            // 刻度文字颜色
            axisLabel: { color: "#808080" },
            // y轴刻度设置
            axisLine: {
              lineStyle: {
                width: 2,
                color: "#019688",
              },
            },
            // y轴分隔线设置
            splitLine: {
              lineStyle: {
                color: "rgba(226,226,226,0.5)",
              },
            },
            // y轴分隔区域设置
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(226,226,226,0.3)"],
              },
            },
          },
          {
            type: "value",
            name: "用例个数",
            min: 0,
            // max: 10,
            // interval: 2,
            axisTick: {
              // 轴刻度线
              show: false,
            },
            axisLabel: { color: "#808080" },
            axisLine: {
              lineStyle: {
                width: 2,
                color: "#019688",
              },
            },
            // y轴分隔线设置
            splitLine: {
              lineStyle: {
                color: "rgba(226,226,226,0.5)",
              },
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(226,226,226,0.3)"],
              },
            },
          },
        ],
        series: [
          {
            name: "百分比",
            type: "line",
            data: data.map((d) => d.percent),
            smooth: true,
            symbolSize: 6,
            areaStyle: {},
            itemStyle: {
              borderWidth: 2,
            },
          },
          {
            name: "用例个数",
            type: "line",
            yAxisIndex: 1,
            data: data.map((d) => d.testCaseCount),
            smooth: true,
            symbolSize: 6,
            areaStyle: {},
            itemStyle: {
              borderWidth: 2,
            },
          },
        ],
      };
    },
  },
};
</script>


<style>
.container {
  width: 100%;
  height: 600px;
}
</style>
