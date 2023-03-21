const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/petshop'

const app = createApp({
    data(){         /* funcion que define los estados (propiedades reactivas) de la aplicación */
        return {
            name: "MINDY",
            description: "Envianos tu consulta",
            subtitle: "CONTACTO",
            nombre: "",
            edad: 0,
            fecha: "",
            animal: "",
            comida: [],
            suscripcion: ""
        }
    },
    methods: {      /* objeto con todos los métodos que necesita la app (fetch/filter/etc) */
        captureData() {
            console.log({
                nombre: this.nombre,
                edad: this.edad,
                fecha: this.fecha,
                animal: this.animal,
                comida: this.comida,
                suscripcion: this.suscripcion
            })
            alert('hola '+this.nombre)
        }
    }
})

app.mount("#app")   /* monto la app de VUE */