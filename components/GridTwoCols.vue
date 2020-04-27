<template>
  <div class="grid-list-2">
    <div v-for="(link, link_index) in links"
      :key="`link-${link_index}`"
      class="link-item">
      <a :href="link.url" target="_blank">
        <img :src="link.pictureUrl" :alt="link.title">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    links () {
      return this.$store.state.link.posts.data
    }
  }
}
</script>