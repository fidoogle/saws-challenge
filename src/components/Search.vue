<template>
  <div>
    Enter Search term:
    <form @submit.prevent="onSubmit">
      <v-text-field
        v-model="term"
        label="Search"
        required
      ></v-text-field>
      <v-btn type="submit">Search</v-btn>
    </form>
    
    Results:
    <Results :groups="groups"/>
  </div>
</template>

<script>
import Results from '@/components/Results';
import {searchAPI} from '@/services';

export default {
  components: {
    Results
  },
  
  data() {
    return {
      groups: null,
      term: ''
    }
  },

  methods: {
    async onSubmit() {
      this.groups = await searchAPI(this.term);
      //console.log(this.groups);
    }
  }
};

</script>