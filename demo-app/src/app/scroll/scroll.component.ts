import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @ViewChild('addAddressSection', { static: false }) addAddressSection: ElementRef;

  onLocationSelected(location: string) {
    // Scroll to the Add Address section
    this.addAddressSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  
}

