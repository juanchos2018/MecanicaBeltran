import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () =>
    import ('@/containers/TheContainer')

// Views
const Dashboard = () =>
    import ('@/views/Dashboard')

// Views - Pages
const Page404 = () =>
    import ('@/views/pages/Page404')
const Page500 = () =>
    import ('@/views/pages/Page500')
const Login = () =>
    import ('@/views/pages/Login')

/// Rutas de Mecanica 
const ProveedorList = () =>
    import ('@/views/Proveedor/ProveedorList')

const ProveedorAdd = () =>
    import ('@/views/Proveedor/ProveedorAdd')

const ProductoList = () =>
    import ('@/views/Producto/ProductoList')

const ProductoAdd = () =>
    import ('@/views/Producto/ProductoAdd')
const EntradaList = () =>
    import ('@/views/Kardex/EntradaList')
const EntradaAdd = () =>
    import ('@/views/Kardex/EntradaAdd')

const SalidaList = () =>
    import ('@/views/Kardex/SalidaList')
const SalidaAdd = () =>
    import ('@/views/Kardex/SalidaAdd')
const Kardex = () =>
    import ('@/views/Kardex/Kardex')
Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [{
            path: '/',
            redirect: '/',
            name: 'Login',
            component: {
                render(c) {
                    return c("router-view");
                },
            },
            children: [{
                path: "/",
                name: "LoginPage",
                component: Login,
            }, ],
        },
        {
            path: "/inicio",
            redirect: "/inicio/inicio",
            name: "Home",
            component: TheContainer,
            children: [{
                    path: "inicio",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: "404",
                    name: "Page404",
                    component: Page404,
                },
                {
                    path: "500",
                    name: "Page500",
                    component: Page500,
                },
            ],
        },
        {
            path: "/almacen",
            redirect: '/icons/coreui-icons',
            name: "Almacen",
            component: TheContainer,
            children: [{
                    path: 'entrada-list',
                    name: 'Entrada',
                    component: EntradaList
                },
                {
                    path: 'entrada-nuevo',
                    name: 'Entrada',
                    component: EntradaAdd
                },
                {
                    path: 'salida-list',
                    name: 'Salida',
                    component: SalidaList
                },
                {
                    path: 'salida-nuevo',
                    name: 'Salida',
                    component: SalidaAdd
                },
                {
                    path: 'kardex',
                    name: 'Kardex',
                    component: Kardex
                },
            ],
        },


        {
            path: "/mantenimiento",
            redirect: '/icons/coreui-icons',
            name: "Mantenimiento",
            component: TheContainer,
            children: [

                {
                    path: 'proveedor-list',
                    name: 'Proveedor',
                    component: ProveedorList
                },
                {
                    path: 'proveedoradd',
                    name: 'ProveedorAdd',
                    component: ProveedorAdd
                },
                {
                    path: 'producto-list',
                    name: 'Producto',
                    component: ProductoList
                },
                {
                    path: 'productoadd',
                    name: 'ProductoAdd',
                    component: ProductoAdd
                },

            ],
        },



    ]
}