import DefaultTheme from 'vitepress/theme'
import Item from './components/Item.vue'
import ItemForce from './components/ItemForce.vue'
import ItemRecommend from './components/ItemRecommend.vue'
import ItemRefer from './components/ItemRefer.vue'
import PositiveExample from './components/PositiveExample.vue'
import NegativeExample from './components/NegativeExample.vue'
import Description from './components/Description.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Item', Item)
    app.component('ItemForce', ItemForce)
    app.component('ItemRecommend', ItemRecommend)
    app.component('ItemRefer', ItemRefer)
    app.component('PositiveExample', PositiveExample)
    app.component('NegativeExample', NegativeExample)
    app.component('Description', Description)
  },
}
