import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public panels = [
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"", },
  ]
  displayedit(index:any){
    this.panels[index].showsearch = true;
    this.panels[index].hideclickme = false;
    this.panels[index].showcity=false;
  }
  showresults(index:any){
    this.panels[index].showcity=true;
    this.panels[index].showsearch=false;
  }


}
