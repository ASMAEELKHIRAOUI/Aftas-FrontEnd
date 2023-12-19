import { CMember, Member } from './../../models/member';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RegisterMemberService } from '../../services/register-member/register-member.service';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {

  members: Member[] = [];
  toSave: Member = new CMember(0);
  competitionCode: string = '';

  constructor(private registerMemberService: RegisterMemberService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.competitionCode = params.get('competitionCode') || '';
    });
  }

  onSubmit(){
    this.registerMemberService.addMember(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.data);
        this.router.navigate(['/register-member/', this.competitionCode]);
      },
      error: (err)=>{console.log(err)}
    })
  }

  onSuccessSave(member?: Member){
    if(member){
      this.members.push(member);
    }
  }

  cancel(){
    this.router.navigate(['/register-member/', this.competitionCode]);
  }
}
