<template>
   <div>
    <CRow>
      <CCol col>
        <CCard>
          <CCardHeader>
            <strong>  Salida - Listar</strong>
          </CCardHeader>
          <CCardBody>

            <b-row>
              <b-col sm="12" md="5">
                <b-form-group>
                  <label>Proveedor: </label>
                  <v-select  placeholder="Todos" class="w-100" :filterable="false" label="name" v-model="provider"   :options="providers"></v-select>
                </b-form-group>
              </b-col>

              <b-col sm="12" md="2">
                <b-form-group label="Desde :">
                  <b-form-input  class="text-center" :max="to" type="date"  ref="to" v-model="from"></b-form-input>
                  <small v-if="errors.from" class="form-text text-danger" >Selccione una fecha</small>
                </b-form-group>
              </b-col>

              <b-col sm="12" md="2">
                <b-form-group label="Hasta :">
                  <b-form-input  class="text-center" :min="from" type="date"  ref="from" v-model="to"></b-form-input>
                  <small v-if="errors.to" class="form-text text-danger" >Selccione una fecha</small>
                </b-form-group>
              </b-col>
              
              <b-col sm="6" md="2">
                <b-form-group label=".">
                  <b-input-group>
                  <b-form-input v-model="search" class="form-control"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="primary"  ><b-icon icon="search"></b-icon></b-button>
                  </b-input-group-append>
                </b-input-group>
                </b-form-group>
              </b-col>
              <b-col sm="6" md="1">
                <b-form-group label="."> 
                  <b-link   class="btn form-control btn-primary"  :to="{ path: '/almacen/salida-nuevo' }" append >Nuevo </b-link>
                </b-form-group>
              </b-col>
            </b-row>

        

            <div class="table-responsive mt-3 height-table">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th width="3%" class="text-center">#</th>
                    <th width="10%" class="text-center">Fecha</th>
                    <th width="15%" class="text-center">Comprobante</th>
                    <th width="45%" class="text-center">Razón Social</th>
                    <th width="15%" class="text-center">Tipo Operación</th>
                    <th width="10%" class="text-center">Usuario</th>
                    <th width="5%" class="text-center">Estado</th>
                    <th width="7%" class="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody v-for="(item, it) in data_table" :key="item.id_input">
                  <tr>
                    <td class="text-center">{{ it + 1 }}</td>
                    <td class="text-center"> {{ item.broadcast_date }}</td>
                    <td class="text-center"> {{ CodeInvoice(item.type_invoice)+ ' '+item.serie+'-'+item.number }}</td>
                    <td class="text-left"> {{ item.provider_name + ' - '+item.provider_document_number }}</td>
                    <td class="text-left"> {{ NameOperationType(item.type_operation) }}</td>
                    <td class="text-left"> {{ item.user}} </td>
                    <td class="text-center">
                      <b-badge v-if="item.state == 1" variant="info">Pendiente</b-badge>
                      <b-badge v-if="item.state == 2" variant="success">Finalizado</b-badge>
                      <b-badge v-if="item.state == 0" variant="danger">Anulado</b-badge>
                    </td>
                    <td class="text-center">
                      <b-dropdown bloque size="sm" text="Acciones" right>
                        <b-dropdown-item  >Editar</b-dropdown-item>
                       
                     </b-dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <b-row class="mt-4">
              <b-col md="8">
                <b-pagination v-model="currentPage"  :total-rows="rows"  :per-page="perPage" align="center" ></b-pagination>
              </b-col>
              <b-col md="4 text-center">
                <p>Pagina Actual: {{ currentPage }}</p>
              </b-col>
            </b-row>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import "vue-select/src/scss/vue-select.scss";
const axios = require("axios").default;
const Swal = require("sweetalert2");
const je = require("json-encrypt");
import { mapState } from "vuex";

import CodeToName from "@/assets/js/CodeToName";
var moment = require("moment");
export default {
     components:{
      vSelect,
    },
    data(){
        return{
            module: 'Input',
            perPage: 15,
            currentPage: 1,
            rows: 0,
            search: "",
            data_table: [],
            id_provider:0,
            to:moment(new Date()).local().format("YYYY-MM-DD"),
            from:moment().subtract(30, 'days').local().format("YYYY-MM-DD"),
            search: "",
            providers: [],
            provider:null,
            errors:{
                to:false,
                from:false,
            }
        }
    },
    methods:{        
        fCodeInvoice(code) {
             return CodeToName.CodeInvoice(code);
        },
        NameOperationType(code) {
             return CodeToName.NameOperationType(code);
        }
    }
}
</script>

<style>

</style>