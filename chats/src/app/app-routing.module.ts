import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { ChatComponent } from './chat/chat.component';
import { SubsComponent } from './subs/subs.component';

const routes: Routes = [
  {
    path: 'topics',
    children: [
      {
        path: '',
        component: TopicsComponent
      }, 
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ChatComponent
          },
          {
            path: 'subs',
            component: SubsComponent
          }
        ]
      }
    ]
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
