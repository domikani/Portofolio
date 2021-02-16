import {Component, OnInit} from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public options: CloudOptions = {
    width: 800,
    height: 400,
    overflow: false,
  };

  public data: CloudData[] = [
    {text: 'GIS', weight: 10, color: '#0F9294'},
    {text: 'Web-GIS', weight: 9, color: '#E016A4'},
    {text: 'IoT', weight: 7, color: '#00DEE0'},
    {text: 'Flexibility', weight: 8, color: '#E0C116'},
    {text: 'Angular', weight: 9, color: '#947E07'},
    {text: 'Motivation', weight: 8, color: '#2B9E5B'},
    {text: 'JavaScript', weight: 9, color: '#B76EEB'},
    {text: 'Software Development', weight: 7, color: '#57EB94'},
    {text: 'MongoDB', weight: 8, color: '#EBAB3F'},
    {text: 'Hard-working', weight: 10, color: '#9E7633'},
    {text: 'Cartography', weight: 8, color: '#32B8B5'},
    {text: 'Big Data', weight: 7, color: '#668584'},
    {text: 'Web Development', weight: 10, color: '#57EB94'},
    {text: 'HTML5', weight: 8, color: '#ED93AB'},
    {text: 'NodeJS', weight: 8, color: '#B83298'},
    {text: 'Leaflet.js', weight: 10, color: '#BD7526'},
    {text: 'Science', weight: 7, color: '#8A7660'},
    {text: 'Open Source', weight: 8, color: '#F07048'},
    {text: 'Web Mapping', weight: 9, color: '#26BD3F'},
    {text: 'PostgreSQL', weight: 8, color: '#8C01F0'},
    {text: 'Spatial Analysis', weight: 10, color: '#F09460'},
    {text: 'Team-Working', weight: 9, color: '#AA48F0'},
    {text: 'Patience', weight: 8, color: '#D9F030'},
    {text: 'Responsibility', weight: 9, color: '#3CF0ED'},
    {text: 'Technology', weight: 7, color: '#F00B9B'},
    {text: 'CSS', weight: 8, color: '#219CA3'},


  ];

  constructor() {
  }

  ngOnInit() {
  }

}
