<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
  import { urlParse } from 'common/js/util'
  import { getSeller } from 'api'
  import Header from 'components/header/header.vue'
  import Goods from 'components/goods/goods'
  import Ratings from 'components/ratings/ratings'
  import Seller from 'components/seller/seller'
  import Tab from 'components/tab/tab'

  export default {
    data() {
      return {
        seller: {
          id: urlParse().id
        }
      }
    },
    computed: {
      tabs() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评论',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Seller,
            data: {
              seller: this.seller
            }
          }
        ]
      }
    },
    created() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    },
    components: {
      Tab,
      'v-header': Header
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    >>> .cube-tab
      padding: 10px 0
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
