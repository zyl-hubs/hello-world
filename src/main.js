import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import { Integrations } from '@sentry/tracing';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// process.env.NODE_ENV === 'production' && Sentry.init();
Sentry.init({
  dsn: 'http://cd90ec30622343bbadafbe77bcbda083@localhost:9000/3',
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
      attachProps: true,
    }),
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
  logErrors: true,
  release: 'pro@1.0.1',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
