import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-weapons',
  templateUrl: './learn-weapons.component.html',
  styleUrls: ['./learn-weapons.component.css']
})
export class LearnWeaponsComponent implements OnInit {
  
   page=1;
  constructor() {}  

  ngOnInit() {
  }
  arr=[{'name':'AK-47','damage':100,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/m4a4.png'},
  {'name':'M4A4','damage':91,'recoil':51,'fire_rate':'51','mobility':40,'weapon_image':'../../assets/images/m4a4.png'},
  {'name':'AK-47','damage':100,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/ak.png'},
  {'name':'M4A1-S','damage':10,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/m4a1-s.png'}];
}
