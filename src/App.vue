<template>
  <component :is="layout">
    <router-view :key="$route.path" />
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
};
</script>
