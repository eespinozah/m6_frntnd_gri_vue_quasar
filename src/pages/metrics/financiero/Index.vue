<template>
  <div>
    <BreadCrumbs :links="breadCrumbsLinks" />
    <Title text="Formato Estandar De Balance" icon="insights" />
    <div class="grid lg:grid-cols-4 gap-6 px-6 mt-10">
      <div class="flex">
        <q-select
          class="text-gray-200 w-3/4"
          v-model="year"
          :options="options"
          label="Año"
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-btn
          @click="getTables"
          flat
          icon="search"
          aria-label="search"
          class="
            transition
            duration-500
            ease-in-out
            bg-transparent
            text-gray-500
            w-1/4
          "
        />
      </div>
    </div>

    <div>
      <div
        v-if="!mainView"
        class="
          mt-10
          w-full
          flex
          justify-center
          items-center
          h-72
          flex-col
          text-gray-500
        "
      >
        <q-icon name="ads_click" class="text-7xl mb-4" />

        <p class="text-xl">Selecciona el Año <q-icon name="event" /> y</p>

        <p class="text-xl">Presiona el Botón Buscar <q-icon name="search" /></p>
      </div>
    </div>

    <div v-if="mainView">
      <section
        v-for="section in pageTree.main.section"
        :key="section.id"
        color="cyan-12"
      >
        <div class="grid grid-cols-1 gap-6 my-6 px-4">
          <CardWrapper
            class="p-4"
            v-for="(table, index) in section.tables"
            :key="`tablaFinanciero_${index}`"
          >
            <Table
              :title="table.name"
              :rows="table.rows"
              :columns="table.columns"
              :totalSection="table.totalSection"
              :actions="table.actions"
            />
          </CardWrapper>
        </div>

        <div class="px-4 mb-10">
          <ResumeTable :info="section.resumeTable.info" />
        </div>
        <div class="text-center text-gray-500">
          <q-icon name="insights" class="icon p-4" style="font-size: 44px" />
        </div>
      </section>
      <div class="grid grid-cols-1 gap-6 my-6 px-4">
        <CardWrapper class="p-4">
          <CrudTableMultipleTotal
            :rows="pageTree.multiTotal.rows"
            :title="pageTree.multiTotal.title"
            :columns="pageTree.multiTotal.columns"
            :totalSection="pageTree.multiTotal.totalSection"
          />
        </CardWrapper>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createFullyearRows,
  createFullyearCols,
  createMultiTotalTables,
} from "../../../utilities/createTable.js";
import { ref, onMounted } from "vue";
import Title from "../../../components/text/Title.vue";
import Table from "../../../components/tables/StandarCrudTable.vue";
import CardWrapper from "../../../components/cards/CardWrapper.vue";
import ResumeTable from "../../../components/tables/ResumeTable.vue";
import BreadCrumbs from "../../../components/breadcrumbs/Index.vue";
import CrudTableMultipleTotal from "../../../components/tables/CrudTableMultipleTotal.vue";
import { useStore } from "vuex";

