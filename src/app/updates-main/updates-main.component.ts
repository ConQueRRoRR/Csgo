import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates-main',
  templateUrl: './updates-main.component.html',
  styleUrls: ['./updates-main.component.css']
})
export class UpdatesMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollTo(el:HTMLElement)
  {
    el.scrollIntoView({behavior: "smooth"});
  }
}
