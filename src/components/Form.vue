
<template>

  <div class="Form">
    <img class="logo" src='@/assets/Logo.svg'>
    <button @click="stateModal.open()" class="button">Создать</button>
  </div>
</template>

<script setup>
import {useModalStore} from "@/stores/counter";

const stateModal = useModalStore()
</script>

<style>
.Form {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #0D0D0D;
  position: relative;
}

.logo {
  margin-top: 72px;
  width: 229px;
  height: 48px;
}
.button {
  position: absolute;
  width: 736px;
  height: 52px;
  background-color: #1E6F9F;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  border: none;
  top: 173px;
}

</style>
