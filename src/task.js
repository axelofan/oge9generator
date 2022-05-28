function rnd(p){ return Math.random()<p}
function rndArr(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function forEach(obj,call) {Object.keys(obj).forEach(call)}

/*Построение графа*/

function generateGraph1() {
	//указываются точки, ИЗ которых можно попасть в данную вершину
	let paths = {B:['A'],C:['A'],D:['A'],E:['A'],F:['B'],G:['C'],H:['D'],I:['E'],J:['F','K'],K:['G','H'],L:['I','K'],M: ['J','L']}
   
   //Добавление случайных путей на граф
   let randomPath = ['BC','CD','DE','FG','GH','HI']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[0]].push(a[1])})
   randomPath = ['CF,BG','CH,DG','EH,DI','FK,GJ','HL,IK','KM,LJ']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[4]].push(a[3])})
   
   //Запись графа
	let vertices = []
	forEach(paths, to=>{paths[to].forEach(from => vertices.push(`${from}->${to}`) )})
	let dot = `strict digraph{node[shape=circle];A[pos="0,1.5!"];B[pos="1.5,3!"];C[pos="2.25,2!"];D[pos="2.25,1!"];E[pos="1.5,0!"];F[pos="3.25,3!"];G[pos="4,2!"];H[pos="4,1!"];I[pos="3.25,0!"];J[pos="6.25,2.5!"];K[pos="5.5,1.5!"];L[pos="6.25,0.5!"];M[pos="7,1.5!"];${vertices.join('\n')}}`
   
   return {paths,dot}
}

function generateGraph2() {
	//указываются точки, ИЗ которых можно попасть в данную вершину
	let paths = {B:['A'],C:['A'],D:['A'],E:['A'],F:['B'],G:['C','D'],H:['E'],I:['F'],J:['G'],K:['H'],L:['I'],M: ['J','K','L']}
   
   //Добавление случайных путей на граф
   let randomPath = ['BC','CD','DE','FG','GH','IJ','JK']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[0]].push(a[1])})
   randomPath = ['CF,BG','DH,EG','FJ,GI','GK,HJ','JL,IM']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[4]].push(a[3])})
   
   //Запись графа
	let vertices = []
	forEach(paths, to=>{paths[to].forEach(from => vertices.push(`${from}->${to}`) )})
	let dot = `strict digraph{node[shape=circle];A[pos="0,1.5!"];B[pos="1.5,3!"];C[pos="1.5,2!"];D[pos="1.5,1!"];E[pos="1.5,0!"];F[pos="3,2.5!"];G[pos="3,1.5!"];H[pos="3,0.5!"];I[pos="4.5,2.5!"];J[pos="4.5,1.5!"];K[pos="4.5,0.5!"];L[pos="6,2!"];M[pos="6,1!"];${vertices.join('\n')}}`
   
   return {paths,dot}
}

function generateGraph3() {
	//указываются точки, ИЗ которых можно попасть в данную вершину
	let paths = {B:['A'],C:['A'],D:['A'],E:['B','C'],F:['D'],G:['B','E'],H:['F'],I:['D','F'],J:['H'],K:['I','J'],L:['G','J'],M: ['L','K']}
   
   //Добавление случайных путей на граф
   let randomPath = ['BC','CD','EF','GH','HI']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[0]].push(a[1])})
   randomPath = ['DE,CF','EH,FG','GJ,HL','IJ,HK','JM,LK']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[4]].push(a[3])})
   
   //Запись графа
	let vertices = []
	forEach(paths, to=>{paths[to].forEach(from => vertices.push(`${from}->${to}`) )})
	let dot = `strict digraph{node[shape=circle];A[pos="0,1.5!"];B[pos="1.5,2.5!"];C[pos="1.5,1.5!"];D[pos="1.5,0.5!"];E[pos="2.75,2!"];F[pos="2.75,1!"];G[pos="4,2.5!"];H[pos="4,1.5!"];I[pos="4,0.5!"];J[pos="5.5,1.5!"];K[pos="6.25,0.5!"];L[pos="6.25,2.5!"];M[pos="7,1.5!"];${vertices.join('\n')}}`
   
   return {paths,dot}
}

function generateGraph4() {
	//указываются точки, ИЗ которых можно попасть в данную вершину
	let paths = {B:['A'],C:['A'],D:['A'],E:['B'],F:['C'],G:['F','H'],H:['C'],I:['D'],J:['I'],K:['G','J'],L:['E'],M: ['K','L']}
   
   //Добавление случайных путей на граф
   let randomPath = ['BC','CD','EF','HI','GL','GJ']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[0]].push(a[1])})
   randomPath = ['BF,CE','CI,DH','HF,CG','EG,FL','IG,HJ','LK,GM']
   randomPath.forEach(a=>{if(rnd(0.5)) paths[a[1]].push(a[0]); else paths[a[4]].push(a[3])})
   
   //Запись графа
	let vertices = []
	forEach(paths, to=>{paths[to].forEach(from => vertices.push(`${from}->${to}`) )})
	let dot = `strict digraph{node[shape=circle];A[pos="0,1.5!"];B[pos="1.5,2.5!"];C[pos="1.5,1.5!"];D[pos="1.5,0.5!"];E[pos="2.75,3!"];F[pos="2.75,2!"];G[pos="4,1.5!"];H[pos="2.75,1!"];I[pos="2.75,0!"];J[pos="4,0!"];K[pos="5.25,1!"];L[pos="4,3!"];M[pos="5.25,2!"];${vertices.join('\n')}}`
   
   return {paths,dot}
}

let generator = rndArr([generateGraph1,generateGraph2,generateGraph3,generateGraph4])
let graph = generator()

/*Постановка вопроса, подсчёт числа путей и запись решения*/
function f(start, end, not) {
	if (end==start) return 1
   else if (end=='A' || end==not) return 0
   else {
       let count = 0
       graph.paths[end].forEach(el=>{count+=f(start,el,not)})
       return count;
   }
}

let a = rndArr('BCDEFGHIJKL')
let q = `Сколько существует различных путей из пункта А в пункт M`
let d = [['A','-',1]]

if(rnd(0.1)) {
   forEach(graph.paths, el=>{d.push( [el, graph.paths[el].join(', '), f('A',el)] )})
   graph.task = {question:`${q}?`,answer:f('A','M'), decision:d}
}
else if(rnd(0.5)){
   forEach(graph.paths, el=>{d.push( [el, graph.paths[el].join(', '), f('A',el,a)] )})
	graph.task = {question:`${q}, не проходящих через пункт ${a}?`,answer:f('A','M',a),decision:d}
}
else {
   forEach(graph.paths, el=>{if(f(el,a)>0)d.push( [el, graph.paths[el].join(', '), f('A',el)] )})
   let k = f('A',a)
   forEach(graph.paths, el=>{if(f(a,el)>0&&a!=el)d.push([el,graph.paths[el].join(', '),f(a,el)*k])})
	graph.task = {question:`${q}, проходящих через пункт ${a}?`,answer:f('A',a)*f(a,'M'),decision:d}
}

export default graph