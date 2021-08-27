<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";

export default defineComponent({
  name: "LineChart",
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    // let chartData = this.chartData;
    // const gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // chartData.datasets[0].backgroundColor = gradient;

    this.renderChart(this.chartData, this.chartOptions);
  },
  updated() {
    this.renderChart(this.chartData, this.chartOptions);
  },
});
</script>
