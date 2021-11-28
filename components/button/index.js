import Button from './button'
import ButtonGroup from './button-group'
import Base from '../base'

Button.Group = ButtonGroup

Button.install = function (Vue) {
    Vue.use(Base)
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
}

export default Button