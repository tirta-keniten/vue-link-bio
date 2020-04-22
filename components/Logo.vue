<template>
  <div class="img-profile-wrap">
    <img v-if="url !== null" src="url" class="mx-auto img-profile">
    <div v-else>
      <svg class="mx-auto img-profile" width="77px" height="77px" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="50%"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String | null,
      default: null
    }
  }
}
</script>

<style>
.img-profile {
  max-width: 77px;
  padding: 3px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
</style>