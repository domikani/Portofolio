import {Component, OnInit} from '@angular/core';
import {IProject} from '../../interfaces/IProject';
import jsonData from '../projects/data';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  name = 'safe';
  url;
  urlSafe: SafeResourceUrl;
  public project: IProject[] = jsonData;
  public projectId = '';

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params.projectTitle;
    });
    this.url = this.project[this.projectId].frame;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
