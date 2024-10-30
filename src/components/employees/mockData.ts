import { EmployeeType } from "../../types/Employee";

// Mock данни с 100 елемента
export const mockData: EmployeeType[] = [
    { id: 1, name: "user 1", title: "CTO", managerId: null },
    { id: 2, name: "user 2", title: "IT Manager", managerId: 1 },
    { id: 3, name: "user 3", title: "Developer", managerId: 2 },
    { id: 4, name: "user 4", title: "Designer", managerId: 2 },
    { id: 5, name: "user 5", title: "Project Manager", managerId: 1 },
    { id: 6, name: "user 6", title: "QA Lead", managerId: 5 },
    { id: 7, name: "user 7", title: "QA Engineer", managerId: 6 },
    { id: 8, name: "user 8", title: "QA Engineer", managerId: 6 },
    { id: 9, name: "user 9", title: "IT Support", managerId: 2 },
    { id: 10, name: "user 10", title: "Frontend Developer", managerId: 3 },
    { id: 11, name: "user 11", title: "Backend Developer", managerId: 3 },
    { id: 12, name: "user 12", title: "UI/UX Designer", managerId: 4 },
    { id: 13, name: "user 13", title: "Systems Analyst", managerId: 2 },
    { id: 14, name: "user 14", title: "Systems Architect", managerId: 2 },
    { id: 15, name: "user 15", title: "Data Engineer", managerId: 1 },
    { id: 16, name: "user 16", title: "Data Analyst", managerId: 15 },
    { id: 17, name: "user 17", title: "HR Manager", managerId: 1 },
    { id: 18, name: "user 18", title: "HR Assistant", managerId: 17 },
    { id: 19, name: "user 19", title: "Recruiter", managerId: 17 },
    { id: 20, name: "user 20", title: "Recruitment Specialist", managerId: 19 },
    { id: 21, name: "user 21", title: "Marketing Manager", managerId: 1 },
    { id: 22, name: "user 22", title: "Content Writer", managerId: 21 },
    { id: 23, name: "user 23", title: "SEO Specialist", managerId: 21 },
    { id: 24, name: "user 24", title: "Social Media Manager", managerId: 21 },
    { id: 25, name: "user 25", title: "Graphic Designer", managerId: 21 },
    { id: 26, name: "user 26", title: "Sales Manager", managerId: 1 },
    { id: 27, name: "user 27", title: "Sales Associate", managerId: 26 },
    { id: 28, name: "user 28", title: "Sales Coordinator", managerId: 26 },
    { id: 29, name: "user 29", title: "Operations Manager", managerId: 1 },
    { id: 30, name: "user 30", title: "Supply Chain Analyst", managerId: 29 },
    { id: 31, name: "user 31", title: "Logistics Specialist", managerId: 29 },
    { id: 32, name: "user 32", title: "Product Manager", managerId: 1 },
    { id: 33, name: "user 33", title: "Sustainability Coordinator", managerId: 1 },
    { id: 34, name: "user 34", title: "Energy Analyst", managerId: 99 }
];


// Симулиране на извикване към API с забавяне
export const fetchEmployes = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(mockData), 2000);
    });