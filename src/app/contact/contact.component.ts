import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string = "";
  names:string[] = [];
  mobi:number = 0;
  mobiles:number[] = [];

  
  add(){
    
    if(this.name.length < 20 )
    {
      if(confirm("are you cheak the details")){
        this.names.push(this.name)
  
        this.name = "";
    
        this.mobiles.push(this.mobi)
        this.mobi = 0;
        
  
      }
      
    }

   




  }
}
