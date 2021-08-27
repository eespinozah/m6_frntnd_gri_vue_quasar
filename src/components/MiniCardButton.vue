<template>
  <div
    class="
      p-8
      shadow-md
      hover:shadow-2xl
      rounded-lg
      transition
      duration-1000
      ease-in-out
    "
    :class="cardStyle"
  >
    <div>
      <div class="">
        <q-icon
          name="warning"
          class="shadow-md p-4 rounded-full text-brand block m-auto my-2"
          style="font-size: 32px"
        />
        <div>
          <div
            class="font-medium leading-none text-center"
            :class="subTitleStyle"
          >
            ENFOQUE DE GESTIÓN
          </div>
          <p class="text-sm leading-none mt-1 text-center" :class="titleStyle">
            101
          </p>
        </div>
        <button
          class="
            block
            m-auto
            bg-brand
            px-5
            py-2
            text-sm
            shadow-sm
            hover:shadow-lg
            font-medium
            tracking-wider
            text-gray-100
            rounded-full
            mt-4
          "
        >
          Crear
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-brand {
  /* background-image: linear-gradient(0deg, #26c6da, rgb(0, 242, 195)); */
  background-color: #26c6da;
}

.text-brand {
  color: #26c6da;
}
</style>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "miniCardButton",
  setup() {
    const {
      state: { ui },
    } = useStore();

    const cardStyle = computed(() => {
      return {
        "bg-gray-100": ui.lightMode,
        "bg-card-dark": ui.darkMode,
      };
    });

    const titleStyle = computed(() => {
      return {
        "text-gray-100": ui.darkMode,
        "text-gray-500": ui.lightMode,
      };
    });

    const subTitleStyle = computed(() => {
      return {
        "text-gray-300": ui.darkMode,
        "text-gray-500": ui.lightMode,
      };
    });

    return {
      cardStyle,
      titleStyle,
      subTitleStyle,
    };
  },
});
</script>

<style>
.bg-card-dark {
  background: #27293d;
}
</style>
