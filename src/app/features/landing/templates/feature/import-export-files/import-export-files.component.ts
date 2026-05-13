import { Component } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular'
import { ScrollAnimDirective } from '../../../../../shared/directives/scroll-anim.directive';

@Component({
	selector: 'app-import-export-files',
	imports: [
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './import-export-files.component.html',
	styleUrl: './import-export-files.component.css',
})
export class ImportExportFilesComponent {

	icons ={ 
		play: PlayIcon,
		close: XIcon
	}
}
