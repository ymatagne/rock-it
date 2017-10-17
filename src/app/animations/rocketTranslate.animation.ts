import { trigger, animate, transition, style, query, stagger } from '@angular/animations';

export const rocketTranslateAnimation =
    trigger('rocketTranslateAnimation', [
        transition('* => *', [
            query('img', style({ transform: 'translateY(+30%)' })),
            query('img',
                stagger('600ms', [
                    animate('900ms', style({ transform: 'translateY(0)' }))
                ]))
        ])
    ])