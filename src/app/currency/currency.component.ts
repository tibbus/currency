import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { CurrencyService } from './currency.service';

@Component({
    selector: 'currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    providers: [CurrencyService]
})

export class CurrencyComponent implements OnInit {
    private date: string;
    private currency: string;
    public rates = [];
    public currenciesList = [];

    constructor(private currencyService: CurrencyService) { }

    ngOnInit() {
        this.currencyService.getCurrenciesList().subscribe(data => {
            this.currenciesList = data;
        });
    }

    public changeDate(date: string) {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        this.date = formattedDate;

        this.updateData();
    }

    public changeCurrency($event) {
        this.currency = $event.target.value;

        this.updateData();
    }

    private updateData() {
        if (!this.date || !this.currency) {
            return;
        }

        this.currencyService.getCurrencyData(this.date, this.currency).subscribe(data => {
            this.rates = data;
        });
    }
}
