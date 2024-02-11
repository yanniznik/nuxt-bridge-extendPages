<template>
  <div class="header">
      <div v-for="route in $router.options.routes">
         {{ route }}
         <nuxt-link :to="route.path">{{route.path}}</nuxt-link>
      </div>
   </div>
 </template>

 <script>
 export default {}
 </script>
