import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateprofileService } from '../../services/candidateprofile/candidateprofile.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  candidateProfileForm!: FormGroup;
  generateUrlForTest: any;
  showUrl: boolean = false;

  constructor(private _fb: FormBuilder, private _toster: ToastrService, private _router: Router, private _candidateDataSendServices: CandidateprofileService) {

    this.candidateProfileForm = this._fb.group({

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['',  [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
      position_applied_for: ['', Validators.required],
      skillset: ['', Validators.required],
      experience_years: ['', Validators.required],
      experience_months: ['', Validators.required],
      test_duration_hours	: ['', Validators.required],
      test_duration_minutes: ['', Validators.required],
      test_date: ['', Validators.required]

    })
  }


  ngOnInit(): void {}


  candidateSubmit() {

    // console.log('candidate ProfileForm',this.candidateProfileForm.value)
    this.candidateProfileForm.value.skillset = this.candidateProfileForm.value.skillset.join(",");

    const test_date = this.candidateProfileForm.value.test_date;
    const InterviewDate = test_date.toString().split(' ');
    
   const final_date = InterviewDate[2]+"-"+InterviewDate[1]+"-"+InterviewDate[3]
    console.log('final_date', final_date);
    this.candidateProfileForm.value.test_date = final_date;
    console.log(' this.candidateProfileForm.value.test_date',  this.candidateProfileForm.value);

    this._candidateDataSendServices.candidateProfileData(this.candidateProfileForm.value).subscribe((data:any) => {
      this.showUrl = true
      this.generateUrlForTest = environment.localUrl+'pages/candidate-interview/'+data.candidate_id;
      console.log('generateUrlForTest', this.generateUrlForTest);
      this._toster.success(data.msg, '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      
    }, err => {
      console.log('question add error component', err);
      this._toster.error(err.message, '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing'
        });
      }
      
    )
  
  }

}
