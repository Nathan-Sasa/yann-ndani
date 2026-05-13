import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
	selector: 'app-organisation',
	imports: [
		OrganizationChartModule
	],
	templateUrl: './organisation.component.html',
	styleUrl: './organisation.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationComponent {

	data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            styleClass: '!bg-clr-primary/50 dark:!bg-clr-primary/30 !text-clr-text dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
            data: {
                image: 'assets/images/development/profile/nathan-red.PNG',
                name: 'Nathan Sasa',
                title: 'Propriétaire',
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-clr-accent/30 dark:!bg-clr-accent/20 !text-purple-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                    data: {
                        image: 'assets/images/development/profile/nathan-julet.JPEG',
                        name: 'Josh Luyeye',
                        title: 'Invité(e) 1',
                    },
                    children: [
                        {
                            label: 'Gestion',
                            styleClass: '!bg-clr-accent/30 dark:!bg-clr-accent/20 !text-purple-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                        },
                        {
                            label: 'Marketing',
                            styleClass: '!bg-clr-accent/30 dark:!bg-clr-accent/20 !text-purple-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                        },
                    ],
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-clr-hover/30 dark:bg-clr-hover/20 !text-teal-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                    data: {
                        image: 'assets/images/development/profile/nathan-def.JPG',
                        name: 'Valentin Bikuta',
                        title: 'Invité(e) 2',
                    },
                    children: [
                        {
                            label: 'Comptabilité',
                            styleClass: '!bg-clr-hover/30 dark:bg-clr-hover/20 !text-teal-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                        },
                        // {
                        //     label: 'Audit',
                        //     styleClass: '!bg-clr-hover/30 dark:bg-clr-hover/20 !text-teal-900 dark:!text-clr-text-secondary-dark rounded-xl border-clr-border! dark:border-clr-border-dark!',
                        // },
                    ],
                },
            ],
        },
    ];
}
