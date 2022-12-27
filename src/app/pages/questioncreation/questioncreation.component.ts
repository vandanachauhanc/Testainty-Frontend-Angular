import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-questioncreation',
  templateUrl: './questioncreation.component.html',
  styleUrls: ['./questioncreation.component.scss']
})
export class QuestioncreationComponent implements OnInit {

  QuestionCreationForm!: FormGroup;
  toppingList: string[] = ['Easy', 'Moderate', 'Hard'];

  constructor(private _fb: FormBuilder, private _toster: ToastrService, private _questionCreationSer: QuestionService) {

    this.QuestionCreationForm = this._fb.group({
      skill: ['', Validators.required],
      level: ['', Validators.required],
      question: ['', Validators.required]
    })

  }


  ngOnInit(): void {
  }


  QuestionCreationSubmit() {

    // console.log('QuestionCreationForm', this.QuestionCreationForm.value);
    // this.QuestionCreationForm.setValue({
    //   skills:[''],
    //   level:[''],
    //   question:[''],
    // });
    let data = this.QuestionCreationForm.value
    this._questionCreationSer.addQuestion(data).subscribe( (res:any) => {
      console.log('res', res);
      this._toster.success(res.msg, '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      
    }, err => {
      console.log('question add error component', err.error.skill);
      this._toster.error(err.error.skill, '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing'
        });
      }
    )




  }


  ngOnDestroy(){

  }



}
