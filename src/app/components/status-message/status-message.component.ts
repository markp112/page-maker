import { Component, OnInit, Input } from '@angular/core';
import { IStatusMessage } from 'src/app/models/interfaces/status-message';
import { IconDefinition, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.scss']
})
export class StatusMessageComponent implements OnInit {
  @Input() message: IStatusMessage;

  faInfoCircle= faInfoCircle;

  constructor() { }

  ngOnInit() {
  }

}
