<template>
    <div id="register">
        <div class="row">
            <div class="col-md-4">
                <video ref="video" id="video" width="640" height="480" autoplay></video>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-4">Name:</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-4">Last Name:</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-4">Allowed Cameras:</div>
                    <div class="col-md-6">
                        <select class="form-control" multiple style="height: 150px">
                            <option v-for="cam in cameras" v-bind:value="cam.value">
                                {{ cam.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <h6>Pictures:</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-default" id="snap" v-on:click="toggleCamera()">{{ isCameraPlaying ? "Turn camera off" : "Turn camera on" }}</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                <button :disabled="captures.length >= picturesRequired" class="btn btn-default" id="snap" v-on:click="capture()">Snap Photo</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                <button :disabled="captures.length < picturesRequired" class="btn btn-success" id="snap" v-on:click="savePerson()">Save Person</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                Pictures: {{ captures.length }} / {{ picturesRequired }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div v-for="c in captures" class="col-md-3">
                                <img v-bind:src="c" height=50 />
                                <br><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Camera from '@/models/Camera';

@Component({})
export default class Register extends Vue {
    public name : string = "";
    public lastName : string = "";
    public cameras : Camera[] = this.$store.state.camera.cameraList;
    public isCameraPlaying : boolean = false;
    public picturesRequired : number = 10;


    public video : any;
    public stream : MediaStream|null = null;
    public canvas : any = null;
    public captures : any[] = [];

    public mounted() {
        this.video = this.$refs.video;
    }

    public toggleCamera() {
        if (this.isCameraPlaying) this.stopCamera();
        else this.startCamera();
        this.isCameraPlaying = !this.isCameraPlaying;
    }
    public startCamera() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.src = window.URL.createObjectURL(stream);
                this.video.play();
                this.stream = stream;
            });
        }
    }
    public stopCamera() {
        if (this.stream != null && this.stream.active) {
            this.stream.getVideoTracks()[0].stop();
        }
    }

    public capture() {
        this.canvas = this.$refs.canvas;
        var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
        this.captures.push(this.canvas.toDataURL("image/png"));
    }

    public savePerson() {
        //TODO: this
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