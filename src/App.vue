<template>
	<p><span class='number'>15</span> На рисунке – схема дорог, связывающих пункты A, B, C, D, E, F, G, H, I, J, K, L, M.</p>
	<div class='graph' v-html='graphSVG'></div>
	<p>{{task.question}}</p><br>
	<span class='hintButton' v-on:click='show = !show'>Ответ</span>
	<div v-if='show'>
		Рассчитаем число путей от начальной вершины до каждой из вершин<br><br>
		<DecisionTable v-bind:decision='task.decision'/><br>
		<span class='bolder'>Ответ:</span> {{task.answer}}
	</div>
</template>

<script>
import graph from './task.js'
import DecisionTable from './components/DecisionTable.vue'

export default {
	created() {
		/*global Viz*/
		this.graphSVG = Viz(graph.dot,{format:'svg', engine: "neato" })
	},
	components:{DecisionTable},
	name: 'App',
	data() {
		return {
			show: false,
			task: graph.task,
			graphSVG: ''
		}
	}
}
</script>

<style>
body {
  font-size: 1.5em;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: sans-serif;
  padding: 20px;
}

p {
  text-align: justify;
}

.number {
  border: 2px solid;
  padding: 4px;
  font-weight: bolder;
}

.graph{
   padding-top: 10px;
   padding-bottom: 10px;
   text-align: center;
}

.hintButton {
  color: #0066B3;
  cursor: pointer;
  font-weight: bolder;
  border-bottom: 2px dashed;
}

.bolder {
   font-weight: bolder;
}

.decision td {
   padding-left: 10px;
   padding-right: 10px;
   border: 1px solid black;
   text-align: center;
}
</style>
