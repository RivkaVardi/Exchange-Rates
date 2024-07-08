import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../service/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: string[] = [];
  selectedCurrency: string = "";

  constructor(private srv: CurrenciesService) { }

  ngOnInit(): void {
    this.srv.GetAllCurrencies().subscribe(data => this.currencies = data);
  }
}
