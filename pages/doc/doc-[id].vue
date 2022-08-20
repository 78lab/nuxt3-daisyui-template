<template>
    <div>
                doc id page: {{$route.params.id}}
        <button class="btn" @click="$router.back()">Go Back</button>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'doc',
  description:'desc of doc id'
})
const supabase = useSupabaseClient()
const user = useUserStore()
const startAt = Date.now()
const timeAgo = useTimeAgo(startAt)
</script>