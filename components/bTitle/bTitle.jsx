
const props = {
  title: {
    type: String,
    require: false,
    default: 'this is title',
  },
}
export default {
  name: 'BTitle',
  props,
  render() {
    const { $props, $slots } = this
    return (
      <h2 class="b-title">
        {$props.title}
        {$slots.default}
      </h2>
    )
  }
}