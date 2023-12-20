import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CHunting, Hunting } from '../../models/hunting';
import { HuntingService } from '../../services/hunting/hunting.service';
import { Fish } from '../../models/fish';
import { NotificationsService } from '../notifications/services/notifications.service';

@Component({
  selector: 'app-hunting',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hunting.component.html',
  styleUrl: './hunting.component.css'
})
export class HuntingComponent {

  hunts: Hunting[] = [];
  toSave: Hunting = new CHunting();
  competition: string = '';
  member: number = 0;
  memberString: string = '';
  fishes: Fish[] = [];

  constructor(private huntingService: HuntingService, private router: Router, private route: ActivatedRoute, private notificationService: NotificationsService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.competition = params.get('competitionCode') || '';
    });

    this.route.paramMap.subscribe(params => {
      this.memberString = params.get('member') || '';
      this.member = +this.memberString;
    });

    this.huntingService.getFishes().subscribe((data: Fish[]) => {
      this.fishes = data;
    })
  }

  onSubmit(){
    this.toSave.member = this.member;
    this.toSave.competition = this.competition;
    this.huntingService.addHunting(this.toSave).subscribe({
      next: data => {
        console.log(data?.data);
        this.notificationService.show(['Hunt added successfully'], 'success');
        this.onSuccessSave(data?.data);
      },
      error: (err)=>{
        console.log(err)
        this.notificationService.show(['Weight is less than average'], 'error');
      }
    })
  }

  onSuccessSave(hunting?: Hunting){
    if(hunting){
      this.hunts.push(hunting);
    }
  }
}
