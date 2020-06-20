import { Component } from '@angular/core';
import {wetherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private weatherservice : wetherService){}
  
  public rainurl = "https://sharerudition.com/wp-content/uploads/2018/12/Rain.jpg";

  public panels = [
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0, },
  ]
  displayedit(index:any){
    this.panels[index].showsearch = true;
    this.panels[index].hideclickme = false;
    this.panels[index].showcity=false;
  }
  showresults(index:any,city:string){
    this.panels[index].showcity=true;
    this.panels[index].showsearch=false;
    this.searchwaetherdata(city,index);
  }

  searchwaetherdata(cityname:string,index:any)
  {
    this.weatherservice.searchweatherData(cityname).subscribe(
      data =>{
        // console.log("data in the app.component");
        console.log(data)
        if(data.length!=0)
        {
        this.panels[index].weather = data.weather[0].main;
        this.panels[index].temp = data.main.temp;
        }
        else
        {
          
        }

      }
    )
  }


}
