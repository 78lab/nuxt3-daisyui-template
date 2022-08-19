<template>
    <!-- <div class="prose container mx-auto">
    Some default layout shared across all pages
    
  </div> -->


    <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Nav Bar -->
            <div
                class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
                <nav class="navbar w-full">
                    <div class="flex flex-1">
                        <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                            data-tip="Menu">
                            <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </span>

                        <div class="flex items-center gap-2">
                            <a href="/" class="btn btn-ghost px-2">
                                <div
                                    class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                                    <span class="lowercase text-primary">Nuxt3</span><span
                                        class="uppercase text-base-content">ST</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex-0">
                        <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                            data-tip="GitHub">
                            <div class="flex-none items-center">
                                <a aria-label="Github" target="_blank"
                                    href="https://github.com/78lab/nuxt3-daisyui-template" rel="noopener"
                                    class="btn btn-ghost drawer-button btn-square normal-case">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="inline-block h-5 w-5 fill-current md:h-6 md:w-6">
                                        <path
                                            d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
                                    </svg>
                                </a>
                            </div>
                        </span>

                    </div>
                </nav>
            </div>
            <!-- Page content -->
            <div class="p-6 pb-16">
                <slot />
            </div>

        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>
        </div>
    </div>

</template>
<script setup>
const route = useRoute()

useHead({
    title: `My Awesome App - ${route.meta.title}`,
    meta: [
        { name: 'description', content: `My DESC - ${route.meta.description}` },

        { name: 'og:title', content: `App Name OG - ${route.meta.title}` },
        { name: 'og:description', content: `My og DESC  - ${route.meta.description}` },
        { name: 'og:image', content: `` },

        { name: 'twitter:card', content: `` },
        { name: 'twitter:title', content: `twitter title - ${route.meta.title}` },
        { name: 'twitter:description', content: `twitter desc - ${route.meta.description}` },
        { name: 'twitter:image', content: `` },
        { name: 'twitter:image:alt', content: `` }
    ]
})
</script>