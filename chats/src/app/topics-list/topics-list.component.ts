import { Component } from '@angular/core';
import { APIService, TopicsOfQuery } from '../API.service';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {
  userId: string = '';
  topics?: Array<TopicsOfQuery> = [];
  public topicName: string = '';

  constructor(private API: APIService, private Auth: AuthService) { }

  ngOnInit() {

    this.loadTopics();

  }

  public loadTopics() {
    this.Auth.userId
      .subscribe(async userId => {
        this.userId = userId;
        this.topics = await this.API.TopicsOf(userId);
        console.log(this.topics)
      });
  }

  public createTopic(): void {
    this.API.CreateTopic({ n_msgs: 0, n_subs: 0, topic: this.topicName })
      .then(() => this.loadTopics());
    this.topicName = '';
  }
}
