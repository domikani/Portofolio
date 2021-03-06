import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'cv', loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule)},
  {path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  {path: 'project/:projectTitle', loadChildren: () => import ('./pages/project/project.module').then(m => m.ProjectModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
