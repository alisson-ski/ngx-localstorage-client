import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageClient {

  constructor() { }

  post(table: string, obj: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(table) || '[]');

    let nextId = 1;
    if (dataSet.length) {
      const highestIdItem = dataSet.reduce((prev, current) => {
        return (prev.id > current.id) ? prev : current;
      });

      nextId = highestIdItem.id + 1;
    }

    obj.id = nextId;
    dataSet.push(obj);
    localStorage.setItem(table, JSON.stringify(dataSet));
  }
}
