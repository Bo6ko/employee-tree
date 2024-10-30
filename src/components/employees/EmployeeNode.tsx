import React, { useEffect, useState } from "react";
import { EmployeeType } from "../../types/Employee";
import { mockData } from "./mockData";

type Props = { 
    employee: EmployeeType, 
    checkParent: (managerId: number | null, isChecked: boolean) => void 
}

function EmployeeNode({ employee, checkParent }: Props) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!employee.checked);
    }, [employee.checked]);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (employee.children) {
            employee.children.forEach((child) => checkRecursive(child, event.target.checked));
        }

        checkParent(employee.managerId, event.target.checked);
    };

    const checkRecursive = (employee: EmployeeType, isChecked: boolean) => {
        employee.checked = isChecked;
        if (employee.children) {
            employee.children.forEach((child) => checkRecursive(child, isChecked));
        }
    };

    return (
        <div style={{ marginLeft: "40px" }}>
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            {employee.title} - {employee.name}
            {employee.children && (
                <div>
                    {employee.children.map((child: EmployeeType) => (
                        <EmployeeNode key={child.id} employee={child} checkParent={checkParent} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default EmployeeNode;
