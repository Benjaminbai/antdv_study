import Layout from '../layout'

const Footer = Layout.Footer

export default {
  name: 'BFooter',

  render() {
    const { $attrs } = this
    return (
      <Footer class="b-footer" {...{ attrs: { ...$attrs } }}>
        <div>
          <span>Support</span>
          <span>Help Center</span>
          <span>Privacy</span>
          <span>Terms of Service</span>
        </div>
        <div>
          <span>Copyright © 2012-2021 IQVIA</span>
        </div>
      </Footer>
    )
  }
}