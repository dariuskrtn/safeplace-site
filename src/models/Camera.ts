import Person from './Person';

export default class Camera {
    public guid : string = "";
    public ipAddress : string = "";
    public name : string = "";
    public posX : Number = 0;
    public posY : Number = 0;
    public status : CameraStatus = CameraStatus.Offline;
    public spottedPeople : Person[] = [];
}