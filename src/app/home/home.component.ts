import { Component, ElementRef } from '@angular/core'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	pageIsLoaded: any
	ngAfterViewInit () {
		//Set page is loaded after the vm returns
		setTimeout(()=>{ this.pageIsLoaded = true })
	}

	ngOnInit() {}
}
