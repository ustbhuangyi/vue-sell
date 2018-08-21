<template>
  <span class="bubble">
    {{ num }}
  </span>
</template>

<script>
  export default {
    name: 'bubble',
    props: {
      num: {
        type: Number
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .bubble
    display: inline-block
    padding: 0 5px
    height: 16px
    line-height: 16px
    text-align: center
    border-radius: 16px
    font-family: Helvetica
    font-weight: 700
    font-size: $fontsize-small-s
    color: $color-white
    background: linear-gradient(to right, $color-orange, $color-red)
</style>
