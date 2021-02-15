import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public project: any = [
    {
      id: 'Project 1',
      title: 'Mining geosocial data from Flickr to explore tourism patterns:The case study of Athens',
      category: 'Web-GIS',
      date: 2021,
      description: 'MSc Thesis in GIS, Density based clustering, HDBSCAN, Leaflet.js, AngularJS, Node.js, MONGO DB, Charts.js, ' +
        'ArcGIS Pro, JavaScript, TypeScript',
      url: 'https://tourism-athens.vercel.app/'
    },
    {
      id: 'Project 2',
      title: 'Find your Spot: A Web-GIS page about parking spots for people with disabilities in Thessaloniki, Greece ',
      category: 'Web-GIS',
      date: 2020,
      description: 'Leaflet.js, JavaScript, HTML5, CSS',
      url: 'https://domikani.github.io/FindYourSpot/index.html'
    },
    {
      id: 'Project 3',
      title: 'Tourism Impact Assessment: The case study of Katla Unesco Geopark, Iceland',
      category: 'GIS in Tourism',
      date: 2020,
      description: 'Spatial Analysis, Spatial Statistics, ArcGIS Pro, Cartography',
      url: 'https://domikani.github.io/PortfolioGIS/projects/tourism.html'
    },
    {
      id: 'Project 4',
      title: 'Usage of Qgis in crime analysis',
      category: 'Open Source GIS',
      date: 2020,
      description: 'Spatial Analysis,Qgis, HotSpor Analysis, Cartography',
      url: 'https://domikani.github.io/PortfolioGIS/projects/opensource.html'
    },
    {
      id: 'Project 5',
      title: 'Web map service for Lund Municipality',
      category: 'Web-GIS',
      date: 2019,
      description: 'GEOSERVER, OpenLayers, OGC, JavaScript',
      url: 'https://domikani.github.io/PortfolioGIS/projects/webgis.html'
    },
    {
      id: 'Project 6',
      title: 'Environmental and Physical description of the Lake Victoria Region in Africa',
      category: 'Advanced GIS',
      date: 2019,
      description: 'Advanced Spatial Analysis, Environmental Analysis, Cartography, Adobe Illustrator, ArcMap',
      url: 'https://domikani.github.io/PortfolioGIS/projects/africa.html'
    },
    {
      id: 'Project 7',
      title: 'Investigation of the optimal locations for placing photovoltaic plants in Halkidiki, Greece',
      category: 'Advanced GIS',
      date: 2015,
      description: 'Diploma Thesis, Advanced Spatial Analysis, Suitability Analysis, Cartography, ArcMap',
      url: 'https://domikani.github.io/PortfolioGIS/projects/suitability.html'
    }

  ];

  /*public titleProject: any = [
    'Mining geosocial data from Flickr to explore tourism patterns:The case study of Athens',
    'Find your Spot',
    'Health facilities in Sweden',
    'Tourism Impact Assessment: The case study of Katla Unesco Geopark, Iceland',
    'Investigation of the optimal locations for placing photovoltaic plants in Halkidiki, Greece',



  ];*/


  constructor() {
  }

  ngOnInit() {
  }

}
