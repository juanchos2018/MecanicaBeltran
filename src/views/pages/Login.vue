<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="Login">
                  <h1>Inicio del Sistema</h1>
                
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
                    v-model="email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary"  type="submit" class="px-4">Ingresar</CButton>
                    </CCol>
                  
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-2 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <img src="../../assets/mecanica.jpeg" width="80%" alt="">
               
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
  
    </CContainer>
  </div>
</template>

<script>

const axios = require("axios").default;
const Swal = require("sweetalert2");
const je = require('json-encrypt')

import { mapState } from "vuex";


export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      business: {
        logo:'',
        name:'',
      },
      id_establishment: '1',
      establishments: [],

      errors:{
        id_establishment: false,
        email: false,
        password: false,
      },
      user:{ 
         api_token: "RnciX827gfSzPG6HGDFBxKG7jEbAJiATVZ3XwtWLhp77yUsGXzx1O7QHHLYs",
          created_at: null,
          email: "admin@gmail.com",
          establishment: "[1,3]",
          id_user: 1,
          id_user_type: 1,
          last_name: "Admin",
          name: "Admin",
          phone: null,
          remember_token: null,
          state: 1,
          updated_at: "2021-08-14 22:49:43",
          user: "Administrador"
      }
    };
  },
  methods: {
    Login,
    ListEstablishment,
    ViewBussiness,
  },
  mounted() {
   /// this.ListEstablishment();
   /// this.ViewBussiness();
    
  },
  computed: {
    ...mapState(["url_base"]),
  },
};

//login
function Login() {

  // if(this.id_establishment.length == 0){ 
  //   this.errors.id_establishment = true;
  // }
  if(this.email.length == 0){ 
    this.errors.email = true;
  }
  if(this.password.length == 0){ 
    this.errors.password = true;
  }

  let me = this;
  const email = this.email;
  const password = this.password;
  const id_establishment = this.id_establishment;
  
  let url = this.url_base + "login";

  let data = {
    email: email,
    password: password,
    id_establishment: id_establishment,
  };
  const USUARIO ="admin@gmail.com";
  const PASSWORD="123456";
  if (data.email==USUARIO && data.password==PASSWORD) {
        let user = je.encrypt(JSON.stringify(me.user));
        let token = je.encrypt(me.user.api_token);
        window.localStorage.setItem( "user",user );
        window.localStorage.setItem( "id_establishment", id_establishment );
        window.localStorage.setItem( "token", token );
        //window.localStorage.setItem( "user_permissions", user_permissions);
        me.$session.start()
        me.$router.push({ name: "Home"})


  }
  // axios({
  //   method: "POST",
  //   url: url,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // }).then(function (response) {    
  //   if (response.data.status == 200) {      

  //     let user = je.encrypt(JSON.stringify(response.data.result.user));
  //     let token = je.encrypt(response.data.result.user.api_token);
  //     let id_establishment = je.encrypt(me.id_establishment);
  //     let user_permissions = je.encrypt(JSON.stringify(response.data.result.userPermissions));

  //     window.localStorage.setItem( "user",user );
  //     window.localStorage.setItem( "id_establishment", id_establishment );
  //     window.localStorage.setItem( "token", token );
  //     window.localStorage.setItem( "user_permissions", user_permissions);
  //     me.$router.push({ name: "Home"})
  //     Swal.fire({ icon: "success", title: "Hola "+response.data.result.user.name+ " "+response.data.result.user.last_name+", Bienvenido al sistema", showConfirmButton: false, timer: 3000,});
  //   }else{
  //     Swal.fire({ icon: "error", title: "Datos incorrectos", showConfirmButton: false,timer: 1500,});
  //   }
  // });

}

function ViewBussiness() {
  let me = this;
  let url = this.url_base + "get-business";

  axios({
    method: "GET",
    url: url,
    headers: { token: this.token,},
  })
  .then(function (response) {
    if (response.data.status == 200) {
      me.business.logo = response.data.result.logo;
      me.business.name = response.data.result.name;
    }
  })
}

function ListEstablishment() {
  let me = this;
  let url = this.url_base + "active-establishments";

  axios({
    method: "GET",
    url: url,
  })
    .then(function (response) {

      me.establishments = [];
      me.establishments.push({value:'',text:'Seleccione un establecimiento'});

      if (response.data.status == 200) {
        for (let index = 0; index < response.data.result.length; index++) {
          const element = response.data.result[index];
          me.establishments.push({ value: element.id_establishment, text: element.name })
        }
      } else {
        Swal.fire({ icon: 'error', text: 'A ocurrido un error', timer: 3000,})
      }
    })
}
</script>
