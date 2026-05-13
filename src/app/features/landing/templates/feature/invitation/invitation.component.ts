import { Component, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';
import { OrganisationComponent } from '../../../layouts/organisation/organisation.component';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular';


@Component({
    selector: 'app-invitation',
    imports: [
		OrganisationComponent,
        LucideAngularModule
	],
    templateUrl: './invitation.component.html',
    styleUrl: './invitation.component.css',
})
export class InvitationComponent {

    // @ViewChild('scrollTop') scrollTop!: ElementRef
    @Output() scrollTo = new EventEmitter<void>();

    protected popVideoOpen: boolean = false

    icons ={ 
        play: PlayIcon,
        close: XIcon
    }

    togglePopVideo(): void {
        this.popVideoOpen = !this.popVideoOpen

        const body = document.querySelector('body')

        if(this.popVideoOpen) {
            body?.classList.add('overflow-hidden')
        } else {
            body?.classList.remove('overflow-hidden')
        }
    }

    toScrollTop(){
        this.scrollTo.emit()
    }


    // scrollToTop(): void {
	// 	if(this.scrollTop){
	// 		setTimeout(() => {
	// 			this.scrollTop.nativeElement.scrollIntoView({
	// 				behavior: 'smooth',
	// 				block: 'start'
	// 			})
	// 		}, 200)
	// 	}
	// }
}
