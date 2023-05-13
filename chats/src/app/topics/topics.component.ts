import { Component } from '@angular/core';
import { APIService, CreateTopicInput, Topic } from '../API.service';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {
  newTopic: CreateTopicInput = {
    topic: '',
    descr: '',
  };

  topics: Topic[] = [];

  constructor(private API: APIService, private Auth: AuthService) { }

  ngOnInit() {
    this.API.ListTopics()
        .then(({ items }) => {
            this.topics = items as Topic[];
        });

    this.API.OnCreateTopicListener()
        .subscribe(({ value }) => {
          console.log('OnCreateTopicListener: ', value);
          if ( value && value.data ) {
            this.topics.push(value.data.onCreateTopic as Topic);
          }
        });
        
    this.API.OnDeleteTopicListener()
        .subscribe(({ value }) => {
          console.log('OnDeleteTopicListener: ', value);
          if ( value && value.data ) {
            const id = value.data.onDeleteTopic.id;
            this.topics = this.topics.filter((topic) => topic.id !== id);
          }
        });
  }

  ngOnDestroy() {
    // this.ts.unsubscribe();
  }

  async createTopic() {
    await this.API.CreateTopic(this.newTopic);
  }

  async deleteTopic(topicId: string) {
    await this.API.DeleteTopic({ id: topicId });
  }
}
