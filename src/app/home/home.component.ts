import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides;
  constructor() {
   this.slides = [
     {image: '../assets/slide-home/1.jpg'},
     {image: '../assets/slide-home/2.jpg'},
     {image: '../assets/slide-home/3.jpg'},
     {image: '../assets/slide-home/4.jpg'},
     {image: '../assets/slide-home/5.jpg'}
    ];
  }

  ngOnInit(): void {
  }

}
