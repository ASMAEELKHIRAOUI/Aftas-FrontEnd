import { Component } from '@angular/core';
import { CCompetition, Competition } from '../../models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-competition',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-competition.component.html',
  styleUrl: './create-competition.component.css'
})
export class CreateCompetitionComponent {

  competitions: Competition[] = [];
  toSave: Competition = new CCompetition();

  constructor(private competitionService: CompetitionService, private router: Router){}

  onSubmit(){
    this.competitionService.addCompetition(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.data);
        this.router.navigate(['/']);
      },
      error: (err)=>{console.log(err)}
    })
  }

  onSuccessSave(competition?: Competition){
    if(competition){
      this.competitions.push(competition);
    }
  }

}
