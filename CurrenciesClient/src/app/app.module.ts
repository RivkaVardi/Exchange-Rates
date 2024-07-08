import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesService } from './service/currencies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatSortModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
