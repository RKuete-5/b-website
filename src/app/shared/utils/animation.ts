import { animate, query, style, transition, trigger } from "@angular/animations";

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
        query(':enter,:leave', [
            style({
                position: 'absolute!important',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)!important'
            })
        ]),
        query(':enter', [
            animate('600ms ease', style({ opacity: 1, transform: 'scale(1) transformeY(0)'}))
        ])
    ])
]);


// export const 