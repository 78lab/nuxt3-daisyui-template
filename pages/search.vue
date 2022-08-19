<template>
<div>
    <h1>search result</h1>
    <p>
    route.query.name:{{route.query.name}} 
    route.query.type:{{route.query.type}}
    </p>
   <button class="btn" @click="router.back()">Back</button>

</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Search',
  description:'desc of search'
})
const router = useRouter();
const route = useRoute()
// const name = ref('my name');
// const type = ref(1);

// function navigate(){
//   return navigateTo({
//     path: '/search',
//     query: {
//       name: name.value,
//       type: type.value
//     }
//   })
// }


</script>