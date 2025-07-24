import { Component } from '@angular/core';
import { HomeStep1 } from '../home-step-1/home-step-1';
import { HomeStep2 } from '../home-step-2/home-step-2';
import { HomeStep3 } from '../home-step-3/home-step-3';
import { HomeStep4 } from '../home-step-4/home-step-4';

@Component({
  selector: 'app-home-page',
  imports: [HomeStep1, HomeStep2, HomeStep3, HomeStep4],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
