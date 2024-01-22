import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../dashboard/pages/users/models";
import { DatePipe } from "@angular/common";

@Pipe({
    name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
    
    transform(value: User, ...args: unknown[]): unknown {
        return value.firstName+" "+ value.lastName;
    }

}