import { AbstractControl } from '@angular/forms';

export const bettweenYearValidator = (yearStart: number, yearEnd: number) => {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        
        if (yearStart <= +value && +value <= yearEnd) {
            return null;
        } else {
            return {
                bettweenYear: { yearStart, yearEnd },
            };
        }
    };
};
