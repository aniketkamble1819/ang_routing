import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  enabled:any = false;

  no:number = 0;
  constructor(){
    setInterval(()=>{
      this.no = this.no+1
      this.enabled = !this.enabled

    },2000)
   
  }
  
}
