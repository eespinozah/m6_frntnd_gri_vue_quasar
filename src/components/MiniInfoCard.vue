<template>
  <div
    class="
      rounded-lg
      shadow-md
      transition
      duration-500
      ease-in-out
      hover:shadow-2xl
      p-4
      cursor-pointer
    "
    :class="cardStyle"
  >
    <div class="justify-between flex">
      <q-icon
        :name="info.firstRow.icon"
        :class="info.firstRow.iconBackgroundColorClass"
        class="p-2 rounded-full text-gray-100 my-2"
        style="font-size: 32px"
      />
      <div class="text-right">
        <p class="text-xs" :class="subTitleStyle">{{ info.firstRow.title }}</p>
        <p class="text-xl mt-1" :class="titleStyle">
          {{ info.firstRow.value }}
        </p>
      </div>
    </div>
    <hr class="my-2" />
    <div class="flex items-center">
      <q-icon
        :name="info.secondRow.icon"
        class="p-2 rounded-full"
        :class="subTitleStyle"
      />
      <p class="text-xs center" :class="subTitleStyle">
        {{ info.secondRow.text }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    info: {
      type: Object,
      default() {
        return {
          firstRow: {
            title: "Titulo",
            value: "150.000",
            icon: "person",
            iconBackgroundColorClass: "bg-blue-500",
          },
          secondRow: {
            text: "Update Now",
            icon: "person",
          },
        };
      },
    },
  },

  name: "miniCardInfo",
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
      iconBackground: [
        "bg-brand--gradient-orange",
        "bg-brand--gradient-purple",
        "bg-brand--gradient-blue",
        "bg-brand--gradient-red",
      ],
    };
  },
});
</script>
