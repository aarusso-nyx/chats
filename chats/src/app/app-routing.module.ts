import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicsListComponent } from './topics-list/topics-list.component';

const routes: Routes = [{
    path: 'topics',
    component: TopicsListComponent
  }, {
    path: 'topics/:topic',
    component: TopicComponent
  },
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/topics',
}, 
  { path: '**', redirectTo: '/topics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
