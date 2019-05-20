import { Component } from '@angular/core'

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	pageIsLoaded: any

	ngAfterViewInit () {
		//Set page is loaded after the vm returns
		setTimeout(()=>{ this.pageIsLoaded = true })
	}

	letterAnimation (event) {
		event.target.className = 'animated rubberBand'
		setTimeout(()=>{
			event.target.className = ''
		}, 1000)
	}
}
