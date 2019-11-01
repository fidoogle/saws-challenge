<template>
  <div>
    <v-btn
      v-for="link in links"
      :key="link.label"
      color="white"
      text
      rounded
      :to="{path: link.route}"
    >
      {{ link.label }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {label:'SA Data', route: '/'},
        {label:'Favorites', route: '/favorites'},
      ],
    }
  }
};
</script>