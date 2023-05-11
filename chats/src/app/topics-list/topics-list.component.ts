import { Component } from '@angular/core';
import { APIService, TopicsOfQuery } from '../API.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {
  userId: string = '';
  topics?: Promise<Array<TopicsOfQuery>>;

  constructor(private API: APIService, private Auth: AuthService) { }


  ngOnInit() {
    this.Auth.userId.subscribe(userId => {
      this.userId = userId;
      console.log(userId);
      this.topics = this.API.TopicsOf(userId);
      this.topics.then(topics => {
        console.log(topics);
      });
    });


  }
}
