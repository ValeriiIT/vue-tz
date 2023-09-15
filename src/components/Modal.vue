<template>
  <div v-if="stateModal.stateModal" class="modal">
    <div class="modalTitle">
      <p class="modalName">Создать задачу</p>
      <button @click="stateModal.close()" class="modalBtn">x</button>
    </div>
    <div class="blockInput">
      <input  v-model="titleInp" class="input" placeholder="Заголовок" type='text'/>
      <input v-model="textInp" class="input" placeholder='Текст' type='text'/>
      <input v-model="saveDateInp" class="input" placeholder="Дата окончания" type='date'/>
      <button @click="add()" class="btnSave">Создать</button>
    </div>
  </div>
</template>

<script setup >

import {useSearchStore} from "@/stores/SearchStore";
import {useModalStore} from "@/stores/counter";
import {ref} from "vue";
const state = useSearchStore()
const stateModal = useModalStore()
import {onBeforeUpdate, onUpdated, ref} from "vue";

const state = useSearchStore()
const stateModal = useModalStore()
const titleInp = ref('')
const textInp = ref("")
const saveDateInp = ref("")



const add = () => {

  state.getTodos()

  onBeforeUpdate(() => {
    state.getTodos()
  })

  const obj = {
    title:titleInp.value,
    text:textInp.value,
    dataSave:saveDateInp.value,
  }
  state.addTodos(obj)
  stateModal.close()
  state.getTodos()
}

</script>

<style>



.modal {
  position: absolute;
  width: 457px;
  height: 296px;
  top: 242px;
  left: 700px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid;
  background-color: #333333;

}

.modalTitle {
  display: flex;
  justify-content: space-between;
  height: 24px;
  width: 417px;
}

.modalName {
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 211px;
  height: 24px
}

.modalBtn {
  background-color: #E25858;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  font-size: 20px;
  border: none;
  color: white;
}

.blockInput {
  width: 417px;
  height: 212px;
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
}


.input {
  display: flex;
  margin-top: 10px;
  width: 409px;
  height: 38px;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #0D0D0D;
  background-color: #262626;
}

.btnSave {
  position: absolute;
  width: 409px;
  height: 52px;
  border-radius: 8px;
  background-color: #808080;
  color: white;
  padding: 16px;
  margin-top: 10px;
  flex-wrap: wrap;
  bottom: 20px;
}

</style>
