<template>
  <div class="home">
    <h1>Posts list</h1>
    <Posts msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'

export default {
  name: 'home',
  components: {
    Posts
  }
}
</script>
