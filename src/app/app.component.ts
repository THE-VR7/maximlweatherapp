import { Component } from '@angular/core';
import {wetherService} from '../app/weather.service';
import { AsyncValidatorFn, AbstractControl,ReactiveFormsModule, ValidationErrors, FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public checkcity = this.fb.array([ ]);
  constructor(private weatherservice : wetherService,private fb : FormBuilder){}
   public data:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for(var i=0;i<9;i++)
    {
          const group = this.fb.group({
            'inputcity': new FormControl(null,[Validators.required,],[this.uniqueval()])
          });
          // console.log(group);
        this.checkcity.push(group);
    }
    // console.log(this.checkcity.at(1));
    // console.log(typeof(this.checkcity.at(1)));  
  }

  public panels = [
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
    {showsearch:false,hideclickme:true,showcity:false,cityname:"",weather:"",temp:0,url:"" },
  ]
  displayedit(index:any){
    this.panels[index].showsearch = true;
    this.panels[index].hideclickme = false;
    this.panels[index].showcity=false;
    this.checkcity.at(index).reset();
  }
  showresults(index:any,city:string){
    this.panels[index].showcity=true;
    this.panels[index].showsearch=false;
    this.searchwaetherdata(city,index);
  }

  searchwaetherdata(cityname:string,index:any)
  {
    // this.weatherservice.searchweatherData(cityname).subscribe(
      // data =>{
        // console.log("data in the app.component");
        // console.log(this.data)
        if(this.data.length!=0)
        {
        this.panels[index].weather = this.data.weather[0].main;
        this.panels[index].temp = this.data.main.temp;
        this.panels[index].cityname = this.data.name;
        this.panels[index].url = "https://source.unsplash.com/1600x900/?weather,"+this.data.weather[0].main;
        // console.log(this.panels[index].url)
        
        }

      
    // )
  }

  uniqueval(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      let debounceTime = 1000; //milliseconds
      // console.log(control)
      return timer(debounceTime).pipe(switchMap(()=> {
      return this.weatherservice.searchweatherData(control.value).pipe(
        map(data => {
          if(data && data.length==undefined)
          {
            // console.log(data.length)
            this.data = data;
          }
          else
          {
            // console.log("error executed")
            // console.log(data.length)
           return {"cityinvalid": true}
          }
        })
      );
    })
  );
  }
  }


}
