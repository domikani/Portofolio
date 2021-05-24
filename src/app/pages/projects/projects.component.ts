import {Component, OnInit} from '@angular/core';
import jsonData from './data';
import {IProject} from '../../interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: IProject[] = jsonData;


  constructor() {
  }

  ngOnInit() {
  }

}
