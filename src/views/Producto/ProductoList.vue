<template>
  <div>  
     <br><br>
      <CCard>
          <CCardHeader>
            <strong> Productos Listar</strong>
          </CCardHeader>
      <CCardBody>
       

      <b-row>
          <div style="width: 100%;">
           
        <CButton color="info" style="float:right" @click="ProductoAgregar">
              <CIcon name="cil-pencil"/>&nbsp;Agregar Producto
     </CButton>  

          </div>
     </b-row> 

    <CRow>
       
      <CCol sm="12">
           <CDataTable
            :items="items"
            :fields="fields"          
            table-filter
            items-per-page-select
            :items-per-page="5"
            hover
            sorter
            pagination
          >
      <template #status="{item}">
        <td>
          <CBadge :color="getBadge(item.status)">
            {{item.status}}
          </CBadge>
        </td>
      </template>
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="success"
            variant="outline"
            square
            size="sm"
            @click="Ver(item, index)"
          >
           Ver
          </CButton>
          <CButton
          style="margin-left:2px"
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="Ver(item, index)"
          >
           Editar
          </CButton>
            <CButton
            style="margin-left:2px"
            color="danger"
            variant="outline"
            square
            size="sm"
            @click="Ver(item, index)"
          >
           Borrar
          </CButton>
        </td>
      </template>
     
    </CDataTable>
   
      </CCol>
       
    </CRow>

    
  </CCardBody>
  </CCard>
  </div>
</template>

<script>
import CTableWrapper from '../base/Table.vue'
import usersData from '../users/UsersData'
import axios from  'axios';
export default {
  name: 'Tables',
  components: { CTableWrapper },
  data(){
    return{
        collapseDuration: 0,
         details: [],
       items : [
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Banned'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Admin', status: 'Inactive'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Pending'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Banned', _classes: 'table-success'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Admin', status: 'Inactive'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Pending'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Active', _classes: 'table-info'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Banned'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Admin', status: 'Inactive'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Pending'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Banned'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Admin', status: 'Inactive'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Pending'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Banned'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Staff', status: 'Active'},
            { username: '111111', registered: 'Producto',marca:'marca', role: 'Member', status: 'Pending'}
          ],
         fields : [
                {label:'Codigo', key: 'username', _style:'min-width:100px' },
              
                {label:'Nombre', key: 'registered', _style:'min-width:200px;' },
                { label:'Categoria',key: 'role', _style:'min-width:100px;' },
                { label:'Marca',key: 'marca', _style:'min-width:100px;' },
                 {label:'Estado', key: 'status', _style:'min-width:100px;' },
                { 
                  key: 'show_details', 
                  label: 'Acciones', 
            
                  sorter: false, 
                  filter: false
                }
              ]


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

  methods: {

      ///mis metodos
    ProductoAgregar(){
         this.$router.push({path:"productoadd" });     
    },
     //termina ms metodos
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    },
    ClienteAgregar(){
      
         this.$router.push({path:"clienteagregar" });          
    },
     getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    Ver(item,indes){
      alert(item.username);
    },
  
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>
