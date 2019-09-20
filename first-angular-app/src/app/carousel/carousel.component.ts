import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import {CarouselModule} from "angular2-carousel";

@Component({  
  selector: 'app-carousel', 
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.css']  
})  
export class CarouselComponent implements OnInit {  
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnInit() {  
  }  
  
}  
