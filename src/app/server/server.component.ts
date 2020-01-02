import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverName = "Ak";
    serverPID = 55;
    serverStatus = "Unknown";
    serverStatusFlag = false;
    buttonStatus = true;
    constructor() {
        setTimeout(() => {
            this.buttonStatus = false;
        }, 2500);
    }
    toggleServerStatus() {
        this.serverStatusFlag = !this.serverStatusFlag;
        if (this.serverStatusFlag === true) {
            this.serverStatus = "Online";
        } else {
            this.serverStatus = "Offline";
        }
        return this.serverStatus;
    }
}