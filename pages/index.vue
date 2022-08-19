<template>
<div>
    <h1>Index Page name: {{user.savedName}}</h1>
    <InputEntry />
    <Auth />
    <h3>Time Ago: {{ timeAgo }}</h3>
    <button class="btn btn-primary">primary</button>

    <NuxtLink to="/test01" class="btn">test01</NuxtLink>
    <NuxtLink to="/about" class="btn">about</NuxtLink>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description:'desc of Home'
})
const supabase = useSupabaseClient()
const user = useUserStore()
const startAt = Date.now()
const timeAgo = useTimeAgo(startAt)
</script>