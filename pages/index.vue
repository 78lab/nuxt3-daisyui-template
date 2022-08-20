<template>
<div>
    <h1>Index Page name: {{user.savedName}}</h1>
    <InputEntry />
    <Auth />
    <h3>Time Ago: {{ timeAgo }}</h3>

    <div class="flex flex-col">
    <button class="btn btn-primary">primary</button>

    <NuxtLink to="/test-99" class="btn">test 99</NuxtLink>
    <NuxtLink to="/about" class="btn">about</NuxtLink>

    <NuxtLink to="/doc/doc-99" class="link">doc-99</NuxtLink>
    <NuxtLink to="/blog/slug-nice-try-first-post" class="link">slug nice-try-first-post</NuxtLink>
    <NuxtLink to="/doc/install" class="link">doc install</NuxtLink>
    </div>
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