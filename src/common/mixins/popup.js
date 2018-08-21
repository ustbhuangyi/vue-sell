const EVENT_SHOW = 'show'
const EVENT_HIDE = 'hide'

export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
      this.$emit(EVENT_SHOW)
    },
    hide() {
      this.visible = false
      this.$emit(EVENT_HIDE)
    }
  }
}
