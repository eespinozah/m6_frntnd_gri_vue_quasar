<template>
  <q-splitter v-model="splitterModel" horizontal>
    <template v-slot:before>
      <q-tabs v-model="tab" class="text-gray-500">
        <q-tab
          v-for="tab in splitter.tabs"
          :key="tab.name"
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
        />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel
          v-for="panel in splitter.tabsPanel"
          :key="panel.name"
          :name="panel.name"
        >
          <slot :name="panel.slotName" />
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

<script>
import { ref, toRefs } from "vue";

export default {
  props: {
    config: {
      type: Object,
      default: function () {
        return {
          tabs: [
            {
              name: "sample",
              icon: "person",
              label: "Sample",
            },
          ],
          tabsPanel: [
            {
              name: "sample",
              slotName: "sample",
            },
          ],
        };
      },
    },
  },
  setup(props) {
    const { config } = toRefs(props);
    const { tabs } = config.value;
    const tab = ref(tabs[0]["name"]);

    return {
      splitter: config,
      splitterModel: ref(10),
      tab,
    };
  },
};
</script>
