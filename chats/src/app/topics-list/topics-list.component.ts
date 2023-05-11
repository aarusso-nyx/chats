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
  topics?: Promise<Array<TopicsOfQuery>>;
  public topicName: string = '';

  topic: string = '';
  descr: string = '';

  constructor(private API: APIService, private Auth: AuthService) { }

  ngOnInit() {
    // this.API.CreateTopic();

    this.loadTopics();

  }

  public loadTopics() {
    this.Auth.userId
      .subscribe(userId => {
        this.userId = userId;
        console.log(userId);
        this.topics = this.API.TopicsOf(userId);
        this.topics.then(topics => {
          console.log(topics);
        });
      });
  }

  public createTopic(): void {
    console.log('criando')
    this.API.CreateTopic({ n_msgs: 0, n_subs: 0, topic: this.topicName })
      .then(() => this.loadTopics());
    this.topicName = '';

  }
}
