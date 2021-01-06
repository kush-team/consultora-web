import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'maria-web-site';

  public services!: Observable<any[]>;
  public pages!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    AOS.init();
    this.services = this.firestore.collection('service').valueChanges();
    this.pages = this.firestore.collection('page').valueChanges();
  }
}
