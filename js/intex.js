const App = {
  data(){
    return{
      max:20000,
      displayLabel:true,
      // 체크박스에 true값 : 체크O, false값 : X 인 걸로 인식된다.
      products:[],
      cart:[],
        displayCart:true
    }
  },
  created(){
    fetch('./js/data.json')
    .then(response => response.json())
    .then(data => {this.products = data})
  },
  computed:{
    filterProducts(){
      return this.products.filter(item => (item.price < this.max))
    },
    cartTotal(){
      return this.cart.reduce( (inc,item) => Number(item.price)+inc , 0)
    }
  },
  methods:{
    won(value){
      return value.toLocaleString('ko-KR')
    },
    addToCart(product){
      this.cart.push(product)
    }
  }
}

Vue.createApp(App).mount('#app')