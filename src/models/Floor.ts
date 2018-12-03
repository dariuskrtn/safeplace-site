import Camera from './Camera';

export default class Floor {
    public guid : string = "";
    public cameras : string[] = [];
    public floorName : string = "";
    public floorMapUri : string = "";

    //to create objects for testing
    constructor(message: string) {
        this.floorName = message;
    }
}