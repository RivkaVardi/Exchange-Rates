import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { CurrenciesService } from '../service/currencies.service';
import { exchangeRate } from '../models/exchangeRate.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input() currency: string = '';
  data: exchangeRate[] = [];
  dataSource: MatTableDataSource<exchangeRate, MatTableDataSourcePaginator> = new MatTableDataSource();
  displayedColumns: string[] = ['base', 'target', 'exchangeRate'];

  constructor(private http: CurrenciesService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currency']) {
      this.http.GetExchangeRates(this.currency).subscribe(res => {
        this.data = res.map(element => { return { base: this.currency, target: element.key, exchangeRate: element.value }; });
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
      });
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
