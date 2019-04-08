import { Component, OnInit } from '@angular/core';
import { weaponClass } from '../weaponClass';
import { WeaponServiceService } from '../weapon-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-dashboard-input',
  templateUrl: './dashboard-input.component.html',
  styleUrls: ['./dashboard-input.component.css']
})
export class DashboardInputComponent implements OnInit {
weapon_name:string;
weapon_damage:string;
  weapon_mobility:String;
  weapon_FireRate:String;
  weapon_recoil:String;
  arr:weaponClass[];
  constructor(private ws:WeaponServiceService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.ws.getdata().subscribe((data: weaponClass[]) => {this.arr = data;});
  }
  add_data(){
    this.ws
    .add_data(this.weapon_name,this.weapon_damage,this.weapon_recoil,this.weapon_FireRate,this.weapon_mobility);
  }
  
  deleteData(id) {
    this.ws.deleteData(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  // update_data(id){
  //   this.ws.up_data(this.weapon_name,this.weapon_damage,this.weapon_recoil,this.weapon_FireRate,this.weapon_mobility,id);
  //   console.log(id);
  //   this.router.navigate(['update']);
    
  // }
}
