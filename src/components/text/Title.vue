<template>
  <div
    class="
      flex
      items-center
      justify-center
      shadow-md
      rounded-full
      my-6
      mx-4
      transition
      duration-300
      p-4
    "
    :class="cardStyle"
  >
    <p class="text-semibold text-xl capitalize">{{ text }}</p>
    <q-icon :name="icon" class="ml-4 " style="font-size: 24px" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    text: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default: "bar_chart",
    },
  },
  setup() {
    const store = useStore();

    const {
      state: { ui },
    } = useStore();

    const cardStyle = computed(() => {
      return {
        "bg-card-dark": ui.darkMode,
        "text-gray-100": ui.darkMode,
        "bg-gray-100": ui.lightMode,
        "text-gray-500": ui.lightMode,
      };
    });
    return {
      cardStyle,
    };
  },
};
</script>
