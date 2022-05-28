<template>
    <table class='decision' cellspacing="0">
		<tr class=bolder><td>Вершина</td><td>Входящие пути</td><td>Число путей</td></tr>
		<tr v-for='i in decision' :key="i">
            <td>{{i[0]}}</td><td>{{i[1]}}</td><td>{{i[2]}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name:'DesisionTable',
    props:['decision']
}
</script>