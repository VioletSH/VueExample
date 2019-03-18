<template>
  <div class="hello">
      <div class="posts-div">
          <div class="post" v-for="post in posts">
              <router-link :to="{ path: '/Comments', query: { activePost: post.id }}" tag="div" v-bind:style="{ background: setBg(post.id)}">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
              </router-link>
          </div>
      </div>
  </div>  
</template>

<script>
export default {
  name: 'Posts',
  props: {
  },
  data: function(){
      return{
          posts: [],
      };
  },
  created(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.posts = json)
  },
  methods: {
    setBg: function (i) {
        return 'rgba(' + (+Math.floor(i*2)) + ',' + (200-Math.floor(i*2,55)) + ',' + (255-Math.floor(i*2,55)-45) + ',0.2)';
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts-div{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
}
.post{
    transition: .25s
}
.post:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.post div{
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
}

</style>
