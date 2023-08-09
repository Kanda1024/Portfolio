<template>
    <header>
        <div class="row">
            <router-link to="/" v-scroll-to="'#HOME'">Home</router-link>
            <router-link to="/profile" v-scroll-to="'#profile'">Profile</router-link>
            <router-link to="/contact" v-scroll-to="'#contact'">Contact</router-link>
        </div>
    </header>
</template>

<script>
  export default {
        data () {
            return {
                text: "ヘッダー"
            }
        }
    }
</script>
  
<style scoped>
header {
    padding: 1.8em 5%;
    background: #e7b797;
}
header .row {
    text-align: right;
}

header a {
    color: #fff;
    text-decoration: none;
    margin-left: 2em;
}

header a:hover {
    text-decoration: underline;
}

h1 {
    margin: 0;
    color: #fff;
}
</style>