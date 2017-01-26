import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CurrencyService {
    private baseUrl = 'http://api.fixer.io/';

    constructor(private http: Http) { }

    public getCurrencyData(date: string, currency: string) {
        return this.http.get(`${this.baseUrl}${date}?base=${currency}`)
            .map(response => this.mapObjectToArray(response.json()))
    }

    public getCurrenciesList() {
        return this.http.get(`${this.baseUrl}/latest`)
            .map(response => this.mapObjectToArray(response.json()))
    }

    private mapObjectToArray(objectData): any[] {
        const newArray = [];

        for (let key in objectData.rates) {
            newArray.push({
                currency: key,
                value: objectData.rates[key]
            });
        }

        return newArray;
    }
}
