import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AllresultService } from '../../services/allresult/allresult.service';


export interface UserData {
  id: string;
  skill_set: string;
  candidate_name: string;
  test_date: string;
  points: string;
  result: string;
}


@Component({
  selector: 'app-testevalutioncandidatelist',
  templateUrl: './testevalutioncandidatelist.component.html',
  styleUrls: ['./testevalutioncandidatelist.component.scss']
})
export class TestevalutioncandidatelistComponent implements OnInit {


  displayedColumns: string[] = ['position_applied_for', 'candidate_name', 'experience','selection_status', 'candidate_id'];
  dataSource! :  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _allresultService: AllresultService, public _toster:ToastrService) {
  }

  seeAllResult:any;

  ngOnInit(): void {

    this._allresultService.seeAllCandidates().subscribe((res:any) => {
        this.seeAllResult = res;
        console.log('seeAllResult', this.seeAllResult)
        this.dataSource = new MatTableDataSource(this.seeAllResult?.Candidates);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, error => {
      console.log('seeAllResult',error);
      this._toster.error(error, '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    })
  }
}
