import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';
import { GoalDetails } from './goal-details';
import { GoalApi } from '../../providers/goal-api';

@Component({
  selector: 'goals',
  templateUrl: 'goals.html',
})
export class Goals {

  goals: any;
  goal: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public goal_api: GoalApi,
    public respUtility: ResponseUtility) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Goals');
    this.respUtility.trackView("Goals");
    let loader = this.loadingController.create({
      content: 'Loading Goals..'
    });

    loader.present();

    this.goal_api.getGoals().subscribe(
      goals => {
        this.goals = goals;
        console.log("Loaded goals");
        console.log(goals);
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );

  }

  getGoalDetails(goal) {
    this.respUtility.trackEvent("Goal", "Details", "click");
    this.navCtrl.push(GoalDetails, goal);
  }

  getGoalText(name) {
    return this.goal_api.getGoalText(name);
  }
}
