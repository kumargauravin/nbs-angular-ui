import {Component, Inject, OnDestroy, Optional} from '@angular/core';
// import { takeWhile } from 'rxjs/operators' ;
import { ActivatedRoute } from '@angular/router';
import {TransferState, makeStateKey} from '@angular/core';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {
  dataGroup:string = "";

  constructor(private route: ActivatedRoute,
    @Optional() @Inject('parameters') public parameters: any,
    private readonly transferState: TransferState
    ) {
      console.log("Parameters from Server", parameters);
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params: any) => {
      console.log("Parameters available to dashboard", params); // { dg: "nbs2bill-ss" }
      this.dataGroup = params['dg'];
    }
  );  }

  ngOnDestroy() {
  }
}
