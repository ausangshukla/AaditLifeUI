import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ScheduleApi } from '../../providers/schedule-api';
import { ResponseUtility } from '../../providers/response-utility';

import * as _ from 'lodash';

@Component({
  selector: 'schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetails  {

  schedule: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public scheduleApi: ScheduleApi,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public respUtility: ResponseUtility) {

    this.schedule = this.navParams.data;

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ScheduleDetails');
    this.respUtility.trackView("ScheduleDetails");
    // Always reload the schedule from the server for a fresh copy
    this.loadSchedule();
  }

  loadSchedule() {
    let loader = this.loadingController.create({
      content: 'Loading Schedule...'
    });

    loader.present();

    this.scheduleApi.getScheduleDetails(this.schedule.id).subscribe(
      response => {
        //this.respUtility.showSuccess("Loaded Schedule");
        this.schedule = response;
        console.log("Loaded schedule");
        console.log(this.schedule);
      },
      error => {
        this.respUtility.showFailure(error);
        loader.dismiss();
      },
      () => { loader.dismiss(); }
    );
  }
}
