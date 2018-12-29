<template>
  <div class="iview">
    <t-header>Go to Iview</t-header>
    <div class="iview_box">
      <ul>
        <li>
          <Card style="width:350px" class="card">
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              Classic film
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              Change
            </a>
            <ul>
              <li v-for="item in randomMovieList" :key="item.url" class="movie-item">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                  <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
                  <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
                  <Icon type="ios-star-half" v-else></Icon>
                  {{ item.rate }}
                </span>
              </li>
            </ul>
          </Card>
        </li>
        <li>
          <Collapse v-model="value1">
            <Panel name="1">
              我是小可爱
              <p slot="content">才怪</p>
            </Panel>
            <Panel name="2">
              斯蒂夫·盖瑞·沃兹尼亚克
              <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
            </Panel>
            <Panel name="3">
              乔纳森·伊夫
              <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </Panel>
          </Collapse>
        </li>
      </ul>
    </div>
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item,index) in 5" :key="index">
        <div class="demo-carousel">
          <div class="demo-content"></div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movieList: [
        {
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        }
      ],
      randomMovieList: []
    }
  },
  mounted () {
    this.changeLimit()
  },
  methods: {
    getArrayItems (arr, num) {
      const tempArray = []
      for (let index in arr) {
        tempArray.push(arr[index])
      }
      const returnArray = []
      for (let i = 0; i < num; i++) {
        if (tempArray.length > 0) {
          const arrIndex = Math.floor(Math.random() * tempArray.length)
          returnArray[i] = tempArray[arrIndex]
          tempArray.splice(arrIndex, 1)
        } else {
          break
        }
      }
      return returnArray
    },
    changeLimit () {
      this.randomMovieList = this.getArrayItems(this.movieList, 5)
    },
    mounted () {
      this.changeLimit()
    }
  }
}
</script>

<style lang='scss'>
h2 {
  font-size: 24px;
  text-align: left;
  padding: 0 10px;
}
.iview_box {
  .card {
    width: 350px;
    margin: 0 auto;
    i {
      color: rgb(70, 70, 25);
    }
  }
}
.movie-item {
  display: flex;
  justify-content: space-between;
}
.demo-content {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-color: gray;
}
</style>
