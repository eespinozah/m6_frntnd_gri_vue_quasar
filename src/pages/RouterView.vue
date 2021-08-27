<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
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
