<template>
    <v-main>
      <v-container fill-height>
        <v-layout wrap>
          <v-row>
            <v-col v-for="(card,index) in card_list" :key="index" cols="4">
              <v-card variant="outlined" elevation="10">
                <v-card-title> {{ card.text }} </v-card-title>
                <v-card-text> {{ card.text }}</v-card-text>
                <v-icon> {{ card.icon }}</v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    
    </v-main>
  </template>
  
  <script>
  export default {
    data () {
      return {
          card_list: [
            {text: 'C/C++', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
            {text: 'あいうえお', icon: 'mdi-home'},
          ]
      }
    }
  }
  </script>
  
  <!--
  <style scoped>
  main {
    height: calc(100vh - 152px);
    padding: 3% 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin: 0;
  }
  
  div {
      color: blue;
  }
  
  </style>-->