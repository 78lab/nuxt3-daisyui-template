<template>
<div>
    <h1>Test01: {{name}} {{type}}</h1>
    <button class="btn" @click="gosearch()">Go search</button>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Test01',
  description:'desc of Test01'
})
// const router = useRouter();
const name = ref('my name');
const type = ref(1);

function gosearch(){
  return navigateTo({
    path: '/search',
    query: {
      name: name.value,
      type: type.value
    }
  })
}


</script>