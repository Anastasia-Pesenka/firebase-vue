<template>
    <div >
        <section class="hero is-primary is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{title}}
                    </h1>
                    <h2 class="subtitle">
                        {{subtitile}}
                    </h2>
                </div>
            </div>
        </section>
        <div id="demo" class="container">
            <form id="search">
                <div class="field">
                    <p class="control has-icons-left">
                        <input name="query" v-model="searchQuery" class="input" placeholder="search ...">
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
            </form>
            <demo-grid
                    :data="gridData"
                    :columns="gridColumns"
                    :filter-key="searchQuery">
            </demo-grid>
        </div>
    </div>
</template>

<script>
    import grid from '@/components/partials/grid.vue'
    import axios from 'axios'

    export default {
        name: 'module-search',
        components: {
            'demo-grid': grid
        },
        mounted() {
            axios.get('/static/names.json')
                .then(response =>
                    this.gridData=response.data
                )
                .catch(function (error) {
                    console.log(error);
                });
        },

        data(){
            return {
                title: 'Simple dynamic search example',
                subtitile: 'Простой пример динамического поиска',
                searchQuery: '',
                gridColumns: ['name', 'power'],
                gridData: [
                ]
            }
        }
    }
</script>