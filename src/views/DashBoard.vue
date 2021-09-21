<template>
  <div class="DashBoard">

   
            <br> <br>
              <div class="container izquierda">

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Registrar bicicleta
      </button>
           
                  <br> <br>
                <table class="table table-success table-striped">
                  <thead>
                      <tr>
                          <th scope="col">Referencia</th>
                          <th scope="col">Nombre bicicleta</th>
                          <th scope="col">Color</th>
                          <th scope="col">Tamaño</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                   <tr v-for="(indice, i) in ArrayBicicletas" :key="i">
                  <td>{{ indice.referencia }}</td>
                  <td>{{ indice.nombre }}</td>
                  <td>{{ indice.color }}</td>
                  <td>{{ indice.tamaño }}</td>
                  <td>{{ indice.precio }}</td>
                  <td>
                       <router-link :to="{name: 'edit', params: { id: indice._id }}" class="btn btn-success">Editar
                       </router-link>
                       <button @click.prevent="deleteBici(indice._id)" class="btn btn-danger">Eliminar</button>
                  </td>  
                  </tr>
              
                  </tbody>
                  </table>

              </div>

         
 <!-- MODAL REGISTRO --> 
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro de bicicletas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <center><p>Formulario de registro </p></center>


<form @submit.prevent="handleSubmitForm">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Referencia</label>
    <input type="text" class="form-control"   v-model="Bicis.referencia" placeholder="ABC001">
  </div>
  
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre de la bicicleta</label>
    <input type="text" class="form-control"  v-model="Bicis.nombre"  placeholder="Bici Nairo">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Color</label>
    <input type="text" class="form-control"  v-model="Bicis.color"  placeholder="Rojo">
  </div>
  
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Tamaño</label>
    <input type="text" class="form-control"  v-model="Bicis.tamaño"   placeholder="1">
  </div>

    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Precio</label>
    <input type="number" class="form-control"  v-model="Bicis.precio"  placeholder="00000">
  </div>

    
<button class="btn btn-danger btn-block">Crear</button>
        
  </form>



</div>



   
    
    </div>
  </div>
</div>
     




       
  </div>
</template>




<script>

import axios from "axios";

    export default {
        data() {
            return {
                 ArrayBicicletas: [],
                 Bicis: {
                 referencia: '',
                 nombre: '',
                 color: '',
                 tamaño: '',
                 precio: ''
                }
            }
        },
         created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.ArrayBicicletas = res.data;
            })
        },
        methods: {
        deleteBici(id){
                let apiURL = `http://localhost:4000/api/delete-bici/${id}`;
                let indexOfArrayItem = this.ArrayBicicletas.findIndex(i => i._id === id);

                if (window.confirm("Desea eliminar?")) {
                    axios.delete(apiURL).then(() => {
                        this.ArrayBicicletas.splice(indexOfArrayItem, 1);
                    })
                }
            },

            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-bici';
                
                axios.post(apiURL, this.Bicis).then(() => {
                  // HACER MENSAJITO DE OKEY XD
                location.reload();
                alert("Bici guardadxd");
                  this.Bicis = {
                    referencia: '',
                    nombre: '',
                    color: '',
                    tamaño: '',
                    precio: ''
                  }
                })
            }
        },
    
    }

</script>
