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

  getById(table: string, id: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(table) || '[]');

    return dataSet.find(obj => obj.id === id) || null;
  }

  put(table: string, id: any, obj: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(table) || '[]');
    const itemIndex = dataSet.find(obj => obj.id === id);

    if (!itemIndex) {
      throw new Error('Item not found');
    }

    dataSet[itemIndex] = {...dataSet[itemIndex], ...obj};
    localStorage.setItem(table, JSON.stringify(dataSet));
  }

  delete(table: string, id: any) {
    let dataSet: any[] = JSON.parse(localStorage.getItem(table) || '[]');
    dataSet = dataSet.filter(obj => obj.id !== id);
    localStorage.setItem(table, JSON.stringify(dataSet));
  }

  overwrite(table: string, data: any) {
    localStorage.setItem(table, data);
  }
}
