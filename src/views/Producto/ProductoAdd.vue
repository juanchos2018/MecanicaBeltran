<template>
  <div>
    <CRow>
      <CCol col>
        <CCard>
          <CCardHeader>
            <strong> Modulo de Producto - Nuevo</strong>
          </CCardHeader>
          <CCardBody>
            <b-form id="Form" @submit.prevent="Validate">
              <b-row>
                <b-col md="3">
                  <b-form-group>
                    <b-card-img
                      src="https://loisjeans.id/skin/frontend/base/default/images/catalog/product/placeholder/image.jpg"
                    ></b-card-img>
                  </b-form-group>
                  <b-form-group>
                    <b-form-file
                      @change="onFileChange"
                      v-model="photo"
                      placeholder="Seleccione un foto..."
                      drop-placeholder="Suelta la imagen aquí..."
                    ></b-form-file>
                    <small v-if="errors.photo" class="form-text text-danger"
                      >Seleccione un foto</small
                    >
                  </b-form-group>
                </b-col>

                <b-col md="9">
                  <b-tabs content-class="mt-3">
                    <b-tab title="Datos Principales" active>
                      <b-row>
                        <b-col md="3">
                          <b-form-group label="Codigo Originial:">
                            <b-form-input
                              type="text"
                              ref="code"
                              v-model="product.code"
                            ></b-form-input>
                            <small
                              v-if="errors.code"
                              class="form-text text-danger"
                              >Ingrese un código</small
                            >
                          </b-form-group>
                        </b-col>

                        <b-col md="3">
                          <b-form-group label="Marca V. :">
                            <b-form-select
                              v-model="product.id_brand"
                              :options="itemmarcas"
                            ></b-form-select>
                            <small
                              v-if="errors.id_brand"
                              class="form-text text-danger"
                              >Seleccione una marca</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="3">
                          <b-form-group label="Marca R. :">
                            <b-form-select
                              v-model="product.id_brand"
                              :options="itemmarcas"
                            ></b-form-select>
                            <small
                              v-if="errors.id_brand"
                              class="form-text text-danger"
                              >Seleccione una marca</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="3">
                          <b-form-group label="Numero:">
                            <b-form-input
                              type="text"
                              ref="code"
                              v-model="product.code"
                            ></b-form-input>
                            <small
                              v-if="errors.code"
                              class="form-text text-danger"
                              >Ingrese Numero</small
                            >
                          </b-form-group>
                        </b-col>

                        <b-col md="8">
                          <b-form-group label="Detalle:">
                            <b-form-input
                              type="text"
                              ref="name"
                              v-model="product.name"
                            ></b-form-input>
                            <small
                              v-if="errors.name"
                              class="form-text text-danger"
                              >Ingrese un nombre</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group label="Proveedor:">
                            <b-form-select
                              v-model="product.id_brand"
                              :options="itemmarcas"
                            ></b-form-select>
                            <small
                              v-if="errors.id_brand"
                              class="form-text text-danger"
                              >Seleccione una marca</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="2">
                          <b-form-group label="V.U. SIN IVA :">
                            <b-form-input
                              type="text"
                              ref="presentation"
                              v-model="product.presentation"
                            ></b-form-input>
                            <small
                              v-if="errors.presentation"
                              class="form-text text-danger"
                              >V. sin Iva</small
                            >
                          </b-form-group>
                        </b-col>

                        <b-col md="2">
                          <b-form-group label="12 %">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="2">
                          <b-form-group label="Precio Proveedor">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="2">
                          <b-form-group label="Total">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>

                        <b-col md="2">
                          <b-form-group label="L">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>
                        <b-col md="2">
                          <b-form-group label="V.Cliente">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>

                        <b-col md="3">
                          <b-form-group label="Codigo de Barras">
                            <b-form-input
                              type="text"
                              ref="composition"
                              v-model="product.composition"
                            ></b-form-input>
                            <small
                              v-if="errors.composition"
                              class="form-text text-danger"
                              >Ingrese una composición</small
                            >
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-col md="2">
                        <CButton type="submit" color="info"
                          >Guardar (F4)</CButton >
                      </b-col>
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </b-form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <!-- fin -->
  </div>
</template>

<script>
export default {
    data(){
        return{
              product: {
                id_category: "",
                id_subcategory: "",
                id_brand: "",
                id_provider: "",
                code: "",
                name: "",
                presentation: "",
                composition: "",
                barcode: "",
                description: "",
                existence_type: "01",
                unit_measure: "NIU",
                igv: "10",
                internal_product: 0,
                transform: 0,
                photo: "",
                unspsc_code:'23251602',
                commissionable: 0,
                commission: 0.0,
                purchase_price: 0.0,
                regular_price: 0.0,
                sale_price: 0.0,
                gross_weight: 0.0,
                weight_cost: 0.0,
                people_who_bought_this:0,
                people_who_see_this:0,
                outstanding:0,
                offer:0,
                web:0,
                state: 1,
            },
            errors: {
                id_category: false,
                id_brand: false,
                id_provider: false,
                code: false,
                name: false,
                state: false,
            },
            validate: false,
            itemmarcas:[{value:1,text:'Marca 1'},{value:2,text:'Marca 2'}],
            photo:null,
        }
    },
    created(){
      if (!this.$session.exists()) {
          // this.$router.push({ name: "Login"})
			     	this.$router.push({ name: "Login"}).catch(err => {
						if (
						err.name !== 'NavigationDuplicated' &&
						!err.message.includes('Evitó la navegación redundante a la ubicación actual')
						) {

						console(err);
						}
					});
				}else{
					console.log("logueado app")
				}
    },
    methods:{
            onFileChange(e) {
                this.product.photo = e.target.files[0];
            },
            Validate(){

            }
    }
}
</script>
