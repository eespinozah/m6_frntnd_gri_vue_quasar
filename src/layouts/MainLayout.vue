<template>
  <!-- <q-layout view="lHh lpR fFf" class="bg-gray-200"> -->
  <q-layout view="lhh lpR lFf" class="overflow-hidden ">
    <div class="transition duration-500 ease-in-out" :class="layoutStyle">
      <q-header
        class="
          bg-transparent
          px-4
          pt-4
          transition
          duration-500
          ease-in-out
          mt-4
        "
        :class="headerStyle"
      >
        <q-toolbar class="flex justify-between align-center">
          <q-btn
            flat
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            class="transition duration-500 ease-in-out bg-transparent"
            :class="buttonStyle"
          />
          <!-- <q-btn flat icon="search" /> -->

          <!-- <q-btn flat icon="pending_actions" /> -->
          <!-- <q-btn flat icon="contact_support" /> -->
          <div>
            <div class="flex items-center text-gray-500">
              <p class="text-4xl font-bold">GRI</p>
              <q-icon class="text-4xl ml-4" name="travel_explore" />
            </div>
            <p class="font-semibold text-gray-400">
              Global Reporting Initiative
            </p>
          </div>

          <div class="">
            <q-btn-dropdown
              :class="buttonStyle"
              class="transition duration-500 ease-in-out bg-transparent"
              flat
            >
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <q-icon name="settings" />
                </div>
              </template>

              <q-list>
                <q-item clickable v-close-popup @click="toggleDark">
                  <q-item-section avatar>
                    <q-avatar class="text-brand--blue" :icon="modeIcon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-gray-500 font-medium">{{
                      modeIcon == "light_mode" ? "Light Mode" : "Dark Mode"
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="logOut">
                  <q-item-section avatar>
                    <q-avatar
                      class="text-brand--blue"
                      icon="power_settings_new"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-gray-500 font-medium"
                      >Cerrar sesión</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        :class="sideBarStlye"
        v-model="leftDrawerOpen"
        show-if-above
        class="rounded-3xl"
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :breakpoint="500"
      >
        <div class="h-8 flex justify-center items-center"></div>
        <q-list class="transition sidebar-list">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <div class="p-6 min-h-screen">
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    // caption: "pagina de inicio",
    icon: "home",
    to: "/home",
  },
  {
    title: "Estandares Universales",
    // caption: "100",
    icon: "public",
    to: "/universal",
  },
  {
    title: "Estandares Económicos",
    // caption: "200",
    icon: "savings",
    to: "/200",
  },
  {
    title: "Estandares Ambientales",
    // caption: "300",
    icon: "grass",
    to: "/300",
  },
  {
    title: "Estandares Sociales",
    // caption: "400",
    icon: "reduce_capacity",
    to: "/400",
  },
  {
    title: "Metricas ESG",
    // caption: "tablas y detalles",
    icon: "bar_chart",
    to: "/metricas",
  },
];

import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const store = useStore();
    const {
      state: { ui },
    } = useStore();

    // console.log("state", state.ui)
    // console.log("component store", store);

    const leftDrawerOpen = ref(false);

    const modeIcon = computed(() => {
      return ui.lightMode ? "dark_mode" : "light_mode";
    });

    const headerStyle = computed(() => {
      return {
        "bg-gray-200": ui.lightMode,
        "text-gray-100": ui.darkMode,
        "text-gray-500": ui.lightMode,
      };
    });

    const layoutStyle = computed(() => {
      return {
        "bg-gray-200": ui.lightMode,
        "bg-layout-dark": ui.darkMode,
      };
    });

    const buttonStyle = computed(() => {
      return {
        "bg-gray-100": ui.lightMode,
        "text-gray-500": ui.lightMode,
        "text-gray-100": ui.darkMode,
      };
    });

    const sideBarStlye = computed(() => {
      return {
        "light-bar": ui.lightMode,
        "dark-bar": ui.darkMode,
      };
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      miniState: ref(true),
      modeIcon,
      headerStyle,
      layoutStyle,
      buttonStyle,
      sideBarStlye,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDark() {
        store.dispatch("ui/toggleDark");
      },
      logOut() {
        store.dispatch("gri/LOG_OUT");
      },
    };
  },
});
</script>

<style lang="scss">
.sidebar {
  transition: 0.3s;
}
.dark-bar:hover {
  background: rgba(39, 41, 61, 0.2);
  backdrop-filter: blur(8px); // This be the blur
}
.light-bar:hover {
  // background: linear-gradient(0deg, #0098f0, #00f2c3);
  // background: linear-gradient(0deg, #005fa6, #00afe1); // m-risk
  // background: linear-gradient(0deg, #075985, #0ea5e9);
  // background: linear-gradient(0deg, #ff6491, #ff8d72);
  // background-image: linear-gradient(
  //   0deg,
  //   rgba(38, 198, 218, 0.8),
  //   rgba(38, 198, 218, 0.8)
  // ); // transparent

  background: linear-gradient(0deg, #0ea5e9, #38bdf8);
  backdrop-filter: blur(8px); // This be the blur

  color: white;
}

.q-drawer {
  background: transparent;
  color: gray;
}

.q-drawer.q-drawer--left.q-drawer--mini.fixed.q-drawer--on-top {
  transition-duration: 0.6s;
  transition-delay: 0.2s;
}

.q-btn {
  border-radius: 100px !important;
}

.bg-brand-red {
  background: linear-gradient(0deg, #ff6491, #ff8d72);
}

// body.desktop .q-focus-helper {
//   transition: background-color 300ms cubic-bezier(0.25, 0.8, 0.5, 1) 0s, opacity 0s cubic-bezier(0.25, 0.8, 0.5, 1);
// }

aside {
  // margin: 16px auto 0px;
}

.rounded-b-header {
  border-radius: 0 0 50px 50px;
}

.bg-card-dark {
  background: #27293d;
}

.bg-layout-dark {
  background: linear-gradient(#1e1e2f, #1e1e24);
}

.bg-layout-light {
  background: #f8f9fe;
}

// scroll bar style

/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}

::-webkit-scrollbar:hover {
}

/* Track */
::-webkit-scrollbar-track {
  // background: #27293d;
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  background: #374151;

  border-radius: 100px;
  cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(0deg, #0ea5e9, #38bdf8);

  cursor: pointer;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
