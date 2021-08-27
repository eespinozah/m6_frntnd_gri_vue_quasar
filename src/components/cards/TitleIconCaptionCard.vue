<template>
  <div
    class="
      rounded-xl
      py-10
      px-4
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
  >
    <p class="text-2xl capitalize h-20 text-semibold">
      {{ card.title }}
    </p>
    <div class="">
      <q-icon :name="card.icon" class="icon p-4" style="font-size: 100px" />
      <p class="text-right mr-4 caption text-semibold my-">ir a sección ></p>
    </div>
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

    return {
      cardStyle,
      captionStyle,
      iconStyle,
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

.dark-card .icon,
.light-card .icon {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: transform;
}

.dark-card:hover .icon,
.light-card:hover .icon {
  transform: scale(1.2, 1.2);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
