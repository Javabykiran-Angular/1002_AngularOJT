

export class CourseService{

    private course:string[]=["Core Java",'Advanced Java','Spring','Spring Boot','Angular 12','Html,js,css','MySql','AWS'];

    getCourse(){
        return (this.course);
    }


}