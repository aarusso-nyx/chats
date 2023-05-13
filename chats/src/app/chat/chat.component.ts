import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Message, Topic } from '../API.service';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  id!: string;
  lastFetch = 0;
  messages: Message[] = [];

  topic?: Topic;
  
  constructor(
    private route: ActivatedRoute,
    private API: APIService
  ) {}

  ngInit() {
    this.route.params.subscribe( (params) => {
      this.id = params['get']('id');
      console.log('Topic ID:', this.id);
      this.API.GetTopic(this.id).then( (topic) => {
        this.topic = topic as Topic;
      });
      
      this.fetchMessages();
    });
  }

  fetchMessages() {
    const lastFetch: string = (new Date(this.lastFetch)).toString();
    this.API.MessagesByTopicIdAndCreatedAt(this.id, { gt: lastFetch })
        .then( ({ items }) => {
          this.messages = items.map( (item) => (item as Message));
        });
  }

  createMessage(payload: string) {
    const input = {
      payload,
      topicId: this.id
    };
    this.API.CreateMessage(input)
        .then( (message) => {
          this.messages.push(message as Message);
        });
  }

  delMessage(id: string) {
    this.API.DeleteMessage({ id })
        .then( () => {
          this.messages = this.messages.filter( (message) => message.id !== id);
        });
  }
}
