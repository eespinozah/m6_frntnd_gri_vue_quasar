<script>
import { defineComponent } from "vue";
import { Bar } from "vue3-chart-v2";

export default defineComponent({
  name: "BarChart",
  extends: Bar,
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
  data() {
    return {
      color: {
        r: "255",
        g: "99",
        b: "132",
      },
    };
  },
  mounted() {
    // let chartData = this.chartData;

    // const gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);

    // const { r, g, b } = this.color;
    // gradient.addColorStop(1, `rgb(${r}, ${g}, ${b})`);
    // chartData.datasets[0].backgroundColor = gradient;

    this.renderChart(this.chartData, this.chartOptions);
  },
});
</script>
