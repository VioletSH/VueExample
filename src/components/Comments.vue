<template>
  <div class="hello">
      <h1>Comments in {{activePost}} Post</h1>
      <div class="comments-div">
          <div class="comment" v-for="comment in postComments">
              <div v-bind:style="{ background: setBg(comment.postId)}">
                <h3>{{comment.name}}</h3>
                <h6>{{comment.email}}</h6>
              </div>
              <p>{{comment.body}}</p>
          </div>
      </div>
  </div>  
</template>

<script>
export default {
  name: 'Comments',
  props: {
    activePost: {
        required:true
    }
  },
  data: function(){
      return{
          comments: [],
      };
  },
  created(){
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.comments = json)
  },
  computed:{
      postComments: function(){
          return this.comments.filter(
              function(c){
                  return c.postId == this.activePost;
              }, this
          );
      }
  },
  methods: {
    setBg: function (i) {
        return 'rgb(' + (10+Math.floor(i*2)) + ',' + (200-Math.floor(i*2,55)) + ',' + (255-Math.floor(i*2,55)-45) + ')';
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments-div{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.comment{
    max-width: 20rem;
    margin: 0.2rem;
    border-radius: 5px;
    border: 2px solid gray;
    padding-bottom: 0.5em;
}
.comment div{
    background: gray;
    height: max-content;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    color: white;
}
.comment h6, .comment h3{
    margin: 0;
}
.comment h6{
    justify-self: end;
    border-top: 1px solid white;
    background: rgba(0, 0, 0, 0.2);
    padding:0.1em;
}
</style>
