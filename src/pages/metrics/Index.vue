<template>
  <div>
    <BreadCrumbs :links="breadCrumbsLinks" />
    <Title text="Metricas ESG" icon="bar_chart" />
    <div
      class="
        grid
        xs:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-6
        my-6
        px-4
      "
    >
      <router-link v-for="card in cards" :key="card" :to="card.route">
        <TitleIconCaptionCard :card="card" />
      </router-link>
    </div>
  </div>
</template>

<script>
import TitleIconCaptionCard from "../../components/cards/TitleIconCaptionCard.vue";
import BreadCrumbs from "../../components/breadcrumbs/Index.vue";
import Title from "../../components/text/Title.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TitleIconCaptionCard,
    Title,
    BreadCrumbs,
  },
  setup() {
    const toRoute = (route) => {
      console.log("route:", route);
      $router.push(route);
    };
    return {
      toRoute,
      breadCrumbsLinks: {
        previousLinks: [
          {
            name: "Home",
            icon: "home",
            to: "/",
          },
        ],
        currentLink: {
          name: "Metricas",
          icon: "bar_chart",
        },
      },
      cards: [
        {
          icon: "savings",
          title: "Financiero",
          caption: "DATOS FINANCIEROS",
          class: "bg-brand--gradient-esmerald text-white",
          route: "/metricas/financiero",
        },
        {
          icon: "groups",
          title: "Recursos Humanos",
          caption: "DATOS RRHH",
          class: "bg-brand--gradient-yellow text-white",
          route: "/metricas/rrhh",
        },
        {
          icon: "health_and_safety",
          title: "Seguridad y salud laboral",
          caption: "DATOS SST",
          class: "bg-brand--gradient-red text-white",
          route: "metricas/rrhh",
        },
        {
          icon: "fact_check",
          title: "Operaciones",
          caption: "DATOS OPERACIONALES",
          class: "bg-brand--gradient-blue text-white",
          route: "metricas/rrhh",
        },
      ],
    };
  },
});
</script>
