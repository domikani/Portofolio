import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import {TagCloudModule} from 'angular-tag-cloud-module';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    TagCloudModule
  ]
})
export class SkillsModule { }
