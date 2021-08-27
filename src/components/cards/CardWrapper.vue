<template>
  <div
    class="shadow-md rounded-lg transition duration-500 ease-in-out"
    :class="cardStyle"
  >
    <slot />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const {
      state: { ui },
    } = useStore();

    const cardStyle = computed(() => {
      return {
        "bg-card-dark": ui.darkMode,
        "bg-gray-100": ui.lightMode,
      };
    });

    return {
      cardStyle,
    };
  },
};
</script>
