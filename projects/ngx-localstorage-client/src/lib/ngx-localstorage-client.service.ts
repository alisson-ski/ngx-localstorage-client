import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageClient {

  constructor() { }

  getRaw(item: string) {
    return localStorage.getItem(item);
  }

  overwrite(item: string, data: any) {
    localStorage.setItem(item, data);
  }

  getAll(item: string) {
    return JSON.parse(localStorage.getItem(item) || '[]');
  }

  post(item: string, obj: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(item) || '[]');
    obj.id = Date.now();
    dataSet.push(obj);
    localStorage.setItem(item, JSON.stringify(dataSet));
  }

  getById(item: string, id: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(item) || '[]');

    return dataSet.find(obj => obj.id === id) || null;
  }

  put(item: string, id: any, obj: any) {
    const dataSet: any[] = JSON.parse(localStorage.getItem(item) || '[]');
    const itemIndex = dataSet.findIndex(obj => obj.id === id);

    if (!itemIndex) {
      throw new Error('Item not found');
    }

    dataSet[itemIndex] = {...dataSet[itemIndex], ...obj};
    localStorage.setItem(item, JSON.stringify(dataSet));
  }

  delete(item: string, id: any) {
    let dataSet: any[] = JSON.parse(localStorage.getItem(item) || '[]');
    dataSet = dataSet.filter(obj => obj.id !== id);
    localStorage.setItem(item, JSON.stringify(dataSet));
  }
}
