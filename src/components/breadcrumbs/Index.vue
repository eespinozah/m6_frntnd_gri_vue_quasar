<template>
  <div>
    <q-toolbar class="text-gray-400">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          v-for="link in links.previousLinks"
          :key="link"
          class="text-brand--blue"
          :label="link.name"
          :icon="link.icon"
          :to="link.to"
        />

        <q-breadcrumbs-el
          :icon="links.currentLink.icon"
          :label="links.currentLink.name"
        />
      </q-breadcrumbs>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      default: function () {
        return {
          previousLinks: [
            {
              name: "Home",
              icon: "home",
              to: "/",
            },
          ],
          currentLink: {
            name: "current",
            icon: "widgets",
          },
        };
      },
    },
  },
};
</script>
