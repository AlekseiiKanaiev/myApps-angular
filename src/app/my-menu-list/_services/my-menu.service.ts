import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyMenuService {
  private loading = false;
  private user = null;

  constructor() { }

}
