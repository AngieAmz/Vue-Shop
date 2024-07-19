import './assets/main.css'
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//fontawesome icons
/* fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas, far)

import App from './App.vue'

import router from './router'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(vuetify)

app.mount('#app')
