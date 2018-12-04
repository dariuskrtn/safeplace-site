<template>
    <div id="home">
        <div class="window">
            <div class="floor">
              
                floor
                <div>
                    <h4> {{currentFloorName}} </h4>
                </div>
                <div>
                    <img alt = "Failed to upload floor image">
                </div>


            </div>
            <div class="navigation">
                navigation
                <div class="navigation-buttons">
                    <button v-on:click="ShowUpperFloor()"> Previous floor </button>
                    <button v-on:click="ShowLowerFloor()"> Next floor </button>
                </div>
                <hr/>
                <div>
                    <li v-for="floor in floorList" :key="floor.guid">
                       {{ floor.name }}
                    </li>
                </div>
                <hr/>
                <div>
                    Hovered camera spotted people:
                  <ul style="list-style: none;">
                    <li><pre>Name, Surname:</pre></li>
                    <li v-for="person in spottedPeople" :key="person.guid">
                      
                       {{ person.name }} {{person.lastName}}
                       
                    </li>
                  </ul>
                </div>
            </div>
              

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store/store';
import Camera from '@/models/Camera';
import Floor from '@/models/Floor';

@Component({})
export default class Home extends Vue {
    
    public floorList: Floor[] = this.$store.state.floor.floorList;
    public currentFloor: Floor = this.$store.state.floor.currentFloor;
    //when putting currentFloor.name it destroys page when currentFloor is null
    public currentFloorName: string = this.currentFloor.name;
    //public something: Floor = this.floorList[0];
    
    public ShowUpperFloor(){
        //this.$store.state.floor.currentFloor;
        var index = this.$store.state.floor.floorList.indexOf(this.currentFloor);
        if (index > 0)
        this.currentFloor = this.$store.state.floor.currentFloor = this.$store.state.floor.floorList[index-1]; 
    }
   
    public ShowLowerFloor(){
        var index = this.$store.state.floor.floorList.indexOf(this.currentFloor);
        if (index < this.$store.state.floor.floorList.length-1)
        this.currentFloor = this.$store.state.floor.currentFloor = this.$store.state.floor.floorList[index+1]; 
    }

    public mounted() {
        //this.$store.dispatch('floor/load')
        
    }
    
    
}
</script>




<style>
    .navigation-buttons button {
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    }
    .window {
        display: flex;
        flex: 1 1 0%;
        flex-direction: row-reverse;
    }
    .floor {
        flex: 1 1 0%;
    }
    .navigation{
        flex: 0 2 30%;
        max-width: 420px;
        min-width: 200px;
    }

</style>
