import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Message, Topic } from '../API.service';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  id!: string;
  lastFetch = 0;
  messages: Message[] = [];
  topic?: Topic;
  
  constructor(private API: APIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.API.GetTopic(this.id)
          .then(topic => {
            this.topic = topic as Topic;
          });
      
      this.fetchMessages();
    });
  }

  fetchMessages() {
    const lastFetch: string = (new Date(this.lastFetch)).toString();
    console.log('fetching messages since', lastFetch);
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
