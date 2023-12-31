import { CRanking, Ranking } from './../../models/ranking';
import { Component } from '@angular/core';
import { Member } from '../../models/member';
import { RegisterMemberService } from '../../services/register-member/register-member.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { NotificationsService } from '../notifications/services/notifications.service';

@Component({
  selector: 'app-register-member',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.css'
})
export class RegisterMemberComponent {

  members: Member[] = [];
  rankings: Ranking[] = [];
  competitionCode: string = '';
  searchControl = new FormControl();

  constructor(private register_member: RegisterMemberService, private route: ActivatedRoute, private router: Router, private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.competitionCode = params.get('competitionCode') || '';
    });

    this.register_member.getMembers().subscribe((data: Member[]) => {
      this.members = data;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm.length <= 0)
        this.register_member.getMembers().subscribe((data: Member[]) => {
            this.members = data;
          });
      else
        this.register_member.searchByCriteria(searchTerm).subscribe((data: Member[]) => {
            this.members = data;
          });
    });
  }

  registerMember(member: number): void{
    this.register_member.registerMember(new CRanking(member, this.competitionCode)).subscribe({
      next: data => {
        this.onSuccessSave(data?.data);
        this.notificationService.show(['Member added successfully'], 'success');
      },
      error: (err)=>{
        console.log(err)
        this.notificationService.show(['Member already registered'], 'error');
      }
    })
  }

  onSuccessSave(ranking?: Ranking){
    if(ranking){
      this.rankings.push(ranking);
    }
  }

  addMember(){
    this.router.navigate(['/add-member', this.competitionCode]);
  }
}
