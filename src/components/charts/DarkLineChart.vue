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
    darkOptions: {
      type: Object,
      required: false,
      default: function () {
        return {
          color: {
            r: "255",
            g: "99",
            b: "132",
          },
        };
      },
    },
  },
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.createChart();
  },
  methods: {
    darkMode(darkOptions) {
      const { color } = darkOptions;

      let darkChart = this.chartData;

      this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

      const { r, g, b } = color;

      this.gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.25)`);
      this.gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.1)`);
      this.gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      darkChart.datasets[0].backgroundColor = this.gradient;

      return darkChart;
    },
    createChart() {
      const chartData = this.darkMode(this.darkOptions);
      this.renderChart(chartData, this.chartOptions);
    },
  },
});
</script>
