<template>
    <div class="home">
        <div class="window">
            <div class="floor">
              
                floor
                <div>
                    <h4> {{floorName}} </h4>
                </div>
                <div>
                    <img alt = "Failed to upload floor image">
                </div>


            </div>
            <div class="navigation">
                navigation
                <div class="navigation-buttons">
                    <button v-on:click="ShowUpperFloor"> Previous floor </button>
                    <button v-on:click="ShowLowerFloor"> Next floor </button>
                </div>
                <hr/>
                <div>
                    <li v-for="floor in floorList" :key="floor.guid">
                       {{ floor.floorName }}
                    </li>
                </div>
                <hr/>
                <div>
                  <ul style="list-style: none;">
                    <li>Name: Surname:</li>
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

@Component({
  components: {
  },
})
export default class Home extends Vue {
    floorName: string = this.$store.state.floor.currentFloor.floorName;
    floorList = this.$store.state.floor.floorList;


    public data (){
    }

    public mounted() {
        alert("1")
        this.$store.dispatch('floor/load');
        alert("2")
        this.floorName = this.$store.state.floor.currentFloor.floorName;
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
