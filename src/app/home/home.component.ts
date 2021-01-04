import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public services: Observable<any[]>;
  public home: any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.services = this.firestore.collection('service').valueChanges();
    this.firestore.collection('page').doc('home').ref.get().then((home: any) => this.home = home.data());
  }

}
