<template>
  <div>
    <p v-show="!noclick">
      <v-text-field
        label="Email to notify of favorite changes"
        filled
        v-model="email"
      ></v-text-field>
    </p>
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
import { pickFavorite } from "@/services";
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

  data() {
    return {
      email: null
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
          pickFavorite({
            email: this.email,
            favorite: item.name,
            picked: false
          });
        } else {
          this.addFavorite(item);
          pickFavorite({
            email: this.email,
            favorite: item.name,
            picked: true
          });
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