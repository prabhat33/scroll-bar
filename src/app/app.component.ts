import { Component, AfterViewInit } from '@angular/core';

import {customScrollBar}  from 'aacha-wala-scroll-for-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll-bar-demo';

  constructor(){

  }
  ngAfterViewInit(){
    customScrollBar.scroll(document.getElementById("container"));

  }

}
