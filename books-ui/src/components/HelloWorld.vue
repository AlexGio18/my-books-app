<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="book in books" :key="book._id" :cols="col_span">
        <v-card flat max-width="300" :href="book.link">
          <v-img :src="book.image_link" height="200px" dark></v-img>
          <v-card-title>
            {{ book.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ book.author }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from '../helpers/helpers'

  export default {
    name: 'HelloWorld',
    data: () => ({
      books: [],
      col_span: 2
    }),
    async mounted () {
      this.books = await api.getBooks()
      console.log(this.books)
    }
  }
</script>
