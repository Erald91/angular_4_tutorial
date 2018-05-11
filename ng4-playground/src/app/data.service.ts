import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  arrayProperty:Array<string> = ['Foo', 'Bar', 'Foo'];

  returnSampleData() {
    return Promise.resolve(this.arrayProperty);
  }
}
