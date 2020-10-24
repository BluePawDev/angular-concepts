import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  currentCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The Treally, Really Hard Parts',
      description: 'Worship Will Sentence',
      percentComplete: 50,
      favorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: any)   {
    console.log('Selected course fired!', course);
    this.currentCourse = course;
  }
}
