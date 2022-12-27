import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackdoreentryGuard } from './../gurds/backdoreentry/backdoreentry.guard';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestioncreationComponent } from './questioncreation/questioncreation.component';
import { CandidateinterviewComponent } from './candidateinterview/candidateinterview.component';
import { TestevaluationComponent } from './testevaluation/testevaluation.component';

import { TestresultComponent } from './testresult/testresult.component';
import { AllresultComponent } from './allresult/allresult.component';
import { AllcandidatesComponent } from './allcandidates/allcandidates.component';
import { TestevalutioncandidatelistComponent } from './testevalutioncandidatelist/testevalutioncandidatelist.component';


const routes: Routes = [

  {
    path:'', component:PagesComponent,
    children:[
      {
        path:'candidate-profile', component:DashboardComponent,  canActivate: [BackdoreentryGuard] },

      {
        path:'question-creation', component:QuestioncreationComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'test-evaluation-list', component:TestevalutioncandidatelistComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'test-evaluation/:id', component:TestevaluationComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'test-result/:id', component:TestresultComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'all-testresult', component:AllresultComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'all-candidates', component:AllcandidatesComponent ,  canActivate: [BackdoreentryGuard]
      },
      {
        path:'candidate-interview/:id',  component:CandidateinterviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
