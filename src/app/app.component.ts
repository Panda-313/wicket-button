import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wicket-button';
  constructor(private httpClient: HttpClient) {
  }
  registerByGoogle(): void {
    this.httpClient.get('https://legia-dev-profile.auth.eu-central-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=1qqhfsaqrsd6e1u7at200mg8s2&redirect_uri=https://zealous-hermann-3c28f5.netlify.app&state=STATE&scope=openid+profile+aws.cognito.signin.user.admin&identity_provider=Google').subscribe(res => console.log(res))
  }
}
