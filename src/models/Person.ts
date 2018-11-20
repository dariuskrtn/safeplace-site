import Camera from './Camera';

export default class Person {
    public guid : string = "";
    public name : string = "";
    public lastName : string = "";
    public allowedCameras : Camera[] = [];
}