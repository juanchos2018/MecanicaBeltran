<template>
    <div>
       <CCard>
          <CCardHeader>
            <strong>Agregar Proveedor </strong> 
            
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="4">
                <CInput
                  label="Cedula"                  
                />
              </CCol>
             
              <CCol sm="4">
                <CInput
                  label="Nombre"
                  placeholder="Ingrese Nombre"
                />
              </CCol>
               <CCol sm="4">
                <CInput
                  label="Telefono"
                  placeholder="Ingrese Telefono"
                />
              </CCol>
             
            </CRow>
            <CRow>
               <CCol sm="4">
                <CInput
                  label="Direccion"
             
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="Correo Electronico"
                  placeholder="Ingrese Correo"
                  type="email"
                />
              </CCol>

            
            </CRow>

           
           
              <div class="form-actions float-right">
                   
                  <CButton type="button" style="margin-right:10%" color="info">Registrar</CButton>
                  <!-- <CButton color="secondary">Cancel</CButton> -->
                </div>
          </CCardBody>
        </CCard>
    </div>
</template>

<script>
export default {
  data(){
    return{

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
					// this.$session.destroy();
					console.log("logueado app")
				}
  },
  methods:{

  }
}
</script>
