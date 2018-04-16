import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';

@Component({
  selector: 'cardio_profiles',
  templateUrl: 'cardio-profiles.html',
})
export class CardioProfiles {

  cardio_profiles: any;
  cardio_profile: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public respUtility: ResponseUtility) {
      this.cardio_profiles = navParams.data;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CardioProfiles');
    this.respUtility.trackView("CardioProfiles");
    let loader = this.loadingController.create({
      content: 'Loading CardioProfiles..'
    });
  }

}
