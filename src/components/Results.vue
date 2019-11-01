<template>
  <div>
    <div v-if="groups">
      <v-list>
        <v-list-item 
          two-line 
          v-for="item in groups" 
          :key="item.name+item.type"
          @click="toggleFavorite(item)"
        >
          <v-list-item-content>
            <v-list-item-title><a :href="item.url" target="_blank">{{item.name}}</a></v-list-item-title>
            <v-list-item-subtitle>{{item.type}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="favColor(item)">mdi-cards-heart</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>
    <div v-else>Getting results ...</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  props: {
    groups: {
      type: Array,
      default() {
        return [];
      }
    },
    noclick: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters('favorites', ['getFavorite']),
  },

  methods: {
    ...mapMutations('favorites', ['addFavorite', 'removeFavorite']),

    favColor(item) {
      if (this.getFavorite(item)) {
        return 'red';
      } else {
        return 'gray';
      }
    },

    toggleFavorite(item) {
      if (!this.noclick) {
        if (this.getFavorite(item)) {
          this.removeFavorite(item);
        } else {
          this.addFavorite(item);
        }
      }
    }
  }
};
</script>

<style>
.groups {
  text-aligned: left;
}
</style>