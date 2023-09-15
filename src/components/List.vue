<template>
  <div class='ListGloble'>
    <div class="info">
      <div class="infoBlock1">
        <p class="infoTitle1">Всего задачь</p>
        <p class="infoCount">{{state.todos.length}}</p>
      </div>
      <div class="infoBlock1">
        <p class="infoTitle2">Выполнено</p>
        <p>{{state.todos.length}}</p>
      </div>
    </div>
    <div v-if="state.todos" v-for="todo in state.todos" class="List">
      <div key={{todo.id}} class="todo">
        <input  class="checked" type='radio' checked={{todo.complete}}/>
        <div class="elem">
          <div class="elemInfo">
            <p class="title">{{ todo.title }}</p>
            <div class="dataList">
              <p class="dataText">Дата создания</p>
              <p class="dataValue">{{ todo.dataSave }}</p>
              <p class="dataText">Дада окотчания</p>
              <p class="dataValue">{{ todo.dataClose }}</p>
            </div>
          </div>
          <p class = "text">{{ todo.text }}</p>
        </div>
        <div>
          <img src='@/assets/edit.svg'>
        </div>
      </div>
    </div>
    <Modal/>
  </div>
</template>

<script setup>

import Modal from "@/components/Modal.vue";
import {onBeforeUpdate} from "vue";
import {useSearchStore} from "@/stores/SearchStore";
const state = useSearchStore()

onBeforeUpdate(() => {
  state.getTodos()
})

</script>

<style>
.List {
  width: 100%;
  background-color: #1A1A1A;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  padding-top: 20px;
}

.todo {
  width: 736px;
  height: 125px;
  background-color: #262626;
  border-radius: 8px;
  border: 1px #333333 solid;
  margin: 16px;
  display: flex;
  justify-content: space-between;
}

.title {
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}

.text {
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  width: 632px;
  height: 40px;
}

.dataList {
  width: 137px;
  height: 28px;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}

.checked {
  width: 24px;
  height: 24px;
  background: #1A1A1A;
  padding: 16px;
  margin-top: 18px;
  margin-left: 10px;
}

.elem {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 30px;
}

.elemInfo {
  width: 607px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.dataText {
  color: #808080;
  margin-right: 5px;
}

.dataValue {
  color: #1E6F9F;
}

.info {
  display: flex;
  justify-content: space-between;
  background-color: #1A1A1A;
  width: 736px;
  height: 19px;
  padding-top: 70px;
  margin-left: auto;
  margin-right: auto;
}

.ListGloble {
  background-color: #1A1A1A;
}

.infoValue {
  color: #8284FA;
}

.infoBlock1 {
  display: flex;
  justify-content: space-between;
}

.infoTitle1 {
  color: #4EA8DE;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

}

.infoTitle2 {
  width: 88px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #8284FA;

}

.infoCount {
  color: white;
  margin-left: 10px;
}

</style>
