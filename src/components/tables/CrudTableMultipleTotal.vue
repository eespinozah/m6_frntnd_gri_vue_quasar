<template>
  <div>
    <q-table
      dense
      :class="tableStyle"
      class="my-sticky-header-table"
      :title="tableTitle"
      :rows="templateRows"
      :columns="templateColumns"
      :filter="filter"
      row-key="name"
      v-model:selected="selected"
    >
      <!-- :selected-rows-label="getSelectedString"
      selection="multiple" -->
      <template :class="tableStyle" v-slot:top-right>
        <q-input
          color="light-blue-6"
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
          :class="tableStyle"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-actions="props" v-if="templateActions.enable">
        <q-td :props="props">
          <q-icon
            class="text-2xl cursor-pointer table-icon mx-4 btn-edit"
            name="edit"
            @click="editRow(props)"
            v-if="templateActions.edit"
          ></q-icon>
          <q-icon
            class="text-2xl cursor-pointer table-icon btn-delete"
            name="delete"
            @click="deleteRow(props)"
            v-if="templateActions.delete"
          ></q-icon>
        </q-td>
      </template>
      <template v-slot:bottom-row>
        <q-tr style="height: 56px" v-for="item in total" :key="item">
          <q-td></q-td>

          <q-td style="color: #38bdf8; font-size: 1rem" class="text-capitalize">
            {{ item.title }}</q-td
          >
          <q-td
            style="color: #38bdf8; font-size: 1rem"
            v-for="value in item.data"
            :key="value"
            class="text-center"
            >{{ value }}</q-td
          >
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    rows: {
      type: Array,
      default: function () {
        return [
          {
            name: "Efectivo y Equivalentes al Efectivo",
            "ene-20": 6,
            "feb-20": 8,
            "mar-20": 10,
            "abr-20": 12,
            "may-20": 4,
            "jun-20": 2,
            "jul-20": 6,
            "ago-20": 14,
            "sep-20": 16,
            "oct-20": 22,
            "nov-20": 20,
            "dic-20": 18,
          },
          {
            name: "Otros activos financieros, corrientes",
            "ene-20": 6,
            "feb-20": 8,
            "mar-20": 10,
            "abr-20": 12,
            "may-20": 4,
            "jun-20": 2,
            "jul-20": 6,
            "ago-20": 14,
            "sep-20": 16,
            "oct-20": 22,
            "nov-20": 20,
            "dic-20": 18,
          },
          {
            name: "Otros activos No financieros, corrientes",
            "ene-20": 6,
            "feb-20": 8,
            "mar-20": 10,
            "abr-20": 12,
            "may-20": 4,
            "jun-20": 2,
            "jul-20": 6,
            "ago-20": 14,
            "sep-20": 16,
            "oct-20": 22,
            "nov-20": 20,
            "dic-20": 18,
          },
        ];
      },
    },
    columns: {
      type: Array,
      default: function () {
        return [
          { name: "actions", label: "Actions", field: "", align: "center" },
          {
            name: "Estado de resultados",
            required: true,
            label: "Estado de resultados",
            align: "left",
            field: (row) => row.name,
            format: (val) => `${val}`,
            sortable: true,
          },
          {
            name: "ene-20",
            align: "center",
            label: "Ene-20",
            field: "ene-20",
            sortable: true,
          },
          {
            name: "feb-20",
            align: "center",
            label: "Feb-20",
            field: "feb-20",
            sortable: true,
          },
          {
            name: "mar-20",
            align: "center",
            label: "Mar-20",
            field: "mar-20",
            sortable: true,
          },
          {
            name: "abr-20",
            align: "center",
            label: "Abr-20",
            field: "abr-20",
            sortable: true,
          },
          {
            name: "may-20",
            align: "center",
            label: "May-20",
            field: "may-20",
            sortable: true,
          },
          {
            name: "jun-20",
            align: "center",
            label: "Jun-20",
            field: "jun-20",
            sortable: true,
          },
          {
            name: "jul-20",
            align: "center",
            label: "Jul-20",
            field: "jul-20",
            sortable: true,
          },
          {
            name: "ago-20",
            align: "center",
            label: "Ago-20",
            field: "ago-20",
            sortable: true,
          },
          {
            name: "sep-20",
            align: "center",
            label: "Sep-20",
            field: "sep-20",
            sortable: true,
          },
          {
            name: "oct-20",
            align: "center",
            label: "Oct-20",
            field: "oct-20",
            sortable: true,
          },
          {
            name: "nov-20",
            align: "center",
            label: "Nov-20",
            field: "nov-20",
            sortable: true,
          },
          {
            name: "dic-20",
            align: "center",
            label: "Dic-20",
            field: "dic-20",
            sortable: true,
          },
          //   field: (row) => row.name,
          //   format: (val) => `${val}`,
          //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        ];
      },
    },
    totalSection: {
      type: Array,
      default: function () {
        return [
          {
            totalTitle: "Total",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          },
          {
            totalTitle: "Total",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          },
          {
            totalTitle: "Total",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          },
        ];
      },
    },
    actions: {
      type: Object,
      default: function () {
        return {
          enable: true,
          edit: true,
          delete: false,
        };
      },
    },
  },
  setup(props) {
    const { rows, columns, totalSection, title, actions } = toRefs(props);
    const {
      state: { ui },
    } = useStore();

    const templateRows = rows.value;
    const templateColumns = columns.value;
    const tableTitle = title.value;
    const templateActions = actions;

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
    const selected = ref([]);

    return {
      tableTitle,
      total: totalSection.value,
      tableStyle,
      filter: ref(""),
      selected,
      templateColumns,
      templateRows,
      templateActions,
      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${templateRows.length}`;
      },
      editRow(row) {
        console.log("editRow: ", row);
      },
      deleteRow(row) {
        console.log("deleteRow: ", row);
      },
    };
  },
};
</script>
