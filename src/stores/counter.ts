import {defineStore} from 'pinia'
;



export const useModalStore = defineStore('useModal', {
  state: () => ({
    stateModal: false
  }),
  actions: {
    open () {
      this.stateModal = true
    },
    close () {
      this.stateModal = false
    }
    }

})


interface Tmodal  {
  stateModal: boolean
}




export interface todosSchema {
  "id": number
  "title": string
  "text": string
  "dataSave": number
  "dataClose": number
  "complete": boolean
}
