import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    const header = new HttpHeaders().set('sec-fetch-mode', 'navigate').set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
    this.httpClient.get('https://legia-dev-profile.auth.eu-central-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=1qqhfsaqrsd6e1u7at200mg8s2&redirect_uri=https://zealous-hermann-3c28f5.netlify.app&state=STATE&scope=openid+profile+aws.cognito.signin.user.admin&identity_provider=Google',
      {
        headers: header
      }).subscribe(res => console.log(res))
  }
}
