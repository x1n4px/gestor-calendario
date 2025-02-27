import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkedHour } from '../models/hoursWorked.model';

@Injectable({
  providedIn: 'root'
})
export class HoursWorkedService {

  constructor(public http: HttpClient) { }

  getHoursWorked(id: number) {
    return this.http.get<WorkedHour[]>(`http://localhost:3001/api/hoursWorked/${id}`);
  }

  saveHoursWorked(items:WorkedHour[]) {
    return this.http.post(`http://localhost:3001/api/hoursWorked`, items);
  }
}
