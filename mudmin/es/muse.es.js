
/**
 * @see https://github.com/museui/muse-ui/issues/318
 */

// muse.js
import 'muse-components/styles/base.less'
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
import badge from 'muse-components/badge'
import divider from 'muse-components/divider'
import drawer from 'muse-components/drawer'
import icon from 'muse-components/icon'
import iconButton from 'muse-components/iconButton'
import floatButton from 'muse-components/floatButton'
import * as list from 'muse-components/list'
import paper from 'muse-components/paper'
import refreshControl from 'muse-components/refreshControl'
import infiniteScroll from 'muse-components/infiniteScroll'
import {retina} from 'muse-components/utils'

const components = {
  appBar,
  avatar,
  badge,
  divider,
  drawer,
  icon,
  iconButton,
  floatButton,
  ...list,
  refreshControl,
  infiniteScroll,
  paper
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
    retina()
  }
}