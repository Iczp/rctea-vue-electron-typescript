<template>
    <div class="about">
        <h1 @click="onClick">
            {{ title }}
            <!-- {{ userId }} -->
        </h1>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
// import { State } from 'vuex-class'
import axios from 'axios'

// @Component({
//     components: {},
// })
@Component
export default class About extends Vue {
    private title = 'About Page'
    // @State('userId') userId

    onClick(): void {
        axios
            .post('/api/services/app/client/Time', null, {
                baseURL: 'http://train.iczp.net',
            })
            .then((res) => {
                console.log('getWebSocketServer', res)
                window.alert(this.title)
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
</script>
