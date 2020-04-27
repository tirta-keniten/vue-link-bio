<template>
  <div class="container mx-auto">
    <div class="profile-container max-w-sm mx-auto">
      <header>
        <Logo :url="logo_url" />
        <h1 class="text-center">
          <a :href="`https://instagram.com/${ig_account}`">@{{ ig_account }}</a>
        </h1>
        <p class="text-center text-gray-500 mt-4"><small>Tap image to view details</small></p>
      </header>
      <GridTwoCols />
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    ig_account () {
      return this.$route.params.ig_account
    },
    logo_url () {
      return this.$store.state.link.setting.displayPictureUrl
    }
  },

  created () {
    this.$store.dispatch('link/getLinks', this.ig_account)
  }
}
</script>