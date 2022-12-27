import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AllresultService } from 'src/app/services/allresult/allresult.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { TestevolutionService } from 'src/app/services/testevolution/testevolution.service';

@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.scss']
})


export class TestresultComponent implements OnInit {

  
  resultStatusForm!:FormGroup;

  constructor( private _roter: Router, private _candidateResultService:TestevolutionService, private _toseter: ToastrService ,private spinner: NgxSpinnerService, private _ActivatedRoute: ActivatedRoute,private _formBuilder: FormBuilder, private _resultService:AllresultService) {

    this.resultStatusForm = this._formBuilder.group({
      test_result: ['', Validators.required]
    });

  }

  getID:any;
  result_data:any = [];
  skills_data = []
  ngOnInit(): void {
    this.spinner.show();

    this._ActivatedRoute.params.subscribe(params => {
      this.getID = params['id'] //log the value of id
      this._resultService.singleResult(this.getID).subscribe((res:any) => {
        console.log('id =>' , res);
        this.result_data = res;
        this.skills_data = this.result_data?.skills_scored;
        this.spinner.hide();
      })
      
    })
  }

  submitCandidateResult(){

    console.log('resultStatusForm', this.resultStatusForm.value);
    
    const obj  = {
      
      test_result: this.resultStatusForm.value.test_result,
      candidate_id:this.getID
    }
    
    console.log('obj', obj);
    this._candidateResultService.candidateTestReviewSubmit(obj).subscribe((res:any) => {
      console.log('res => ', res);

        this._toseter.success(res.msg, '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing'
        });
    this._roter.navigateByUrl('pages/all-candidates'); 
      
      
    }, err => {
      this._toseter.error(err, '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing'
        });
      
    })
  }
} 
