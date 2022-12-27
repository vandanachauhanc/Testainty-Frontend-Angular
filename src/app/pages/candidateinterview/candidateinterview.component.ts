import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question/question.service';
import { CandidatetestsubmitService } from 'src/app/services/candidatesubmitedtest/candidatetestsubmit.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-candidateinterview',
  templateUrl: './candidateinterview.component.html',
  styleUrls: ['./candidateinterview.component.scss'],

})
export class CandidateinterviewComponent implements OnInit {


  getID: any;
  allQuestionData: any;
  candidateIdHold: any;
  filled_data: any = [];
  filled_data_hold: any = [];
  answere: any;


  constructor(private spinner: NgxSpinnerService,private _formBuilder: FormBuilder, private _router: Router, private _ActivatedRoute: ActivatedRoute, private _questionService: QuestionService, private _candidateTestSubmit: CandidatetestsubmitService, private _toseter:ToastrService ) {}


  timerDown!: number;

  ngOnInit(): void {
    this.spinner.show();

    this._ActivatedRoute.params.subscribe(params => {
      this.getID = params['id'] //log the value of id

    });

    this._questionService.displayQuestions(this.getID).subscribe((res: any) => {
      this.allQuestionData = res;
      console.log('this.allQuestionData', this.allQuestionData);
      this.timerDown = parseInt(this.allQuestionData?.test_duration_minutes);
      console.log('data._questionService', this.timerDown);
      // timer function call
      this.countdown("ten-countdown", this.timerDown, 0);
      this.spinner.hide();

    })

  }


  
   tempData:any = [] ;

  collectAnswere(customerGroup: any, answere: any) {

    this.tempData.push({question_id: customerGroup.question_id,
    level: customerGroup.level,
    question: customerGroup.question,
    skill: customerGroup.skill,
    answer: answere});
    console.log('this.filled_data', this.tempData);
    
    this.answere = '';
    // console.log('this.filled_data', this.filled_data);
    
  }
  
  formSubmit() {
    
    let obj = {
      candidate_id:this.allQuestionData?.candidate_id,
      question:this.tempData,
    }
    console.log('form submit filled_data', this.filled_data);

    // let data = this.filled_data;
    this._candidateTestSubmit.submitedTest(obj).subscribe((res:any) => {
      console.log('res submit test', res);
      this._toseter.success('Test Submitted Successfully', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    }, err => {
      console.log('Something wrong', err);
      this._toseter.error(err.msg, '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing'
        });
      });

    // this._router.navigate(['pages/test-result/', 7])

  }

  // timer start

  countdown(elementName: string, minutes: number, seconds: number) {

    var element: any, endTime: any, hours, mins, msLeft, time;

    function twoDigits(n: any) { return (n <= 9 ? "0" + n : n); }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();

    function updateTimer() {
      msLeft = endTime - (+new Date);

      if (msLeft < 1000) {
        element.innerHTML = "Time is up!";
      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
      }
    }
  }

  // timer close

}
