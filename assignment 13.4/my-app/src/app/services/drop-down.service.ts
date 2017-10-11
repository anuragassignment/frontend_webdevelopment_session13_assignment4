import { Injectable } from '@angular/core';
import { ICourseModel} from '../interface/course-model';

@Injectable()
export class DropDownService {
  courses: ICourseModel[] = [
    { course: 'Mobile Development' },
    { course: 'Web Development' },
    { course: 'IOS Development' },
    { course: 'Android Development' }
  ];

  getData() {
    return this.courses;
  }
  setData(obj: { course: string }) {
    this.courses.unshift(obj);
  }
  constructor() { }

}
