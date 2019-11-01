<template>
  <div>
    <div v-if="getFavorites">
        <Results :groups="getFavorites" :noclick="true"/>
    </div>
    <div v-else>No results</div>
  </div>
</template>

<script>
import Results from "@/components/Results";
import { mapGetters } from "vuex";

export default {
  props: {
    groups: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  components: {
    Results
  },

  computed: {
    ...mapGetters("favorites", ["getFavorites"])
  }
};
</script>

<style>
.groups {
  text-aligned: left;
}
</style>