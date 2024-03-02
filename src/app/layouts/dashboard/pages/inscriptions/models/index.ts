import { Course } from "../../courses/models"
import { User } from "../../users/models"

export interface Inscription{
    id: string | number
    userId: string | number
    courseId: string | number
    user?: User
    course?: Course
}

export interface createInscription{
    id:  number ;
    userId: string | number | null;
    courseId: string|number|null;
}