const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id);
      },
      removeProduct(id) {
        let pos = this.cart.indexOf(id);
        if (pos > -1) {
          this.cart.splice(this.cart.indexOf(id), 1);
        }
      }
    }
})
