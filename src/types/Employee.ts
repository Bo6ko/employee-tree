export type EmployeeType = {
    id: number,
    name: string,
    title: string,
    managerId: number | null,
    checked?: boolean,
    children?: []
}