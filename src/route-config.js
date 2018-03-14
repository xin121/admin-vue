import form from './components/form/form.vue'
import table from './components/table/table.vue'
import chart from './components/chars/shopchart.vue'
export default [
	{path: '/', component: form},
    {path: '/form', component: form},
    {path: '/table', component: table},
    {path: '/chart', component: chart}

]