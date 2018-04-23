import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { HomePage } from './home';
import { FoodLogs } from '../food-logs/food-logs';
import { Schedules } from '../schedules/schedules';

@Component({
    templateUrl: 'tabs.html'
  })
  export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    homeRoot = HomePage;
    foodLogRoot = FoodLogs;
    scheduleRoot = Schedules;
  
    constructor() {
  
    }
  }