<template>
  <div
    class="
      rounded-lg
      shadow-md
      transition
      duration-500
      ease-in-out
      p-4
      cursor-pointer
    "
    :class="cardStyle"
  >
    <div class="justify-between flex">
      <div class="flex justify-center items-center">
        <q-icon
          :name="info.icon"
          :class="info.iconBackgroundColorClass"
          class="p-2 rounded-full text-gray-100 my-2"
          style="font-size: 32px"
        />
        <p class="text-xl ml-4" :class="titleStyle">
          {{ info.title }}
        </p>
      </div>
      <div class="text-right">
        <p class="text-xs" :class="subTitleStyle">
          {{ info.subTitle }}
        </p>
        <p class="text-xl mt-1" :class="titleStyle">
          {{ info.value }}
        </p>
      </div>
    </div>
    <hr class="my-2" />

    <div>
      <q-table
        class="resume-table"
        hide-bottom
        :class="tableStyle"
        :rows="info.table.rows"
        :columns="info.table.cols"
        row-key="name"
      />
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
            title: "Total",
            subTitle: "Resumen año",
            value: "2020",
            icon: "data_exploration",
            iconBackgroundColorClass: "bg-brand--gradient-blue",
          table: {
            rows: [
              {
                "ene-20": 66,
                "feb-20": 88,
                "mar-20": 110,
                "abr-20": 132,
                "may-20": 44,
                "jun-20": 22,
                "jul-20": 66,
                "ago-20": 154,
                "sep-20": 176,
                "oct-20": 242,
                "nov-20": 220,
                "dic-20": 198,
              },
            ],
            cols: [
              {
                name: "ene-20",
                align: "center",
                label: "ene-20",
                field: "ene-20",
              },
              {
                name: "feb-20",
                align: "center",
                label: "feb-20",
                field: "feb-20",
              },
              {
                name: "mar-20",
                align: "center",
                label: "mar-20",
                field: "mar-20",
              },
              {
                name: "abr-20",
                align: "center",
                label: "abr-20",
                field: "abr-20",
              },
              {
                name: "may-20",
                align: "center",
                label: "may-20",
                field: "may-20",
              },
              {
                name: "jun-20",
                align: "center",
                label: "jun-20",
                field: "jun-20",
              },
              {
                name: "jul-20",
                align: "center",
                label: "jul-20",
                field: "jul-20",
              },
              {
                name: "ago-20",
                align: "center",
                label: "ago-20",
                field: "ago-20",
              },
              {
                name: "sep-20",
                align: "center",
                label: "sep-20",
                field: "sep-20",
              },
              {
                name: "oct-20",
                align: "center",
                label: "oct-20",
                field: "oct-20",
              },
              {
                name: "nov-20",
                align: "center",
                label: "nov-20",
                field: "nov-20",
              },
              {
                name: "dic-20",
                align: "center",
                label: "dic-20",
                field: "dic-20",
              },
            ],
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

    const tableStyle = computed(() => {
      return {
        "text-gray-500": ui.lightMode,
        "text-gray-100": ui.darkMode,
        "font-medium": true,
        "table__input--light": ui.lightMode,
        "table__input--dark": ui.darkMode,
        "table__checkbox--light": ui.lightMode,
        "table__checkbox--dark": ui.darkMode,
        "table-light": ui.lightMode,
        "table-dark": ui.darkMode,
      };
    });

    return {
      cardStyle,
      titleStyle,
      subTitleStyle,
      tableStyle,
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

<style>
.resume-table tr td {
  font-size: 20px;
  color: #38bdf8;
}
</style>
