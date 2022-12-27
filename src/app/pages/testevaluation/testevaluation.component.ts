import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CandidatetestsubmitService } from '../../services/candidatesubmitedtest/candidatetestsubmit.service';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestevolutionService } from 'src/app/services/testevolution/testevolution.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-testevaluation',
  templateUrl: './testevaluation.component.html',
  styleUrls: ['./testevaluation.component.scss']
})
export class TestevaluationComponent implements OnInit {

  constructor(private _toseter: ToastrService, private spinner: NgxSpinnerService, private _router: Router, private _ActivatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _candidateSubmitTest: CandidatetestsubmitService, private _testEvolutionServices: TestevolutionService) { }


  allQuestionAndanswer: any = [];
  getID: any
  createNewObj: any = [];
  final_obj: any = [];
  easypoints = 0;
  moderatepoints = 0;
  hardpoints = 0;
  totalpoints = 0;
  candidateTestNotSubmit:boolean = false;

  ngOnInit(): void {

    this.spinner.show();

    this._ActivatedRoute.params.subscribe(params => {
      this.getID = params['id'] //log the value of id

      this._testEvolutionServices.testEvolution(this.getID).subscribe(res => {
        console.log('data res =>', res);
        this.allQuestionAndanswer = res;
        console.log(this.allQuestionAndanswer.questions.length)
        if(this.allQuestionAndanswer.questions.length === 0){
          this.candidateTestNotSubmit = true;
        }else{

        }
        // setTimeout(() => {
        this.spinner.hide();
        // }, 4000);
        console.log('allQuestionAndanswer', this.allQuestionAndanswer.questions.length)
      })
    });

  }




