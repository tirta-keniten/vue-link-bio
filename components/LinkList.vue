<template>
  <div class="link-list">
    <div v-for="(link, link_index) in links"
      :key="`link-${link_index}`"
      class="link-item">
      <h3><a :href="link.url" target="_blank">{{ link.title }} {{ env }}</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    links () {
      return this.$store.state.link.all
    }
  }
}
</script>