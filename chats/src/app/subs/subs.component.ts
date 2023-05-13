import { Component } from '@angular/core';
import { APIService, Subscribe } from '../API.service';
import { ActivatedRoute } from '@angular/router';
import  { API, graphqlOperation } from 'aws-amplify';





async function fetchCognitoUsers() {
  try {
    const getUsersQuery = `query ListUsers {
      listUsers {
        items {
          username
          email
          # Add any other desired user attributes
        }
      }
    }`;

    const response = await API.graphql(graphqlOperation(getUsersQuery));
    // const users = response.data.listUsers.items;
    console.log('Cognito Users:', response);
  } catch (error) {
    console.error('Error fetching Cognito users:', error);
  }
}



// import 
@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent {
  id!: string;
  subs: Subscribe[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private API: APIService
  ) {}

  ngInit() {
    fetchCognitoUsers();

    this.route.params.subscribe( (params) => {
      this.id = params['get']('id');
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

}
