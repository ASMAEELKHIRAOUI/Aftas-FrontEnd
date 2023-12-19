import { Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { HuntingComponent } from './components/hunting/hunting.component';

export const routes: Routes = [
    { path: '', component: CompetitionComponent },
    { path: 'add-component', component: CreateCompetitionComponent },
    { path: 'register-member/:competitionCode', component: RegisterMemberComponent },
    { path: 'participants/:competitionCode', component: ParticipantComponent },
    { path: 'participants/:competitionCode/hunting/:member', component: HuntingComponent }
];
