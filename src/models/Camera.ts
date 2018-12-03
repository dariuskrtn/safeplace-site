import Person from './Person';
import { CameraStatus } from '@/enum/CameraStatus';

export default class Camera {
    public guid : string = "";
    public ipAddress : string = "";
    public name : string = "";
    public positionX : Number = 0;
    public positionY : Number = 0;
    public status : CameraStatus = CameraStatus.Offline;
}