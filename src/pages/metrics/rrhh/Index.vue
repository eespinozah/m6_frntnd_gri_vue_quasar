<template>
  <div>
    <q-toolbar class="text-gray-400">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          class="text-brand--blue"
          label="Home"
          icon="home"
          to="/home"
        />
        <q-breadcrumbs-el
          class="text-brand--blue"
          label="Metricas"
          icon="bar_chart"
          to="/metricas"
        />
        <q-breadcrumbs-el icon="groups" label="Recursos Humanos" />
      </q-breadcrumbs>
    </q-toolbar>
    <Title text="Recursos Humanos" icon="groups" />
    <div class="grid grid-cols-1 gap-6 my-6 px-4">
      <CardWrapper class="p-4">
        <Splitter :config="splitterConfig">
          <template v-slot:sample>
            <div class="text-center text-gray-500 mt-10">
              <q-icon name="public" class="icon" style="font-size: 44px" />
            </div>
            <div class="flex justify-center items-center p-2">
              <p class="text-semibold text-xl capitalize text-gray-500 p-2">
                por Región y Genero con Contrato Laboral
                <b class="text-yellow-500 border-b-2 border-yellow-500"
                  >Permanente</b
                >
              </p>
            </div>

            <div v-for="table in totalTables" :key="table">
              <Table
                :title="table.name"
                :rows="table.rows"
                :columns="table.columns"
                :totalSection="table.totalSection"
                :actions="table.actions"
                class="mb-10"
              />
              <hr class="my-10" />
            </div>
            <div class="text-center text-gray-500">
              <q-icon name="public" class="icon" style="font-size: 44px" />
            </div>
            <div class="flex justify-center items-center p-2">
              <p class="text-semibold text-xl capitalize text-gray-500 p-2">
                por Región con Contrato Laboral
                <b class="text-green-500 border-b-2 border-green-500"
                  >Temporal</b
                >
              </p>
            </div>
            <div v-for="table in totalTables" :key="table">
              <Table
                :title="table.name"
                :rows="table.rows"
                :columns="table.columns"
                :totalSection="table.totalSection"
                :actions="table.actions"
                class="mb-10"
              />
              <hr class="my-10" />
            </div>
          </template>
        </Splitter>
      </CardWrapper>
    </div>
  </div>
</template>

<script>
import Title from "../../../components/text/Title.vue";
import {
  createTotalTable,
  createMultiTotalTables,
} from "../../../utilities/createTable.js";
import Table from "../../../components/tables/StandarCrudTable.vue";
import CardWrapper from "../../../components/cards/CardWrapper.vue";
import Splitter from "../../../components/splitter/Splitter.vue";

const defaultCols = [
  "ene-20",
  "feb-20",
  "mar-20",
  "abr-20",
  "may-20",
  "jun-20",
  "jul-20",
  "ago-20",
  "sep-20",
  "oct-20",
  "nov-20",
  "dic-20",
  "total 2020",
  "objetivo 2020",
];

const defaultRows = {
  "ene-20": 0,
  "feb-20": 0,
  "mar-20": 0,
  "abr-20": 0,
  "may-20": 0,
  "jun-20": 0,
  "jul-20": 0,
  "ago-20": 0,
  "sep-20": 0,
  "oct-20": 0,
  "nov-20": 0,
  "dic-20": 0,
  "total 2020": 0,
  "objetivo 2020": 0,
};

const tables = [
  {
    title: "Total Hombres",
    name: "pais",
    totalTitle: "Total",
    rows: [
      "Chile",
      "Argentina",
      "Perú",
      "Colombia",
      "Venezuela",
      "Brasil",
      "Otro",
    ],
    defaultCols,
    defaultRows,
  },
  {
    title: "Total Mujeres",
    name: "pais",
    totalTitle: "Total",
    rows: [
      "Chile",
      "Argentina",
      "Perú",
      "Colombia",
      "Venezuela",
      "Brasil",
      "Otro",
    ],
    defaultCols,
    defaultRows,
  },
  {
    title: "Total Hombres y Mujeres",
    name: "pais",
    totalTitle: "Total",
    rows: [
      "Chile",
      "Argentina",
      "Perú",
      "Colombia",
      "Venezuela",
      "Brasil",
      "Otro",
    ],
    defaultCols,
    defaultRows,
  },
];

let totalTables = createMultiTotalTables(tables);
const people = totalTables[0];

console.log("people.rows", people);

const splitterConfig = {
  tabs: [
    {
      name: "sample",
      icon: "engineering",
      label: "Tipos de contratos",
    },
    {
      name: "sample2",
      icon: "person_add_alt",
      label: "Contrataciones",
    },
    {
      name: "sample3",
      icon: "hail",
      label: "Sindicalizados",
    },
  ],
  tabsPanel: [
    {
      name: "sample",
      slotName: "sample",
    },
  ],
};

export default {
  components: {
    Title,
    Table,
    CardWrapper,
    Splitter,
  },

  setup() {
    return {
      totalTables,
      people,
      splitterConfig,
    };
  },
};
</script>

<style>
.q-tab-panels {
  background: transparent;
}

.q-tab__indicator {
  color: #38bdf8;
}
</style>
