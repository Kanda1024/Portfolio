<template >
  <v-timeline>
    <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
      <v-card width="500pt">
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <br><p style="white-space: pre-line"> {{ item.text }} </p> 
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<!--
<script setup>
  const items = [
    {
      color: 'red-lighten-2',
      icon: 'mdi-star',
    },
    {
      color: 'purple-lighten-2',
      icon: 'mdi-book-variant',
    },
    {
      color: 'green-lighten-1',
      icon: 'mdi-airballoon',
    },
    {
      color: 'indigo-lighten-2',
      icon: 'mdi-layers-triple',
    },
  ]
</script>
-->

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
          title: '松江工業高等専門学校',
          text: 'プログラミングや情報工学の基礎について学ぶ。\n インターンシップでAmazon Alexaのアプリ開発を体験し、自然言語処理に興味を持つ。',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          title: '千葉大学',
          text: '3年次編入で入学。\n 4年次からは研究室に配属され、機械学習を用いた自然言語処理について研究。',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          title: '千葉大学院',
          text: 'あいうえお',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
          title: '現在(就活中)',
          text: 'あいうえお',
        },
      ],
    }),
  }
</script>