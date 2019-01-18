<template>
  <div>
    <t-header>Shoping Car</t-header>
    <div class="commodity-box">
      <div v-for="(commodity,index) in commodityList"
           :key="index">
        <div class="commodity">
          <div class="commodity-title">{{commodity.name}}</div>
          <div class="commodity-photo">iphone8</div>
          <div class="commodiyt-price">{{commodity.price}}</div>
          <button @click="buy(index)">buy</button>
        </div>
      </div>
    </div>
    <div class="shopcar-box">
      <table border="1"
             class="shopcar">
        <tr>
          <th>道具名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
        </tr>
        <tr v-for="(goods,index) in shopingCar"
            :key="index">
          <td>{{goods.name}}</td>
          <td>{{goods.price}}</td>
          <td>
            <button @click="goods.count-=1"
                    v-if="goods.count>1">-</button>
            {{goods.count}}
            <button @click="goods.count+=1">+</button>
          </td>
          <td>{{((goods.price*1000)*goods.count/1000)}}
            <button @click="del(index)">del</button>
          </td>
        </tr>
        <tr>
          <td>
            总价：{{totalPrice}} <button v-if="shopingCar.length"
                    @click="del()">delAll</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commodityList: [
        {
          name: 'iphone7',
          price: '0.55'
        },
        {
          name: 'iphone6',
          price: '2.551'
        },
        {
          name: 'iphone5',
          price: '5555'
        },
        {
          name: 'iphone8',
          price: '5555'
        },
        {
          name: 'iphone0',
          price: '5555'
        }
      ],
      shopingCar: []
    }
  },
  computed: {
    totalPrice () {
      let priceAll = 0
      this.shopingCar.forEach(i => {
        priceAll += i.price * 1000 * i.count
      })
      return priceAll / 1000
    }
  },
  methods: {
    buy (index) {
      let goods = this.commodityList[index]
      for (let i = 0; i < this.shopingCar.length; i++) {
        if (this.shopingCar[i].name === goods.name) {
          this.shopingCar[i].count += 1
          // eslint-disable-next-line semi
          return;
        }
      }
      this.shopingCar.push({ name: goods.name, price: goods.price, count: 1 })
    },
    del (index = 'none') {
      if (index === 'none') {
        this.shopingCar = []
      } else {
        this.shopingCar.splice(index, 1)
      }
    }
  }
}
</script>
<style lang='scss'>
.commodity-box {
  width: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .commodity {
    margin-right: 0.05rem;
    background-color: pink;
  }
}
.shopcar {
  width: 7rem;
  margin: 0 auto;
}
</style>
