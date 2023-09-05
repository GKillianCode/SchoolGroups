
<script>
import Title from './components/TitleComponent.vue';
export default{
  components: {
    Title
  },
}
</script>

<template>
  <div class="wrapper">
    <Title />
  </div>
  <router-view/>
</template>
