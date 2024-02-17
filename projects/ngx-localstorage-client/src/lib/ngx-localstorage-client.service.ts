import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageClient {

  constructor() { }

  getAll(table: string) {
    return JSON.parse(localStorage.getItem(table) || '[]');
  }

  post(table: string, obj: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(table) || '[]');
    obj.id = Date.now();
    dataSet.push(obj);
    localStorage.setItem(table, JSON.stringify(dataSet));
  }
}
