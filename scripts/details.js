const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/petshop/'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            /* clave: valor */
            name: 'MINDY',
            description: 'Aqui podrás ver los detalles del producto',
            subtitle: 'PRODUCTO',
            product: {}
        }
    },
    created() {     /* hook con las funciones que se ejecutan luego de cargar las variables de estado */
        this.captureId()
    },
    methods: {      /* objeto con todos los métodos que necesita la app (fetch/filter/etc) */
        async captureId() {
            let query = location.search
            let params = new URLSearchParams(query)
            let id = params.get('product_id')
            try {
                let response = await fetch(url)
                response = await response.json() //me traigo todos los productos
                console.log(response)
                response = response.find(each => each._id === id) //encuentro el que coincide el id
                this.product = response
            } catch(error) {
                console.log(error)
            }
        }
    },
    computed: {     /* objeto con todos los métodos que se ejectuan automaticamente cuando CAMBIA un estado */
    }
})

app.mount("#app")   /* monto la app de VUE */