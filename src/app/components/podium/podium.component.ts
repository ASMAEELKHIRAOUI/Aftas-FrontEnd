import { Component } from '@angular/core';
import { Ranking } from '../../models/ranking';
import { PodiumService } from '../../services/podium/podium.service';
import { Member } from '../../models/member';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {

  ranks: Ranking[] = [];
  members: Member[] = [];
  competitionCode: string = '';

  constructor(private podiumService: PodiumService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.competitionCode = params.get('competitionCode') || '';
    });

    this.podiumService.getRanking(this.competitionCode).subscribe((data: Ranking[]) => {
      const memberNumbers = data.map((ranking) => ranking.member);
      this.fetchMembersByNumbers(memberNumbers);
    })
  }

  fetchMembersByNumbers(numbers: number[]): void {
    this.members = [];

    numbers.forEach((number) => {
      this.podiumService.findMember(number).subscribe((members: Member[]) => {
        if (members && members.length > 0) {
          this.members.push(members[0]);
        }
      });
    });
  }

}
