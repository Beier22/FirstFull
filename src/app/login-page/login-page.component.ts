import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../shared/models/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    public auth: AuthService
    ) { }

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  ngOnInit(): void {
    this.userCollection = this.afs.collection('user');
    this.users = this.userCollection.valueChanges();
  }

  click() {
    this.router.navigateByUrl('/login');
  }

}
