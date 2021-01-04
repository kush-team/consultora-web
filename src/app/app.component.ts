import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'maria-web-site';

  public services!: Observable<any[]>;
  public home!: Observable<any>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.services = this.firestore.collection('service').valueChanges();
    this.home = this.firestore.collection('page').doc('home').valueChanges();
  }
}
