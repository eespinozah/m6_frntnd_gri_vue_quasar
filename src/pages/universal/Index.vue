<template>
  <div class="h-full">

    <Title text="Estandares Universales" icon="public" />

    <q-toolbar class="text-gray-400">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          class="text-brand--blue"
          label="Home"
          icon="home"
          to="/"
        />
        <q-breadcrumbs-el icon="public" label="Universales" />
      </q-breadcrumbs>
    </q-toolbar>
    <div
      class="
        grid
        xs:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-6
        my-6
      "
    >
      <IconTitleCaptionCard
        v-for="card in selectCardData"
        :key="card"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import IconTitleCaptionCard from "../../components/cards/IconTitleCaptionCard.vue";
import Title from "../../components/text/Title.vue";

export default {
  components: {
    IconTitleCaptionCard,
    Title,
  },
  setup() {
    return {
      selectCardData: [
        {
          title: "Nombre de la organización",
          caption: "102-1",
        },
        {
          title: "Actividades, marcas, productos y servicios",
          caption: "102-2",
        },
        {
          title: "Ubicación de la sede",
          caption: "102-3",
        },
        {
          title: "Ubicación de las operaciones",
          caption: "102-4",
        },
        {
          title: "Propiedad y forma jurídica",
          caption: "102-5",
        },
        {
          title: "Mercados servidos",
          caption: "102-6",
        },
        {
          title: "Tamaño de la organización",
          caption: "102-7",
        },
        {
          title: " Información sobre empleados y otros trabajadores ",
          caption: "102-8",
        },
      ],
    };
  },
};
</script>
