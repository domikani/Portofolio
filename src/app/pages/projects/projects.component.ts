import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public project: any = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
    'Project 7',
    'Project 8',
    'Project 9',
    'Project 10',
    'Project 11',
    'Project 12',
    'Project 13',
    'Project 14',
    'Project 15',
    'Project 16',
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
