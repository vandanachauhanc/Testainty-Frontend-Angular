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
  selector: 'app-allcandidates',
  templateUrl: './allcandidates.component.html',
  styleUrls: ['./allcandidates.component.scss']
})
export class AllcandidatesComponent implements OnInit {


  displayedColumns: string[] = ['position_applied_for', 'candidate_name', 'experience', 'email', 'mobile', 'result'];
  dataSource! :  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _allresultService: AllresultService, public _toster:ToastrService) {
  }

  seeAllResult:any;

  ngOnInit(): void {

    this._allresultService.seeAllCandidates().subscribe((res:any) => {
        this.seeAllResult = res;
        console.log('seeAllResult1', this.seeAllResult)
        this.dataSource = new MatTableDataSource(this.seeAllResult?.Candidates);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, error => {
      this._toster.error(error, '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    })
  }
}
