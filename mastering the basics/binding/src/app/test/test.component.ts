import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                  Welcome {{name}}
                </h2>
                <h2>{{2+2}}</h2>
                <h2>{{"Welcome "+name}}</h2>
                <h2>{{"Length of name is "+name.length}}</h2>
                <h2>{{name.toUpperCase()}}</h2>
                <h2>{{greatUser()}}</h2>
                <h2>{{siteUrl}}</h2>`,
  styles: [ ]
})
export class TestComponent implements OnInit {

  public name= "Pramod";
  public siteUrl= window.location.href;
  constructor() { }

  ngOnInit() {
  }


  greatUser()
  {
    return "Hello " + this.name;
  }

}
