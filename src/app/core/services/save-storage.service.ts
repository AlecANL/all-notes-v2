import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveStorage {
  onSaveToStorage<T = any>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  onGetToStorage<T = any>(key: string): T | null {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
