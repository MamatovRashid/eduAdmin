import VueRouter from "vue-router";

import Students from './pages/Student/Students.vue';
import StudentAdd from './pages/Student/StudentAdd.vue';
import Student from './pages/Student/StudentsPage.vue';

import Group from './pages/Group/Group.vue';
import GroupStudents from './pages/Group/GroupStudents';
import GroupPage from './pages/Group/GroupPage.vue';

import Payments from './pages/Payment/Payments.vue';
import PaymentPage from './pages/Payment/PaymentPage.vue';

import Teachers from './pages/Teacher/Teachers.vue';
import TeacherAdd from './pages/Teacher/TeacherAdd.vue';
import TeacherPage from './pages/Teacher/TeacherPage.vue';

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Students
        },
        {
            path: '/studentadd',
            component: StudentAdd
        },
        {
            path: '/studentpage/:id',
            component: Student,
        },
        {
            path: '/group',
            component: Group
        },
        {
            path: '/grouppage/:id',
            component: GroupPage
        },
        {
            path: '/groupstudents',
            component: GroupStudents
        },
        {
            path: '/payments',
            component: Payments
        },
        {
            path: '/paymentspage/:id',
            component: PaymentPage
        },
        {
            path: '/teachers',
            component: Teachers
        },
        {
            path: '/teacheradd',
            component: TeacherAdd
        },
        {
            path: '/teacherpage/:id',
            component: TeacherPage,
        },
    ],
    mode: 'history'
})