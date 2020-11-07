import { HttpHeaders } from '@angular/common/http';

export interface ServicesInterface {
    gets(header?: HttpHeaders, query?: string);
    get(id: string, header?: HttpHeaders, query?: string);
    create(data: any, header?: HttpHeaders, query?: string);
    delete(id: string, header?: HttpHeaders, query?: string);
    example(url: string, header?: HttpHeaders, query?: string);
    update(id: string, data: any, header?: HttpHeaders, query?: string);
    patch (id: string, data: any, header?: HttpHeaders, query?: string);
}
