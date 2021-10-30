<template>
  <div>
    <CRow>
      <CCol col>
        <CCard>
          <CCardHeader>
            <strong> Entrada - Nuevo</strong>
          </CCardHeader>
          <CCardBody>
            <b-form id="Form" @submit.prevent="Validate">
              <b-row>

                      <b-col md="6">
                        <b-form-group>
                          <label>Proveedor: <span  class="text-info link">Nuevo</span></label>
                          <v-select placeholder="Seleccione un proveedor" class="w-100" :filterable="false" label="name" v-model="provider"  :options="providers"></v-select>
                          <small v-if="errors.id_provider" class="form-text text-danger" >Selccione un proveedor</small>
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label="Tipo de Operación :">
                          <b-form-select ref="type_operation" v-model="input.type_operation" :options="type_operations"></b-form-select>
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label=".">
                           <CButton block color="primary" @click="modalProducts" >Productos (F2)</CButton>

                          <!-- <b-button class="form-control btn" variant="primary"  ><i class="fas fa-cart-plus"></i> Productos (F2)</b-button> -->
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label="Comprobante :">
                          <b-form-select  ref="type_invoice" v-model="input.type_invoice" :options="type_invoices"></b-form-select>
                        </b-form-group>
                      </b-col>

                      <b-col md="3" v-if="input.type_invoice != 'NE'">
                        <b-form-group label="Serie :">
                          <b-form-input type="text" ref="serie" v-model="input.serie"></b-form-input>
                          <small v-if="errors.serie"  class="form-text text-danger" >Ingrese una serie de 4 digitos</small>
                        </b-form-group>
                      </b-col>

                      <b-col md="3" v-if="input.type_invoice == 'NE'">
                        <b-form-group label="Serie :">
                          <b-form-select  ref="id_serie" v-model="input.id_serie" :options="series"></b-form-select>
                          <small v-if="errors.id_serie"  class="form-text text-danger" >Seleccione una serie</small>
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label="Numero :">
                          <b-form-input :readonly="input.type_invoice == 'NE'" type="text" ref="number"  v-model="input.number"></b-form-input>
                          <small v-if="errors.number" class="form-text text-danger">Ingrese un numero de 8 digitos</small>
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label="Fecha Emision:">
                          <b-form-input type="date" ref="broadcast_date" v-model="input.broadcast_date"></b-form-input>
                          <small v-if="errors.broadcast_date" class="form-text text-danger">Seleccione una fecha</small>
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group label="Almacen">
                          <b-form-select ref="id_warehouse" v-model="input.id_warehouse" :options="warehouses"></b-form-select>
                          <small v-if="errors.id_warehouse"  class="form-text text-danger">Seleccione un almacen</small>
                        </b-form-group>
                      </b-col>
     

                      <b-col md="9">
                        <b-form-group label="Observación:">
                          <b-form-input rows="1"  v-model="input.observation" max-rows="3"></b-form-input>
                        </b-form-group>
                      </b-col>

                      <!-- Detalle Entrada -->
                      <cInputDetail :type_operation="input.type_operation"/>
                      <small v-if="errors.input_detail" class="col-md-12 form-text text-center text-danger">Agregue productos</small>
                      <!-- Detalle Entrada -->

                    

                  </b-row>

              <b-row  class="justify-content-md-center mt-3">
               
                <b-col md="3">
                 <CButton block color="primary" type="submit" >Guardar (F4)</CButton>

                  <!-- <b-button type="submit" class="form-control text-white" variant="primary" ><i class="fas fa-save"></i> Guardar (F4)</b-button> -->
                </b-col>
              </b-row>
            </b-form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <!-- Modal Products -->
    <ModalProducts />
  

    <!-- Modal Clients -->
    <ModalProviders />
    <!-- Modal Clients -->
    <!-- <LoadingComponent :is-visible="isLoading"/> -->
    <Keypress key-event="keyup" :key-code="113"  />
    <Keypress key-event="keyup" :key-code="115"  />
    
  </div>
</template>

<script>


import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import "vue-select/src/scss/vue-select.scss";

const axios = require("axios").default;
const Swal = require("sweetalert2");
const je = require("json-encrypt");
var moment = require("moment");
import EventBus from '@/assets/js/EventBus';
import converter from "@/assets/js/NumberToLetters";
import { mapState,mapActions } from "vuex";


// components
import ModalProviders from '@/views/components/ModalProvider' 
//import ModalTransfers from './components/ModalTransfers'
import cInputDetail from './components/InputDetail'
//import LoadingComponent from './../pages/Loading'
import ModalProducts from './components/ModalProduct'



export default {
    name: "EntradaAdd",
    components:{
      ModalProducts,
      cInputDetail,      
      ModalProviders,
      vSelect,     
      Keypress: () => import('vue-keypress'),
    },
    data(){
        return{ 
            module: 'Input',
            isLoading:false,
            input: {
                id_input:'',
                id_serie:'',
                id_provider:'',
                id_warehouse:'',
                id_establishment:'',
                id_user:'',
                linkages:[],
                type_operation:'02',
                type_invoice:'09',
                serie:'',
                number:'',
                broadcast_date:moment(new Date()).local().format("YYYY-MM-DD"),
                arrival_date:moment(new Date()).local().format("YYYY-MM-DD"),
                observation:'',
                state:'1',

                carrier_id_provider: '',
                carrier_type_invoice: '09',
                carrier_serie: '',
                carrier_number: '',
                carrier_observation: '',
                state: 1,
            },        
            
            establishment: {},
            series: [],
            warehouses: [],
            providers: [],
            provider:null,
            carrier_providers: [],
            carrier_provider:null,
            type_operations:[
                     { value :"01", text: 'VENTA NACIONAL'},
                    { value :"09", text: 'DONACIÓN'},         
                    { value :"17", text: 'EXPORTACIÓN'},
                    { value :"25", text: 'SALIDA POR DEVOLUCIÓN AL PROVEEDOR'},
                    { value :"28", text: 'AJUSTE POR DIFERENCIA DE INVENTARIO'},
                    { value :"34", text: 'PUBLICIDAD'},
                    { value :"36", text: 'RETIRO PARA ENTREGA A TRABAJADORES'},
                    { value :"38", text: 'RETIRO POR SUSTITUCIÓN DE BIEN SINIESTRADO'},
                    { value :"94", text: 'OTROS'},   
            ],
            type_invoices:[
                {value: "01", text : "Factura"},
                {value: "03", text : "Boleta de Venta"},                
                {value: "00", text : "Otros"},
            ],
            
            //errors
            errors: {
                id_provider: false,
                id_serie: false,
                id_warehouse: false,
                type_operation:false,
                type_invoice:false,
                serie:false,
                number:false,
                broadcast_date:false,
                departure_date:false,
                input_detail:false,
            },
            validate: false,
            linkages:[],
         }
    },
     computed: {     
      ...mapState('Input',['input_detail']),
   
  },
    methods:{
     SearchProvider(search, loading) {  
            let me = this;
            let url = this.url_base + "search-providers/" + search;
            if (search !== "") {
            loading(true);
            axios({
                method: "GET",
                url: url,
            }).then(function (response) {
                    me.providers = response.data.result;
                   // loading(false);
            })
            }    
        },
        modalProducts() {
          EventBus.$emit('ModalProductsShow',2);
        }
    }

}
</script>

<style>

</style>