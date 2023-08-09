<template>

  <main>
    <h2>{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
        {{ item.title }} <br> {{ item.text }}

    </div>
  </main>

</template>

<script>
export default {
  data () {
    return {
        items: [
            {
                title: "2015年:松江高専 入学",
                text: "ああ\n"
            },
            {
                title: "千葉大学工学部 3年次編入",
                text: "かきくけこ"
            },
            {
                title: "千葉大学大学院",
                text: "さしすせそ"
            },
            {
                title: "千葉大学大学院",
                text: "あああああああああああああああああああああああああああああ"
            }
        ]
    }
  }
}
</script>


<style scoped>
/*
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
*/
</style>