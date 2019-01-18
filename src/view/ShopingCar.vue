<template>
  <div>
    <t-header>Shoping Car</t-header>
    <div class="commodity-box">
      <div v-for="(commodity,index) in commodityList" :key="index">
        <div class="commodity">
          <div class="commodity-title">{{commodity.name}}</div>
          <div class="commodiyt-price">￥{{commodity.price}}</div>
          <button @click="buy(index)">buy</button>
        </div>
      </div>
    </div>
    <div class="shopcar-box">
      <table border="1" class="shopcar">
        <tr>
          <th width='10%'></th>
          <th width='25%'>商品名称</th>
          <th width="20%">商品单价</th>
          <th width="15%">数量</th>
          <th>总价</th>
        </tr>
        <tr v-for="(goods,index) in shopingCar" :key="index">
          <td>{{index+1}}</td>
          <td>{{goods.name}}</td>
          <td>{{goods.price}}</td>
          <td>
            <button @click="goods.count -=1 " :disabled="goods.count <= 1">-</button>
            <span class="count">{{goods.count}}</span>
            <button @click="goods.count +=1 ">+</button>
          </td>
          <td>
            ￥ {{((goods.price*1000)*goods.count/1000)}}
            <button @click="del(index)">del</button>
          </td>
        </tr>
      </table>
      <div class="total-price">
        总价：￥ {{totalPrice}}
        <button v-if="shopingCar.length" @click="del()">delAll</button>
      </div>
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
          price: '4955'
        },
        {
          name: 'iPad Pro',
          price: '3999'
        },
        {
          name: 'MacBook Pro',
          price: '19990'
        },
        {
          name: 'RedMI',
          price: '999.98'
        },
        {
          name: 'iphoneX',
          price: '36.87'
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
      this.shopingCar.push({
        id: this.shopingCar.length + 1,
        name: goods.name,
        price: goods.price,
        count: 1
      })
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
  width: 7.3rem;
  margin: 0 auto;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
  .commodity {
    margin-right: 0.05rem;
  }
}
.shopcar {
  width: 7.3rem;
  margin: 0 auto;
}
.shopcar-box {
  margin-top: 0.2rem;
  font-size: 0.24rem;
  th {
    text-align: center;
  }
  td {
    text-align: center;
    button {
      outline: none;
      padding: 0 0.05rem;
      border-radius: 1px;
    }
    .count {
      display: inline-block;
      width: 0.2rem;
    }
  }
  tr > td:last-child {
    text-align: right;
  }
}
.total-price {
  text-align: right;
  margin-top: 0.1rem;
  margin-right: 0.25rem;
}
</style>
