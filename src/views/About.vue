<template>
    <div class="about">
        <h1 @click="onClick">
            {{ title }}
        </h1>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component({
    components: {},
})
export default class About extends Vue {
    private title = 'About Page'
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