  submit(status: any, customerGroup: any) {

    // console.log('customerGroup',[customerGroup]);
    // const data_q = this.allQuestionAndanswer.questions;

    const data_q = [customerGroup];

    if (customerGroup.level === 'Easy' && status === 'correct') {
    
    for (let index = 0; index < data_q.length; index++) {
      
      // console.log('element =>', (index + 1));
          this.easypoints += 1;

        }
        this.totalpoints = this.moderatepoints + this.easypoints + this.hardpoints;

      }
      else if (customerGroup.level === 'Moderate' && status === 'correct') {
        for (let index = 0; index < data_q.length; index++) {
      
              this.moderatepoints += 2;
    
            }
            this.totalpoints = this.moderatepoints + this.easypoints + this.hardpoints;
    
      }
      else if (customerGroup.level === 'Hard' && status === 'correct') {

        for (let index = 0; index < data_q.length; index++) {
      
          this.hardpoints += 3;

        }
        this.totalpoints = this.easypoints + this.moderatepoints + this.hardpoints;

      }


      // Wronge ans code start 
      else if (customerGroup.level === 'Easy' && status === 'wrong') {

        for (let index = 0; index < data_q.length; index++) {
      
          this.easypoints -= 1;

        }
        this.totalpoints = this.easypoints + this.moderatepoints + this.hardpoints;

      }
      else if (customerGroup.level === 'Moderate' && status === 'wrong') {

        for (let index = 0; index < data_q.length; index++) {
      
          this.moderatepoints -= 2;

        }
        this.totalpoints = this.easypoints + this.moderatepoints + this.hardpoints;

      }
      else if (customerGroup.level === 'Hard' && status === 'wrong') {

        for (let index = 0; index < data_q.length; index++) {
      
          this.hardpoints -= 3;

        }
        this.totalpoints = this.easypoints + this.moderatepoints + this.hardpoints;

      }


    // if (customerGroup.level === 'Easy' && status === 'correct') {
      
    //   if (this.easypoints == 0) {
    //     this.easypoints = 1;
    //   }
    //   else if (this.easypoints == 1) {


    //     this.easypoints = 2;
    //   }
    //   else if (this.easypoints == 2) {

    //     this.easypoints = 3;
    //   }
    //   else if (this.easypoints == 3) {

    //     this.easypoints = 4;
    //   }
    //   else if (this.easypoints == 4) {

    //     this.easypoints = 5;
    //   }
    //   else if (this.easypoints == 5) {

    //     this.easypoints = 6;
    //   }
    //   else if (this.easypoints == 6) {

    //     this.easypoints = 7;
    //   }
    //   else if (this.easypoints == 7) {

    //     this.easypoints = 8;
    //   }
    //   else if (this.easypoints == 8) {

    //     this.easypoints = 9;
    //   }
    //   else if (this.easypoints == 9) {

    //     this.easypoints = 10;
    //   }

    //   this.totalpoints = this.moderatepoints + this.easypoints;

    // }
    // else if (customerGroup.level === 'Moderate' && status === 'correct') {

    //   if (this.moderatepoints == 0) {

    //     this.moderatepoints = 2;
    //   }
    //   else if (this.moderatepoints == 2) {

    //     this.moderatepoints = 4;
    //   }

    //   else if (this.moderatepoints == 4) {

    //     this.moderatepoints = 6;
    //   }
    //   else if (this.moderatepoints == 6) {

    //     this.moderatepoints = 8;
    //   }
    //   else if (this.moderatepoints == 8) {

    //     this.moderatepoints = 10;
    //   }
    //   else if (this.moderatepoints == 10) {

    //     this.moderatepoints = 12;
    //   }
    //   else if (this.moderatepoints == 12) {

    //     this.moderatepoints = 14;
    //   }
    //   else if (this.moderatepoints == 14) {

    //     this.moderatepoints = 16;
    //   }
    //   else if (this.moderatepoints == 16) {

    //     this.moderatepoints = 18;
    //   }
    //   else if (this.moderatepoints == 18) {

    //     this.moderatepoints = 20;
    //   }

    //   this.totalpoints = this.easypoints + this.moderatepoints;

    // }
    // else if (customerGroup.level === 'Hard' && status === 'correct') {

    //   if (this.hardpoints == 0) {

    //     this.hardpoints = 3;
    //   }
    //   else if (this.hardpoints == 3) {

    //     this.hardpoints = 6;
    //   }

    //   else if (this.hardpoints == 6) {

    //     this.hardpoints = 9;
    //   }
    //   else if (this.hardpoints == 9) {

    //     this.hardpoints = 12;
    //   }
    //   else if (this.hardpoints == 12) {

    //     this.hardpoints = 15;
    //   }
    //   else if (this.hardpoints == 15) {

    //     this.hardpoints = 18;
    //   }
    //   else if (this.hardpoints == 18) {

    //     this.hardpoints = 21;
    //   }
    //   else if (this.hardpoints == 21) {

    //     this.hardpoints = 24;
    //   }

    //   this.totalpoints = this.easypoints + this.moderatepoints + this.hardpoints;

    // }
    
    // else if (customerGroup.level === 'Easy' && status === 'wrong') {
    //   if (this.easypoints == 0) {

    //     this.easypoints = 0;
    //   }
    //   else if (this.easypoints == 1) {


    //     this.easypoints = 0;
    //   }

    //   else if (this.easypoints = 2) {

    //     this.easypoints = 1;
    //   }
    //   else if (this.easypoints = 3) {

    //     this.easypoints = 2;
    //   }
    //   else if (this.easypoints = 4) {

    //     this.easypoints = 3;
    //   }
    //   else if (this.easypoints = 5) {

    //     this.easypoints = 4;
    //   }

    //   this.totalpoints = this.moderatepoints + this.easypoints + this.hardpoints;
    // }
    // else if(customerGroup.level === 'Moderate' && status === 'wrong'){
    //   if (this.moderatepoints == 0) {

    //     this.moderatepoints = 0;
    //   }
    //   else if (this.moderatepoints == 2) {


    //     this.moderatepoints = 0;
    //   }

    //   else if (this.moderatepoints = 4) {

    //     this.moderatepoints = 2;
    //   }
    //   else if (this.moderatepoints = 6) {

    //     this.moderatepoints = 4;
    //   }
    //   else if (this.moderatepoints = 8) {

    //     this.moderatepoints = 6;
    //   }
    //   else if (this.moderatepoints = 10) {

    //     this.moderatepoints = 8;
    //   }
    //   else if (this.moderatepoints = 12) {

    //     this.moderatepoints = 10;
    //   }
    //   else if (this.moderatepoints = 14) {

    //     this.moderatepoints = 12;
    //   }

    //   this.totalpoints = this.moderatepoints + this.easypoints + this.hardpoints;
    // }
    // else if(customerGroup.level === 'Hard' && status === 'wrong'){
    //   if (this.hardpoints == 0) {

    //     this.hardpoints = 0;
    //   }
    //   else if (this.hardpoints == 3) {


    //     this.hardpoints = 0;
    //   }

    //   else if (this.hardpoints = 6) {

    //     this.hardpoints = 3;
    //   }
    //   else if (this.hardpoints = 9) {

    //     this.hardpoints = 6;
    //   }
    //   else if (this.hardpoints = 12) {

    //     this.hardpoints = 9;
    //   }
    //   else if (this.hardpoints = 15) {

    //     this.hardpoints = 12;
    //   }
    //   else if (this.hardpoints = 18) {

    //     this.hardpoints = 15;
    //   }
    //   else if (this.hardpoints = 21) {

    //     this.hardpoints = 18;
    //   }

    //   this.totalpoints = this.moderatepoints + this.easypoints + this.hardpoints;
    // }

    let obj = {
      question_id: customerGroup.question_id,
      level: customerGroup.level,
      answer: customerGroup.answer,
      answer_status: status,
      // points:this.totalpoints
    }

    this.createNewObj.push(obj)
    // console.log('obj', obj);
  }


  finalSubmit() {

    let finalObj = {
      question: this.createNewObj,
      candidate_id: this.allQuestionAndanswer?.candidate_id
    }
    console.log('createNewObj', finalObj)
    this._testEvolutionServices.testEvolutionSubmit(finalObj).subscribe((res: any) => {
      console.log('testEvolutionSubmit res =>', res);
      this._toseter.success('Submitted Successfully', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    }, err => {
      // console.log('sothing went wrong', err);
      this._toseter.error('sothing went wrong', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    })

    this._router.navigate(['pages/test-result', this.getID]); 
  }

}
