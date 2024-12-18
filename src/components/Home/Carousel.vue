<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-carousel class="rounded-lg" cycle height="400px" hide-delimiters>
            <v-carousel-item src="/images/home/carousel1.jpg" cover></v-carousel-item>
            <v-carousel-item src="/images/home/carousel2.jpg" cover></v-carousel-item>
            <v-carousel-item src="/images/home/carousel3.jpg" cover></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Carousel'
  };
  </script>
  