const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/petshop'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            /* clave: valor */
        }
    },
    created() {     /* hook con las funciones que se ejecutan luego de cargar las variables de estado */
        /* ejecuto funcion() */
    },
    methods: {      /* objeto con todos los métodos que necesita la app (fetch/filter/etc) */
        /* defino funcion */
    },
    computed: {     /* objeto con todos los métodos que se ejectuan automaticamente cuando CAMBIA un estado */
    }
})

app.mount("#app")   /* monto la app de VUE */