import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {

}
