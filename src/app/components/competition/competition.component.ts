import { CommonModule } from '@angular/common';
import { Competition } from './../../models/competition';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompetitionService } from '../../services/competition/competition.service';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {

  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
      this.competitions = data;
    })
  }

  compareDateWithCurrentDate(competitionDate: Date | undefined): number {
    if (competitionDate) {
      const dateObject = new Date(competitionDate);
      const currentDate = new Date();
      currentDate.setHours(1);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);
      if (dateObject.getTime() > currentDate.getTime()) return 1;
      else if (dateObject.getTime() == currentDate.getTime()) return 2;
      else return 3;
    }
    return 0;
  }

  registerMember(competitionCode: string | undefined): void{
    if (competitionCode) {
      console.log('Competition Code:', competitionCode);
      this.router.navigate(['/register-member', competitionCode]);
    }
  }

  viewParticipants(competitionCode: string | undefined): void{
    if (competitionCode) {
      console.log('Competition Code:', competitionCode);
      this.router.navigate(['/participants', competitionCode]);
    }
  }

}
