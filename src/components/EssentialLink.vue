<template>
  <!-- <q-item clickable tag="a" :to="to" :active="active" active-class="text-brand--blue"> -->
  <q-item
    clickable
    tag="a"
    :to="to"
    :active="active"
    class="rounded-full"
    active-class="text-brand--blue bg-gray-700 "
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-gray-100">{{ title }}</q-item-label>
      <q-item-label class="text-gray-100" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    to: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {
      active: ref(true),
    };
  },
});
</script>
