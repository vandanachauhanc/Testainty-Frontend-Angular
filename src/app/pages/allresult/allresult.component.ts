import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllresultService } from '../../services/allresult/allresult.service';
import { ToastrService } from 'ngx-toastr';


export interface UserData {
  id: string;
  skill_set: string;
  candidate_name: string;
  test_date: string;
  points: string;
  result: string;
}


@Component({
  selector: 'app-allresult',
  templateUrl: './allresult.component.html',
  styleUrls: ['./allresult.component.scss']
})
export class AllresultComponent implements OnInit {


  displayedColumns: string[] = ['id', 'skill_set', 'candidate_name', 'test_date', 'points', 'result'];
  dataSource! :  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _allresultService: AllresultService, public _toster:ToastrService) {
  }

  seeAllResult:any;

  ngOnInit(): void {

    this._allresultService.seeAllResults().subscribe((res:any) => {
        this.seeAllResult = res;
        console.log('seeAllResult', res)
        this.dataSource = new MatTableDataSource(this.seeAllResult);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, error => {
      console.log('seeAllResult',error);
      this._toster.error(error.message, '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    }
    
    )
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

 
}




