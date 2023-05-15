import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Subscribe, Topic } from '../API.service';


@Component({
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent implements OnInit {
  id!: string;
  subs: Subscribe[] = [];
  users: any[] = [];
  allUsers: any[] = [];
  topic?: Topic;

  constructor(private API: APIService, private route: ActivatedRoute) {}


  async ngOnInit() {
    this.allUsers = await this.API.ListCognitoUsers();
    // console.log( this.users );

    this.route.params.subscribe( ({ id }) => {
      this.id = id;
      this.API.GetTopic(this.id)
          .then(topic => {
            this.topic = topic as Topic;
          });

      this.fetchSubs();
    });
  }

  fetchSubs() {
    this.API.ListSubscribes({ topicId: { eq: this.id }})
        .then( ({ items }) => {
          this.subs = items.map( (item) => (item as Subscribe));

          const userIds = this.subs.map( (sub) => sub.username);
          this.users = this.allUsers.filter((u) => !userIds.includes(u.username));
        });
  }

  addSub(userId: string) {
    const input = {
      topicId: this.id,
      username: userId
    };
    this.API.CreateSubscribe(input)
        .then( (sub) => {
          this.subs.push(sub as Subscribe);
          this.users = this.users.filter( (u) => u.username !== userId);
        });
  }

  delSub(id: string) {
    this.API.DeleteSubscribe({ id })
        .then( () => {

          this.subs = this.subs.filter( (sub) => sub.id !== id);
          const userIds = this.subs.map( (sub) => sub.username);
          this.users = this.allUsers.filter((u) => !userIds.includes(u.username));

        });
  }
}
