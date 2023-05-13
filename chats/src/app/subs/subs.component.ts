import { Component, OnInit } from '@angular/core';
import { APIService, Subscribe, Topic } from '../API.service';
import { ActivatedRoute } from '@angular/router';


async function fetchCognitoUsers() {
  let users:any = [];
  
  return users;
}



@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent implements OnInit {
  id!: string;
  subs: Subscribe[] = [];
  users: any[] = [];
  topic?: Topic;

  constructor(private API: APIService, private route: ActivatedRoute) {}


  async ngOnInit() {
    this.users = await fetchCognitoUsers();

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
        });
  }

  createSub(userId: string) {
    const input = {
      topicId: this.id,
      userId: userId
    };
    this.API.CreateSubscribe(input)
        .then( (sub) => {
          this.subs.push(sub as Subscribe);
        });
  }

  delSub(id: string) {
    this.API.DeleteSubscribe({ id })
        .then( () => {
          this.subs = this.subs.filter( (sub) => sub.id !== id);
        });
  }
}
