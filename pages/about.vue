<template>
    <div class="prose w-full max-w-4xl flex-grow">
        <h1>About</h1>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, similique? Laborum suscipit cumque pariatur repellat accusantium quisquam tempora corporis voluptatum voluptatibus, rerum fugit fuga repudiandae consectetur dolorum incidunt laudantium eligendi.
    </p>
    <h2>Section01</h2>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, similique? Laborum suscipit cumque pariatur repellat accusantium quisquam tempora corporis voluptatum voluptatibus, rerum fugit fuga repudiandae consectetur dolorum incidunt laudantium eligendi.
    <h2>Section02</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla obcaecati ratione explicabo, quidem nam expedita tempore harum illum hic esse nobis neque quis illo placeat corporis reprehenderit quisquam provident aut!</p>
    <h3>Heading-3</h3>
    <blockquote><p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p></blockquote>
<button class="btn" @click="router.back()">Back</button>
<!-- <NuxtLink to="/blog/nice-try-first-post" class="link">nice-try-first-post</NuxtLink> -->
    </div>

</template>
<script setup>
definePageMeta({
  title: 'About',
  description:'desc of About'
})

const router = useRouter();

  onMounted(()=>{
    console.log("onMounted about")
    // closeDrawer()
  })
</script>