import { Injectable } from '@angular/core';


@Injectable()
export class Config {

  private dev = {
    //API_URL: "http://192.168.0.9:3000",
    API_URL: "http://localhost:3000",
    ENV: "dev",
    GA_ID: 'UA-103042137-1'
  };

  private test = {
    API_URL: "http://localhost:3000",
    ENV: "test",
    GA_ID: 'UA-103042137-1'
  };

  private staging = {
<<<<<<< HEAD
    //API_URL: "http://18.188.32.153:3000",
    API_URL: "http://localhost:3000",
=======
    API_URL: "http://13.127.219.196:3000",
>>>>>>> 00baf1397da48fc3f2c541043a169f686e9b4582
    ENV: "prod",
    GA_ID: 'UA-103042137-1'
  };

  private prod = {
    API_URL: "https://production.aadit_life.co.uk",
    ENV: "prod",
    GA_ID: 'UA-103042137-1'
  };
  
  public props = this.staging;

  constructor() {
    
  }
  
}
