import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
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
  public url: string = 'home';

  constructor(private firestore: AngularFirestore, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
    this.services = this.firestore.collection('service').valueChanges();
    this.pages = this.firestore.collection('page').valueChanges();
  }

  public setURL(event: any, url: string): void {
    if (event.visible) {
      this.url = url;
    }
  }
}
