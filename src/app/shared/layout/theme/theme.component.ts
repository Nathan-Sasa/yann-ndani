import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service'
import { LucideAngularModule, SunDimIcon, MoonIcon, MonitorCog} from 'lucide-angular';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-theme',
    imports: [
		LucideAngularModule,
		CommonModule
	],
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeComponent {

    themeAppService = inject(ThemeAppService);
	appTheme = AppTheme

	choiceTheme = false;

	icons = {
		sun: SunDimIcon,
		moon: MoonIcon,
		system: MonitorCog
	}
}
