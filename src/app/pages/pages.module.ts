import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule } from '../materialmodule/materialmodule';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { TimerpipePipe } from '../pipes/timerpipe.pipe';
import { NgxSpinnerModule } from "ngx-spinner";

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { QuestioncreationComponent } from './questioncreation/questioncreation.component';
import { CandidateinterviewComponent } from './candidateinterview/candidateinterview.component';
import { TestevaluationComponent } from './testevaluation/testevaluation.component';
import { TestresultComponent } from './testresult/testresult.component';
import { AllresultComponent } from './allresult/allresult.component';
import { AllcandidatesComponent } from './allcandidates/allcandidates.component';
import { TestevalutioncandidatelistComponent } from './testevalutioncandidatelist/testevalutioncandidatelist.component';
import { LoaderComponent } from './loader/loader.component';
import { BackdoreentryGuard } from '../gurds/backdoreentry/backdoreentry.guard';


@NgModule({
  declarations: [PagesComponent,TimerpipePipe, DashboardComponent, HeaderComponent, QuestioncreationComponent, CandidateinterviewComponent, TestevaluationComponent, TestresultComponent, AllresultComponent, AllcandidatesComponent, TestevalutioncandidatelistComponent, LoaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule, ReactiveFormsModule,
  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[
    BackdoreentryGuard,
    
  ]
})
export class PagesModule { }
