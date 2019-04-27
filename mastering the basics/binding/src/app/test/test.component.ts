import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                  Welcome {{name}}
                </h2>
                <input [id]="myId" type="text" value="Pramod">
                <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Pramod">
                `,
  styles: [ ]
})
export class TestComponent implements OnInit {

  public name= "Pramod";
  public myId = "testId";
  public isDisabled= true;
  constructor() { }

  ngOnInit() {
  }


}
