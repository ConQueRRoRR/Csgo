import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WeaponServiceService } from '../weapon-service.service';
@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  arr:any={};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ws: WeaponServiceService) { }

  ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.ws.updateData(params['id']).subscribe(res => {
  //       this.arr = res;
  //   });
  // });
  }
  up_data(weapon_name, weapon_damage, weapon_recoil,weapon_FireRate,weapon_mobility,) {
    this.route.params.subscribe(params => {
       this.ws.up_data(weapon_name, weapon_damage, weapon_recoil,weapon_FireRate,weapon_mobility, params['id']);
       this.router.navigate(['dashboard']);
 });
  

}
}
