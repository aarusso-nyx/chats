import { Injectable }                               from '@angular/core';
import { Router } from '@angular/router';
import { Auth }                                     from 'aws-amplify';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null);
  userId$                     = this.user$.pipe(
    filter(maybeUser => maybeUser !== null),
    map(user => user.username));

  get userId(): Observable<string> {
    return this.userId$;
  }

  get user(): Observable<any> {
    return this.user$.asObservable();
  }

  constructor(private route: Router) {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.user$.next(user);
    }

    Auth.currentAuthenticatedUser().then(user => {
      this.user$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }).catch(() => {});

    this.route.navigate(['/topics']);
    
    
  }

  async login(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      this.user$.next(user);
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
      this.user$.next(user);
      // this.userId$.next(user.username);
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
}
