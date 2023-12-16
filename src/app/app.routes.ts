import { Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';

export const routes: Routes = [
    { path: '', component: CompetitionComponent },
    { path: 'add-component', component: CreateCompetitionComponent }
];
