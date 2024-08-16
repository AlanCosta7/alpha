import { defineStore } from 'pinia';
import { Loading, Notify, Platform, uid, openURL } from 'quasar'
import { $analytics, logEvent, $functions } from 'boot/firebase'
import { getFunctions, httpsCallable } from "firebase/functions";

export const useGlobalStore = defineStore('global', {
  state: () => ({
  }),
  getters: {
    mobile: (state) => {
      return Platform.is.mobile
    }
  },
  actions: {
    onClick() {
      openURL('https://go.hotmart.com/S87865287B')
    },
    onEvent(item) {
      logEvent($analytics, item.label, {
        content_type: item.value,
      })
    },
    async sendHttpCall(payload) {

      const send = httpsCallable($functions, payload.functions);
      const result = await send(payload.data).then((result) => {
          const data = result?.data;
          return data
      }).catch((error) => {
          console.log('sendHttpCall', error)
          return {error: error}
      })

      return result
  },
  },
});
