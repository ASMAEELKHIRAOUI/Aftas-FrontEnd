import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member';
import { CommonModule } from '@angular/common';
import { Ranking } from '../../models/ranking';
import { ParticipantService } from '../../services/participant/participant.service';

@Component({
  selector: 'app-insert-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {

  members: Member[] = [];

  competitionCode: string = '';

  constructor(private participant: ParticipantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.competitionCode = params.get('competitionCode') || '';
    });

    this.participant.getParticipants(this.competitionCode).subscribe(
      (data: Ranking[]) => {
        const memberNumbers = data.map((ranking) => ranking.member);

        this.fetchMembersByNumbers(memberNumbers);
      }
    );

  }


  fetchMembersByNumbers(numbers: number[]): void {
    this.members = [];

    numbers.forEach((number) => {
      this.participant.findMember(number).subscribe((members: Member[]) => {
        if (members && members.length > 0) {
          this.members.push(members[0]);
        }
      });
    });
  }

}
