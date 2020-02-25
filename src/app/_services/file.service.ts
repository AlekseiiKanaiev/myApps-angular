import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) {}

  downloadFile() {
    return this.http.get('assets/docs/resume_Kanaev_Oleksii.docx', {responseType: ResponseContentType.Blob});
  }
}
