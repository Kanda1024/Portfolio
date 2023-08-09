<template>
  <v-app>
      <Header />
      <div id="home"><Home /></div>
      <div id="profile"><Profile /></div>
      <div id="skill"><Skill /></div>
      <div id="contact"><Contact /></div>
  </v-app>
</template>

<script>


import Header from "@/components/Header.vue"
import Home from "@/views/Home.vue"
import Profile from "@/views/Profile.vue"
import Skill from "@/views/Skill.vue"
import Contact from "@/views/Contact.vue"

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Profile,
    Skill,
    Contact,
  },
  /*
  data: () => ({
    nav_list: [
      {name: 'Home', scrollTo: '#home'},
      {name: 'Profile', scrollTo: '#profile'},
      {name: 'Skill', scrollTo: '#skill'},
      {name: 'Contact', scrollTo: '#contact'},
    ]
  }),*/
}
</script>
