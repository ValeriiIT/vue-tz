<script setup lang="ts">
import Form from './components/Form.vue';
import List from "@/components/List.vue";
</script>

<template>
<div>
  <Form/>
  <List/>
</div>
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

input,
button,
textarea,
select {
  margin: 0;
  font: inherit;
}

a {
  text-decoration: none;
}

</style>
