<template>
    <div>
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
        <ul>
            <li v-for="user in users">{{user.name}} -{{user.email}} </li>
        </ul>
        <form class="container" v-on:submit.prevent="addUser">

            <div class="field">
                <p class="control">
                    <input class="input is-info" type="text" placeholder="Name" v-model="newUser.name">
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <input class="input is-primary" type="text" placeholder="Email" v-model="newUser.email">
                </p>
            </div>
            <div class="field is-grouped">
                <p class="control">
                    <button type="submit" class="button is-primary">Submit</button>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    import {db} from '@/fb.js'
    let usersRef = db.ref('test');
    export default {
        name: 'module-fb',
        data () {
            return {
                title: 'Firebase',
                subtitile: 'Работа с Firebase.',
                newUser: {
                    name: '',
                    email: ''
                }
            }
        },
        firebase: {
            users: {
                source: usersRef
            }
        },
        methods: {
            addUser: function () {
                usersRef.push(this.newUser)
                this.newUser.name = '';
                this.newUser.email = '';
            }
        }
    }
</script>