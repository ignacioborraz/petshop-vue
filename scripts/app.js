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
            categories: [],
            checks: [],
            text: "",
            filteredData: [],
            cart: []
        }
    },
    created() {     /* hook con las funciones que se ejecutan luego de cargar las variables de estado */
        /* ejecuto funcion() */
        //this.fetchApi()
        //this.getCategories()
        this.fetchOnlyOne()
        this.obtainStorage()
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
                this.filteredData = response //es necesario cargar el estado para la primera renderizacion de las cards
                response = response.map(each => each.categoria)
                response = [...new Set(response)]
                this.categories = response
            } catch(error) {
                console.log(error)
            }
        },
        filterData() {
            //console.log(this.text)
            //console.log(this.checks)
            this.filteredData = this.products.filter(each => {
                return (each.producto.toLowerCase().includes(this.text.toLowerCase())) && (this.checks.length === 0 || this.checks.includes(each.categoria))
            })
            //console.log(filteredData)
        },
        manageProducts() {
            localStorage.setItem(
                'cart', // clave para guardar los datos
                JSON.stringify(this.cart) // valores a guardar
            )
        },
        obtainStorage() {
            //let datosDelStorage = localStorage.cart //version no tan copada (no me acuerdo en que navegador no funciona)
            let datosDelStorage = localStorage.getItem('cart')
            console.log(datosDelStorage) //el dato recien devuelto del storage es de texto plano y es necesario convertirlo en objeto de js
            if (datosDelStorage) {
                let datosTransformadosaJs = JSON.parse(datosDelStorage)
                console.log(datosTransformadosaJs)
                this.cart = datosTransformadosaJs
            }
        }
    },
    computed: {     /* objeto con todos los métodos que se ejectuan automaticamente cuando CAMBIA un estado */
    }
})

app.mount("#app")   /* monto la app de VUE */