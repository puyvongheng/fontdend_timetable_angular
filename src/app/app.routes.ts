import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrintComponent } from './print/print.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { CreateTimetableComponent } from './create-timetable/create-timetable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { MajorComponent } from './major/major.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudySessionComponent } from './study-session/study-session.component';
import { TimetablesComponent } from './timetables/timetables.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';
import { TimetablesPublicComponent } from './timetables-public/timetables-public.component';
import { ProfileComponent } from './profile/profile.component';
import { PrintTeacherComponent } from './print-teacher/print-teacher.component';
import { ManagementTeacherComponent } from './management-teacher/management-teacher.component';
import { RoomComponent } from './room/room.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { RoleGuard } from './role.guard';
import { ManagementStudenRegisterComponent } from './management-studen-register/management-studen-register.component';
import { ManagementTeacherRegisterComponent } from './management-teacher-register/management-teacher-register.component';
import { ScoreComponent } from './student/score/score.component';
import { TimetableAComponent } from './timetable-a/timetable-a.component';
import { TotalscoreComponent } from './studen/totalscore/totalscore.component';
import { ExamsComponent } from './exams/exams.component';
import { ScoreTypesComponent } from './score-types/score-types.component';
import { TblstudentsComponent } from './student/tblstudents/tblstudents.component';
import { ReportstudentsComponent } from './student/reportstudents/reportstudents.component';

export const routes: Routes = [

    { path: '', redirectTo: '/Profile', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'loginteacher', component: LoginTeacherComponent },
    { path: 'timetable_x', component: TimetableAComponent },





    { path: 'Profile', component: ProfileComponent },
    { path: 'print', component: PrintComponent },

    { path: 'printTeacher', component: PrintTeacherComponent },

    { path: 'timetabless', component: TimetablesComponent },

    { path: 'registerstuden', component: ManagementStudenRegisterComponent },
    { path: 'registerteacher', component: ManagementTeacherRegisterComponent },




    {
        path: 'create_timetable',
        component: CreateTimetableComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },





    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },


    {
        path: 'students',
        component: StudentComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },

    {
        path: 'subjects',
        component: SubjectsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },



    {
        path: 'facultie',
        component: FacultyComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },

    {
        path: 'department',
        component: DepartmentComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },

    {
        path: 'major',
        component: MajorComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },

    {
        path: 'room',
        component: RoomComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },


    {
        path: 'timetables',
        component: TimetablesComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },



    {
        path: 'studysession',
        component: StudySessionComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },



    {
        path: 'management-teacher',
        component: ManagementTeacherComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'], allowStudent: false }, // Only admin role
    },



    //កាវិភាគ
    { path: 'management', component: ManagementComponent },
    { path: 't', component: TimetablesPublicComponent },




    //​ ពិន្ទុសិស្ស

    { path: 'score', component: ScoreComponent },
    {
        path: 'totalscore',
        component: TotalscoreComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin', 'simple'], allowStudent: false }, // Allow both admin and simple roles
    },
    { path: 'exams', component: ExamsComponent },
    { path: 'score_types', component: ScoreTypesComponent },

    { path: 'tblstudens', component: TblstudentsComponent },
    { path: 'Reportstudents', component: ReportstudentsComponent },

];