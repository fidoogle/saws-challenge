<template>
  <v-list subheader>
    <v-subheader class="subheader">{{name}} ({{group.length}})</v-subheader>

    <v-list-item two-line
      v-for="item in group"
      :key="item.trackId"
      @click="toggleFavorite(item)"
    >

      <v-list-item-avatar>
        <v-img :src="item.artworkUrl100"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{item.collectionName}}</v-list-item-title>
        <v-list-item-subtitle>
          <a :href="item.collectionViewUrl" target="_blank">{{item.primaryGenreName}}</a>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
          <v-icon :color="favColor(item)">mdi-cards-heart</v-icon>
        </v-list-item-icon>

    </v-list-item>
  </v-list>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    group: {
        type: Object,
        default() {
          return {}
        },
    }
  },

  computed: {
    ...mapGetters('favorites', ['getFavoriteById']),
  },

  methods: {
    ...mapMutations('favorites', ['addFavorite', 'removeFavorite']),

    favColor(item) {
      if (this.getFavoriteById(item.trackId)) {
        return 'red';
      } else {
        return 'gray';
      }
    },

    toggleFavorite(item) {
      if (this.getFavoriteById(item.trackId)) {
        this.removeFavorite(item);
      } else {
        this.addFavorite(item);
      }
    }
  }
};
</script>

<style>
.subheader {
  text-transform: uppercase;
  font-weight: bold;
}
</style>