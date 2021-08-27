<template>
  <div
    class="
      rounded-xl
      p-10
      text-center
      shadow-md
      cursor-pointer
      transition
      duration-200
      transform
      hover:text-gray-200 hover:shadow-xl
      sm:hover:scale-105
    "
    :class="cardStyle"
    @click="toRoute"
  >
    <div class="h-4/5">
      <q-icon
        name="description"
        class="text-lg mb-2 icon"
        style="font-size: 64px"
      />
      <div>
        <p class="">{{ card.title }}</p>
      </div>
    </div>
    <hr class="my-2" />
    <p class="caption">{{ card.caption }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    card: {
      type: Object,
      default: function () {
        return {
          icon: "description",
          title: "titulo",
          caption: "A001",
        };
      },
    },
  },
  setup() {
    const {
      state: { ui },
    } = useStore();

    const cardStyle = computed(() => {
      return {
        "bg-card-dark": ui.darkMode,
        "text-gray-200": ui.darkMode,
        "dark-card": ui.darkMode,
        "light-card": ui.lightMode,
        "text-gray-500": ui.lightMode,
        "bg-gray-100": ui.lightMode,
      };
    });

    const iconStyle = computed(() => {
      return {
        "text-brand--blue": ui.darkMode,
      };
    });

    const captionStyle = computed(() => {
      return {
        caption: ui.darkMode,
      };
    });

    const toRoute = () => {
      console.log("hola");
    };
    // router.push("metricas/hh");

    return {
      cardStyle,
      captionStyle,
      iconStyle,
      toRoute,
    };
  },
};
</script>

<style scoped>
.light-card:hover,
.dark-card:hover {
  background: linear-gradient(0deg, #0ea5e9, #38bdf8);
}

.light-card .caption,
.dark-card .caption {
  color: #38bdf8;
}

.light-card:hover .caption,
.dark-card:hover .caption,
.light-card:hover {
  color: #f3f4f6;
}

.dark-card:hover .icon,
.light-card:hover .icon {
  transform: rotate(10deg) scale(1.2, 1.2) translate(0, -8px);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
