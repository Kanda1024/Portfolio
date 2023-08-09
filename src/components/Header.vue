<template>
    <v-app>
        <header>
            <div class="row">
                <v-tab v-for="(menu) in menu_list" :key="menu.id" v-scroll-to="menu.scrollTo">
                    <v-icon> {{ menu.icon }}</v-icon>    {{ menu.name }} 
                </v-tab> 
            </div>
        </header>
    </v-app>
</template>

<script>
  export default {
        data () {
            return {
                menu_list: [
                    {name: 'Home', id:"num1", scrollTo: '#home', icon: 'mdi-home'},
                    {name: 'Profile', id:"num2", scrollTo: '#profile', icon: 'mdi-account'},
                    {name: 'Skill', id:"num3", scrollTo: '#skill', icon: 'mdi-laptop'},
                    {name: 'Contact', id:"num4", scrollTo: '#contact', icon: 'mdi-card-account-mail'},
                ]
            }
        }
    }
</script>
  
<style scoped>
header {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}
header .row {
    text-align: right;
    align-items: center;
    justify-content: flex-end;
    margin: 1%;
}

header a {
    text-decoration: none;
    margin-left: 2em;
}

header a:hover {
    text-decoration: underline;
}

ul {
    display: flex;
    list-style: None;
}

li a  {
  /*color: #fff;*/
  display: block;
  font-size: 16px;
  padding: 5px 10px;
  text-decoration: none;
}


h1 {
    margin: 0;
    /*color: #fff;*/
}

</style>




