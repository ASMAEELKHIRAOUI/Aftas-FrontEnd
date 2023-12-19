import { CommonModule } from '@angular/common';
import { Competition } from '../../models/competition';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompetitionService } from '../../services/competition/competition.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxPaginationModule],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {

  competitions: Competition[] = [];
  currentcompetition: Competition = {};
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 8;
  pageSizes = [8, 12, 14];

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
      this.competitions = data;
    })
  }
  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrievecompetitions(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    console.log(params);
    this.competitionService.getCompetitionData(params)
      .subscribe(
        response => {
          const { competitions, totalCompetitions } = response;
          this.competitions = competitions;
          this.count = totalCompetitions;
          console.log(this.count);
          console.log(this.competitions);
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    console.log(event);
    this.page = event;
    this.retrievecompetitions();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievecompetitions();
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

  registerMember(competitionCode: string | undefined): void {
    if (competitionCode) {
      console.log('Competition Code:', competitionCode);
      this.router.navigate(['/register-member', competitionCode]);
    }
  }

  viewParticipants(competitionCode: string | undefined): void {
    if (competitionCode) {
      console.log('Competition Code:', competitionCode);
      this.router.navigate(['/participants', competitionCode]);
    }
  }

  viewPodium(competitionCode: string | undefined): void {
    if (competitionCode) {
      console.log('Competition Code:', competitionCode);
      this.router.navigate(['/podium', competitionCode]);
    }
  }

}
