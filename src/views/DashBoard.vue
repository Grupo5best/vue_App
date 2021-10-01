<template>
  <div class="DashBoard">

   
            <br> <br>
              <div class="container izquierda">

      <h1>Inventario de bicicletas</h1>

      <button type="button" class="btn btn-primary"  @click.prevent="OpenMDLRegistro()" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Nueva bicicleta
      </button>
           
                  <br> <br>
                <table class="table table-dark table-striped">
                  <thead>
                      <tr>
                          <th scope="col">Referencia</th>
                          <th scope="col">Nombre bicicleta</th>
                          <th scope="col">Color</th>
                          <th scope="col">Tamaño</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Descripción </th>
                          <th scope="col">Stock </th>
                          <th scope="col">Imagen </th>
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
                  <td>{{ indice.descripcion }}</td>
                  <td>{{ indice.cantidad }}</td>
                  <td>     <img v-bind:src=" indice.url_img" width="250px" height="130px" /> 
                  <td>
                      <button data-bs-toggle="modal" @click.prevent="sendInfo(indice)"   data-bs-target="#mdlEditar" class="btn btn-warning">Editar </button>
                   
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
       <center><p>Formulario </p></center>


<form @submit.prevent="FunctionCrearBicicleta">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Referencia</label>
    <input type="text"  class="form-control"   v-model="Bicis.referencia" >
  </div>
  
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre de la bicicleta</label>
    <input type="text" class="form-control"  v-model="Bicis.nombre"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Color</label>
    <input type="text" class="form-control"  v-model="Bicis.color" >
  </div>
  
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Tamaño</label>
   
    <select class="form-select"  v-model="Bicis.tamaño">
      <option selected>Grande</option>  
      <option>Mediano</option>  
      <option>Pequeño</option>  
    </select>
  
  </div>

    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Precio</label>
    <input type="number" class="form-control"  v-model="Bicis.precio" >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
    <input type="number" class="form-control"  v-model="Bicis.cantidad"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Ingresa url imagen de la bicicleta</label>
    <input type="text" class="form-control"  v-model="Bicis.url_img"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Descripción </label>
  
    <textarea class="form-control" name="textarea" rows="3" cols="15"  v-model="Bicis.descripcion"></textarea>
  </div>

<button class="btn btn-success btn-block">Guardar bicicleta</button>
        
  </form>
</div>

    
    </div>
  </div>
</div>
     






 <!-- MODAL ACTUALIZAR REGISTRO  --> 
<div class="modal fade" id="mdlEditar" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >Actualizar registro</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <center><p>Formulario de actualización</p></center>
            

<form ref="form">

  <input type="text"  class="form-control"   v-model="Bicis._id" >
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Referencia</label>
    <input type="text"  class="form-control"   v-model="Bicis.referencia" >
  </div>
  
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre de la bicicleta</label>
    <input type="text" class="form-control"  v-model="Bicis.nombre"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Color</label>
    <input type="text" class="form-control"  v-model="Bicis.color" >
  </div>
  
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Tamaño</label>
   
    <select class="form-control"  v-model="Bicis.tamaño"  >
      <option>Grande</option>  
      <option>Mediano</option>  
      <option>Pequeño</option>  
    </select>
  
  </div>

    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Precio</label>
    <input type="number" class="form-control"  v-model="Bicis.precio" >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
    <input type="number" class="form-control"  v-model="Bicis.cantidad"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Ingresa url imagen de la bicicleta</label>
    <input type="text" class="form-control"  v-model="Bicis.url_img"  >
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Descripción </label>
  
    <textarea class="form-control" name="textarea" rows="3" cols="15"  v-model="Bicis.descripcion"></textarea>
  </div>

<button  v-on:click="FunctionActualizarBicicleta" class="btn btn-warning btn-block">Actualizar</button>
        
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
                 precio: '',
                 descripcion: '',
                 cantidad: '',
                 url_img: ''
                 ,id : ''
                },
            }
        },
         created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.ArrayBicicletas = res.data;
            })
        },
        methods: {
              sendInfo(item) {
               this.Bicis = item;
              },
              OpenMDLRegistro() {
                this.Bicis = '';
              },
              deleteBici(id){
                let apiURL = `http://localhost:4000/api/delete-bici/${id}`;
                let indexOfArrayItem = this.ArrayBicicletas.findIndex(i => i._id === id);
                if (window.confirm("Desea eliminar la bicicleta?")) {
                    axios.delete(apiURL).then(() => {
                        this.ArrayBicicletas.splice(indexOfArrayItem, 1);
                    })
                }
            },
            FunctionCrearBicicleta() {
                let apiURL = 'http://localhost:4000/api/create-bici';
                
                axios.post(apiURL, this.Bicis).then(() => {
      
                alert("Bicicleta añadida al inventario exitosamente");
                this.Bicis = '';
                location.reload()
                })
            },
            FunctionActualizarBicicleta() {
                let apiURL = 'http://localhost:4000/api/update-bici';
                
                axios.post(apiURL, this.Bicis).then(() => {
                alert("Bicicleta actualizada exitosamente");
                this.Bicis = '';
                location.reload()
             
                })
            }
        },
    
    }

</script>
