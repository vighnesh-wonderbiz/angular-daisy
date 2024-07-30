import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Output() onToggle: any = new EventEmitter();
  @Input() isOn: boolean = true;

  handleToggle = (): any => {
    this.onToggle.emit(false);
    this.isOn = !this.isOn;
  };
}