const tables = {
  actives: [
    {
      title: "Activos Corrientes",
      totalTitle: "Total Activos Corrientes",
      rows: [
        "Efectivo y Equivalentes al Efectivo",
        "Otros activos financieros, corrientes",
        "Otros activos No financieros, corrientes",
        "Deudores comerciales y otras cuentas por cobrar, corrientes",
        "Cuentas por Cobrar a Entidades Relacionadas, corrientes",
        "Inventarios",
        "Activos Biológicos, corrientes",
        "Activos por impuestos, corrientes",
        "Activos no corrientes mantenidos para la venta",
        "Activos no corrientes mantenidos para distribuir a los propietarios",
      ],
    },
    {
      title: "Activos No Corrientes",
      totalTitle: "Total Activos No Corrientes",
      rows: [
        "Otros activos financieros, no corrientes",
        "Otros activos no financieros, no corrientes",
        "Derechos por cobrar, no corrientes",
        "Cuentas por Cobrar a Entidades Relacionadas, no corrientes",
        "Inversiones contabilizadas utilizando el método de la participación",
        "Activos intangibles distintos de la plusvalía",
        "Plusvalía",
        "Propiedades, Planta y Equipo",
        "Activos biológicos, no corrientes",
        "Propiedad de inversión",
        "Activos por impuestos diferidos",
      ],
    },
  ],
  pasivesAndPatrimony: [
    {
      title: "Pasivos Corrientes",
      totalTitle: "Total Pasivos Corrientes",
      rows: [
        "Otros pasivos financieros, corrientes",
        "Cuentas comerciales y otras cuentas por pagar, corrientes",
        "Cuentas por Pagar a Entidades Relacionadas, corrientes",
        "Otras provisiones, corrientes",
        "Pasivos por Impuestos, corrientes",
        "Provisiones por beneficios a los empleados, corrientes",
        "Otros pasivos no financieros, corrientes",
        "Total de pasivos corrientes mantenidos para la venta",
        "Pasivos  como mantenidos para la venta",
      ],
    },
    {
      title: "Pasivos no corrientes",
      totalTitle: "Total Pasivos no corrientes",
      rows: [
        "Otros pasivos financieros, no corrientes",
        "Otras cuentas por pagar, no corrientes",
        "Cuentas por Pagar a Entidades Relacionadas, no corrientes",
        "Otras provisiones, no corrientes",
        "Pasivo por impuestos diferidos",
        "Provisiones por beneficios a los empleados, no corrientes",
        "Otros pasivos no financieros, no corrientes",
      ],
    },
    {
      title: "Patrimonio",
      totalTitle: "Total Patrimonio",
      rows: [
        "Capital emitido",
        "Ganancias (pérdidas) acumuladas",
        "Primas de emisión",
        "Acciones propias en cartera",
        "Otras participaciones en el patrimonio",
        "Otras reservas",
        "Patrimonio atribuible a los propietarios de la controladora",
        "Participaciones no controladoras",
      ],
    },
  ],
  resultState: {
    rows: [
      "Ingresos de actividades ordinarias",
      "Costo de ventas",
      "Otros ingresos, por función",
      "Otros egresos, por función",
      "Costos de distribución",
      "Gasto de administración",
      "Otras ganancias (pérdidas)",
      "Ingresos financieros",
      "Costos financieros",
      "Participación en las ganancias (pérdidas) de asociadas",
      "Diferencias de cambio",
      "Resultados por unidades de reajuste",
      "Gasto por impuestos a las ganancias",
    ],
  },
};

const { actives, pasivesAndPatrimony, resultState } = tables;

let activesTable = createMultiTotalTables(actives);
let pasivesAndPatrimonyTables = createMultiTotalTables(pasivesAndPatrimony);

const multiTotalTable = {
  rows: createFullyearRows(resultState.rows),
  title: "Estado de Resultados",
  columns: createFullyearCols("Estado de resultados"),
  totalSection: [
    {
      title: "Ganancia bruta",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      title: "Ganancia (pérdida), antes de impuestos",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      title: "Ganancia (pérdida) procedente de operaciones continuadas",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const pageTree = {
  main: {
    section: [
      {
        id: "uuid-actives",
        title: "title",
        icon: "person",
        tables: activesTable,
        resumeTable: {
          info: {
            title: "Total Activos",
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
          },
        },
      },
      {
        id: "uuid-pasives-patrimony",
        title: "title",
        icon: "person",
        tables: pasivesAndPatrimonyTables,
        resumeTable: {
          info: {
            title: "Total Pasivos y Patrimonio",
            subTitle: "Resumen año",
            value: "2020",
            icon: "account_balance",
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
          },
        },
      },
    ],
  },
  multiTotal: { ...multiTotalTable },
};

let mainView = ref(false);
let year = ref(null);

const getTables = () => {
  mainView.value = true;
};

export default {
  components: {
    Title,
    Table,
    CardWrapper,
    ResumeTable,
    BreadCrumbs,
    CrudTableMultipleTotal,
  },
  setup() {
    const store = useStore();
    const {
      state: { gri },
    } = useStore();

    onMounted(async () => {
      const response = await store.dispatch("gri/GET_ME");
      console.log("response: ", response);
    });

    return {
      getTables,
      me: gri.global.me,
      mainView,
      pageTree,
      activesTable,
      pasivesAndPatrimonyTables,
      breadCrumbsLinks: {
        previousLinks: [
          {
            name: "Home",
            icon: "home",
            to: "/",
          },
          {
            name: "Metricas",
            icon: "bar_chart",
            to: "/metricas",
          },
        ],
        currentLink: {
          name: "Financiero",
          icon: "savings",
        },
      },
      year,
      options: ["2018", "2019", "2020", "2021"],
    };
  },
};
</script>

<style lang="scss">
.q-field--focused .q-field__label {
  color: #38bdf8;
}

.q-field__label,
.q-field__prepend .q-icon,
.q-field__native span,
.q-field__append i {
  color: #6b7280;
}

.q-field--standard .q-field__control:after {
  background: #38bdf8;
}

.q-field--standard .q-field__control:hover:before {
  border-color: #38bdf8;
}

.q-menu {
  color: #6b7280;
  border-radius: 0 0 15px 15px;
}
</style>
