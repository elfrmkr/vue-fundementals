// the tag # represents the id given in div, . represents
// a class to render


/*
With computed propery, function is called when any of the instances change,
not everytime the function rerenders
 */
const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe',
            middleName: '',
            url: 'http://google.com',
            raw_url: '<a href="https://google.com" target= "_blank">Google</a>',
            age: 20,
            isPurple: false,
            selectedColor: '',
            size: 150,
            mode: 1,
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                { name: 'John', age: 20 , message: 'John says hi'},
                { name: 'Ricky', age: 18, message: 'Ricky says hi'},
                { name: 'Amy', age: 33, message: 'Amy says hi'},
            ]
        }
    },
    methods: {
        
        increment() {
             this.age++
        },
        updatelastName(message, event) {
            console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        },
        move() {
            const first = this.people.shift() // removes the first item in the arry and returns it
            this.people.push(first)
        }
    },
    computed: {
    
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        circle_classes() {
            return {purple: this.isPurple}
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 3000);
        }
    }
}).mount('#app')


// multiple vue instances
// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')
