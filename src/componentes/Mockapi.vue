<template>

  <section class="src-componentes-http-client">
    <div class="jumbotron">
      <h2>Mockapi</h2>
      <hr>
      <hr>
      <br>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir Axios</button>

       <button class="btn btn-danger my-3 mr-3" @click="posts = []">Limpiar tabla</button>
      <br>

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Mail</th>
          </tr>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.nombre }}</td>
            <td>{{ post.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center mt-5">No hay datos por cargar</h4>
      
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://63558817483f5d2df3b63473.mockapi.io/usuarios',
        posts : []
      }
    },
    methods: {
      async getPostsAxios() {
        
        try {
          let respuesta = await this.axios(this.url)
          this.posts = respuesta.data
        }
        catch(error) { console.error(error) } 

      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-http-client {

  }

  .jumbotron {
    background-color: teal;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

</style>
