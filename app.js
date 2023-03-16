const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/petshop'

const app = createApp( {
    data(){
        return {
            name: 'PETSHOP MINDY',
            products: [],
            remedies: [],
        }
    },
    created() {
        this.fetchApi()
    },
    methods: {
        async fetchApi() {
            try {
                let response = await fetch(url)
                response = await response.json()
                this.products = response.filter(each=>each.categoria==='jugueteria')
                this.remedies = response.filter(each=>each.categoria==='farmacia')
                console.log(this.products)
                console.log(this.remedies)
            } catch(error) {
                console.log(error)
            }
        }
    }
})

app.mount("#app")