import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';
import { FoodLogForm } from './food-log-form';
import { FoodLogApi } from '../../providers/food-log-api';
import moment from 'moment';

@Component({
  selector: 'food-logs',
  templateUrl: 'food-logs.html',
})
export class FoodLogs {

  food_logs: any;
  food_log: any;
  current_week = 0;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public food_logApi: FoodLogApi,
    public respUtility: ResponseUtility) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter FoodLogs');
    this.getFoodLogs(0);  
  }

  getFoodLogs(week) {

    this.current_week = this.current_week + week;
    this.respUtility.trackView("FoodLogs");
    let loader = this.loadingController.create({
      content: 'Loading FoodLogs..'
    });

    loader.present();

    this.food_logApi.getFoodLogs(this.current_week).subscribe(
      food_logs => {
        this.food_logs = food_logs;
        console.log("Loaded food_logs");
        console.log(food_logs);
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );
  }

  getFoodLogDetails(food_log) {
    this.respUtility.trackEvent("FoodLog", "Form", "click");
    this.navCtrl.push(FoodLogForm, food_log);
  }

  newFoodLog() {
    this.respUtility.trackEvent("FoodLog", "Form", "click");
    this.navCtrl.push(FoodLogForm, {intake_date: moment().format('YYYY-MM-DDTHH:mm')});
  }

}
