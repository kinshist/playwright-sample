<script setup>
import { ref,computed } from 'vue';

const currentArea = ref('選択してください')

const areas = [
  '北海道','東北','関東','関西'
]

const hokkaido = ['北海道']
const touhoku = ['青森県','秋田県','岩手県','山形県','宮城県','福島県']
const kanto = ['東京都','栃木県','茨城県','群馬県','埼玉県','千葉県','神奈川県']

const currentPrefs = computed(() => {
  if(currentArea.value === '北海道') return hokkaido
  if(currentArea.value === '東北') return touhoku
  if(currentArea.value === '関東') return kanto
  return false;
})
const unEntry = computed(()=>{
  if(!currentPrefs.value && currentArea.value === '関西') return true;
  return false
})
</script>

<template>
  <div>
    <h1>エリアを選択してください。</h1>
    <select v-model="currentArea">
      <option value="選択してください">選択してください</option>
      <option v-for="area in areas" :key="area">{{area}}</option>
    </select>
    <h1>都道府県</h1>
    <ul v-if="currentPrefs" class="prefList">
      <li v-for="pref in currentPrefs" :key="pref">{{pref}}</li>
    </ul>
    <p v-if="unEntry" class="error">都道府県が未登録です。</p>
  </div>
</template>

<style>
p{color: red;}
</style>