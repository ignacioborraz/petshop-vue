const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/petshop'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            /* clave: valor */
            name: "MINDY",
            description: "Mindy es una tienda de mascotas. Vendemos juguetes y remedios para tus animalitos.",
            subtitle: "PRODUCTOS",
            products: [],
            categories: []
        }
    },
    created() {     /* hook con las funciones que se ejecutan luego de cargar las variables de estado */
        /* ejecuto funcion() */
        //this.fetchApi()
        //this.getCategories()
        this.fetchOnlyOne()
    },
    methods: {      /* objeto con todos los métodos que necesita la app (fetch/filter/etc) */
        /* defino funcion */
        async fetchApi() {
            try {
                let response = await fetch(url)
                response = await response.json()
                //console.log(response)
                this.products = response
            } catch(error) {
                console.log(error)
            }
        },
        async getCategories() {
            try {
                let response = await fetch(url) //fetcheo la api
                response = await response.json() //transformo la respuesta en los datos que necesito
                response = response.map(each => each.categoria) //transformo el array de objetos en un array de categorias
                response = [...new Set(response)] //transformo el set nuevamente en un array (porque las props/metodos del set son limitados)
                //console.log(response)
                this.categories = response
                console.log(this.categories)
            } catch(error) {
                console.log(error)
            }
        },
        async fetchOnlyOne() {
            try {
                let response = await fetch(url) //fetcheo la api
                response = await response.json()
                this.products = response
                response = response.map(each => each.categoria)
                response = [...new Set(response)]
                this.categories = response
            } catch(error) {
                console.log(error)
            }
        }

    }
})

app.mount("#app")   /* monto la app de VUE */