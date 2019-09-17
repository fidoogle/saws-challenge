<template>
  <div>
    <div v-for="(group,groupName) in groups" :key="groupName" class="groups" v-if="groups">
      <v-divider></v-divider>
      <Group :group="group" :name="groupName"/>
    </div>
    <div v-else>
      No results
    </div>
  </div>
</template>

<script>
import Group from '@/components/Group';
export default {
  props: {
    groups: {
        type: Object,
        default() {
          return {}
        }
    }
  },

  components: {
    Group,
  },
};
</script>

<style lang="scss">
.groups {
   text-aligned: left;
}
</style>