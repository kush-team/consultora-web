import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  public error!: string;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['', [Validators.required, , Validators.minLength(100)]]
    });
  }

  public submit(): void {
    this.loading = true;
    this.submitted = true;
    this.error = '';
    if (this.contactForm.valid) {
      this.httpClient.post<any>('send-email', this.contactForm.value).subscribe(
        (res) => this.loading = false
      );
    }
  }
}
