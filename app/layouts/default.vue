<script lang="ts" setup>
useSeoMeta({
  title: 'Coda',
  ogTitle: 'Coda',
  description: 'At Coda Tech Solutions, we specialize in custom web development, mobile app creation, and digital transformation services designed to boost your business efficiency and customer engagement in today’s competitive market. Partner with us to leverage the latest technologies and accelerate your digital success.',
  ogDescription: 'At Coda Tech Solutions, we specialize in custom web development, mobile app creation, and digital transformation services designed to boost your business efficiency and customer engagement in today’s competitive market. Partner with us to leverage the latest technologies and accelerate your digital success.',
});
</script>

<template>
  <div>
    <AppHeader />
    <MobileBottomNav />
    <slot />
    <AppFooter />
  </div>
</template>
