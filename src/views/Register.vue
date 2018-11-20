<template>
    <div id="register">
        <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
            <div v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Register extends Vue {
    public video : any;
    public canvas : any = null;
    public captures : any[] = [];

    public mounted() {

        this.video = this.$refs.video;
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.src = window.URL.createObjectURL(stream);
                this.video.play();
                stream.getVideoTracks()[0].stop();
            });
        }
    }

    public capture() {
        this.canvas = this.$refs.canvas;
        var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
        this.captures.push(this.canvas.toDataURL("image/png"));
    }

}
</script>


<style>
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
</style>