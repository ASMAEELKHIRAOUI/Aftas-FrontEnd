import { Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { InsertResultsComponent } from './components/participant/participant.component';

export const routes: Routes = [
    { path: '', component: CompetitionComponent },
    { path: 'add-component', component: CreateCompetitionComponent },
    { path: 'register-member/:competitionCode', component: RegisterMemberComponent },
    { path: 'insert-results/:competitionCode', component: InsertResultsComponent }
];
