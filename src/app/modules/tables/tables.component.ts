import { Component, OnInit, OnChanges, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable, Subscription, of } from "rxjs";
import { TablesConfig, defaultTablesConfig } from './tables.interface';
import { startWith, filter, first } from 'rxjs/operators';

@Component({
  selector: 'oat-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, OnChanges, OnDestroy {
  // Input
  @Input('data') data$: Observable<any[]>;
  @Input('config') config: TablesConfig;
  mergedConfig: TablesConfig;

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.mergedConfig = { ...defaultTablesConfig, ...this.config };
    if (this.mergedConfig.withActions) {
      this.mergedConfig.displayedColumnsWithActions = [ ...this.mergedConfig.displayedColumns, 'Actions' ];
    }
  }

  ngOnChanges() {
    this.subscription = this.data$
      .pipe(
        startWith(null),
        filter(data => data !== null),
      )
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

