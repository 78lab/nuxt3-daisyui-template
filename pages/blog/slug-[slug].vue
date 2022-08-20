<template>
    <div>
                blog slug page ver2: {{$route.params.slug}}
        <button class="btn" @click="$router.back()">Go Back</button>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'blog slug page',
  description:'desc of blog slug'
})
const supabase = useSupabaseClient()
const user = useUserStore()
const startAt = Date.now()
const timeAgo = useTimeAgo(startAt)
</script>