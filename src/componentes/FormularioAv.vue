<template>

  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <h2>Formulario </h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <!-- ---------------------------------- -->
        <!--            CAMPO NOMBRE            -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre" 
            name="nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          >
          <!-- mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe tener al menos entre {{ nombreMinLength }} y {{ nombreMaxLength }}  caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>

          </field-messages>
        </validate>
    
        <br>

        <!-- ---------------------------------- -->
        <!--             CAMPO EDAD             -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad" 
            name="edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          <!-- mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <br>

        <!-- ---------------------------------- -->
        <!--            CAMPO EMAIL             -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.email" 
            name="email"
            required
          >
          <!-- mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>


        <button class="btn btn-success my-3  mr-3"  :disabled="formState.$invalid" >Enviar</button>
        <br>
        <br>
      </vue-form>    
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        nombreMinLength: 5,
        nombreMaxLength: 15,
        edadMin: 18,
        edadMax: 120,
        datosUsuario:[],
        enviado: false,
        
      }
    },
    methods: {
     agregarData(form){
        this.datosUsuario.push(
          {
            nombre: form.nombre,
            edad: form.edad,
            email: form.email,
          }
        );
        
     },
      getInitialData() {
        return {
          nombre: null,
          edad: null,
          email: null
        }
    },
    enviar() {
      this.enviado = true;
      this.$store.dispatch("agregarUsuario", {...this.formData});
      this.limpiarForm();

    },

     limpiarForm() {
      this.formData = this.getInitialData();
      this.formState._reset();
    },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">


  .jumbotron {
    background-color: rgb(34, 30, 97);
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
