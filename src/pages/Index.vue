<template>
  <div>
    TEST
    <div
      class="
        grid
        xs:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        my-6
      "
    >
      <MiniInfoCard v-for="item in miniCard" :key="item" :info="item" />
    </div>

    <div class="grid grid-cols-1 gap-5 my-6">
      <CardWrapper class="p-2"> <StandarCrudTable /> </CardWrapper>
    </div>
    <div class="grid grid-cols-4 gap-5 my-6">
      <CardWrapper class="p-2" v-for="card in 4" :key="card">
        <LineChart
          :chartData="chartData"
          :chartOption="chartOptions"
          :style="chartStyle"
        />
      </CardWrapper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MiniInfoCard from "../components/MiniInfoCard.vue";
import CardWrapper from "../components/cards/CardWrapper.vue";
import StandarCrudTable from "../components/tables/StandarCrudTable.vue";
import LineChart from "../components/charts/LineChart.vue";

export default defineComponent({
  components: {
    MiniInfoCard,
    CardWrapper,
    StandarCrudTable,
    LineChart,
  },
  name: "PageIndex",
  setup() {
    const {
      state: { ui },
    } = useStore();

    const miniCard = [
      {
        firstRow: {
          title: "Titulo",
          value: "150.000",
          icon: "person",
          iconBackgroundColorClass: "bg-brand--gradient-ambar",
        },
        secondRow: {
          text: "Update Now",
          icon: "person",
        },
      },
      {
        firstRow: {
          title: "Titulo",
          value: "150.000",
          icon: "person",
          iconBackgroundColorClass: "bg-brand--gradient-purple",
        },
        secondRow: {
          text: "Update Now",
          icon: "person",
        },
      },
      {
        firstRow: {
          title: "Titulo",
          value: "150.000",
          icon: "person",
          iconBackgroundColorClass: "bg-brand--gradient-blue",
        },
        secondRow: {
          text: "Update Now",
          icon: "person",
        },
      },
      {
        firstRow: {
          title: "Titulo",
          value: "150.000",
          icon: "person",
          iconBackgroundColorClass: "bg-brand--gradient-red",
        },
        secondRow: {
          text: "Update Now",
          icon: "person",
        },
      },
    ];

    const chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Charts",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1.6,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const darkOptions = {
      color: {
        r: "255",
        g: "99",
        b: "132",
      },
    };

    return {
      miniCard,
      chartData,
      chartOptions,
      chartStyle: {
        position: "relative",
        height: "100%",
        width: "99%",
      },
      darkOptions,
    };
  },
});
</script>
