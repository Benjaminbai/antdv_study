import Icon from '../icon'
import Card from '../card'

const props = {
  bTitle: {
    type: String,
    required: false,
    default: "this is title",
  },
  desc: {
    type: String,
    required: false,
    default: "this is desc",
  },
  iconType: {
    type: String,
    required: false,
    default: "more",
  },
  hasChildren: {
    type: Boolean,
    required: false,
    default: false,
  },
}

export default {
  name: 'BGridCard',
  props,

  render() {
    const { hasChildren, iconType, bTitle, desc } = this.$props
    return (
      <Card class="b-grid-card">
        {
          hasChildren &&
          <div class="b-icon-box">
            <Icon class="b-icon" type="more" />
          </div>
        }

        <div class="shortcut-box">
          <Icon class="deep" type={iconType} />
          <Icon class="shallow" type={iconType} />
        </div>

        <p class="grid-title">{bTitle}</p>
        <span class="grid-desc">{desc}</span>
      </Card>
    )
  }
}