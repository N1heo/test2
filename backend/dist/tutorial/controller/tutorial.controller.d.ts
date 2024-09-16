/// <reference types="multer" />
import { TutorialService } from '../service/tutorial.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateCourseDto } from '../../dto/create-course.dto';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { LoginUserDto } from '../../dto/login-user.dto';
export declare class TutorialController {
    private readonly tutorialService;
    constructor(tutorialService: TutorialService);
    getUserComments(userId: string): Promise<any[]>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        idToken: string;
        email: string;
        username: string;
        userId: string;
    }>;
    createUserData(createUserDto: CreateUserDto): Promise<{
        id: string;
    }>;
    getUserData(userId: string): Promise<any>;
    getAllUsers(): Promise<any[]>;
    createCourseData(createCourseDto: CreateCourseDto): Promise<void>;
    addCommentToCourse(courseId: string, createCommentDto: CreateCommentDto, userId: string): Promise<void>;
    deleteCommentFromCourse(courseId: string, commentId: string, userId: string): Promise<void>;
    updateCommentInCourse(courseId: string, commentId: string, createCommentDto: CreateCommentDto, userId: string): Promise<void>;
    getCourseData(courseId: string): Promise<any>;
    getCoursesByCategory(category: string): Promise<any[]>;
    getAllCourses(): Promise<any[]>;
    getCoursesSortedByRating(order: string): Promise<any[]>;
    getTeachersAndMentors(courseId: string): Promise<any>;
    uploadFile(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    getFileUrl(fileName: string): Promise<any>;
}
