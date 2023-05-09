import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(username: string, password: string) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  async logout() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  async signUp(username: string, password: string) {
    try {
        const { user } = await Auth.signUp({ username, password });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  }
}
