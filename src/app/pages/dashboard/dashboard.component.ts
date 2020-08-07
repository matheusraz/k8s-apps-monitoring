import { Component } from '@angular/core';
import { App } from './app';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  apps = [];
  loading = true;

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.service.getApps().then((response: any) => {
      if(response.status == '1') {
        response.msg.forEach(deploy => {
          this.apps.push(new App(deploy.Name, deploy.Status, deploy.AvailablePods, deploy.ImageVersion))
        });
        this.loading = false;
      }
    });
  }




}