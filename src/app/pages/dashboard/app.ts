export class App {
    name: String = '';
    status: String = '';
    avPods: String = '';
    imageVersion: String = '';

    constructor(name, status, avPods, imageVersion) {
        this.name = name;
        this.status = status;
        this.avPods = avPods;
        this.imageVersion = imageVersion;
    }
    
}