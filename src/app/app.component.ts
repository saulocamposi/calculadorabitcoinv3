import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http){

    let link = "https://api.github.com/";
    let blink = "https://api.kraken.com/0/public/Ticker?pair=XBTEUR";
    let block = "http://localhost/calculadorabitcoinv2/backend/ws/services/services.php?brand=fox";

    this.http.request(blink).subscribe((res: Response) => console.log(res.json()));
    this.http.request(link).subscribe((res: Response) => console.log(res.json()));
    this.http.request(block).subscribe((res: Response) => console.log(res.json()));



  }






}
