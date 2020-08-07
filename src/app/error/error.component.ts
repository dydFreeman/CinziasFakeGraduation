import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var toolbar = document.getElementById("toolbar");
    toolbar.style.display = "none";
    var container = document.getElementById("container");
    container.style["justifyContent"] = "center";
    container.style.background = "#95c2de";
  }

}
