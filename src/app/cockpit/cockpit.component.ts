import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput:any;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    //console.log(nameInput.value);
    
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
    
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
    
    
  }

}
