import React, { useState } from "react";
import EmployeeNode from "./EmployeeNode";
import { EmployeeType } from "../../types/Employee";

const buildTree = (employees: EmployeeType[]) => {
  const employeeMap = new Map();
  employees.forEach((employee) => {
    employee.children = [];
    employeeMap.set(employee.id, employee);
  });
  const rootNodes: EmployeeType[] = [];
  const employeesHasNoManager: EmployeeType[] = [];
  employees.forEach((employee) => {
    if (employee.managerId === null) {
      rootNodes.push(employee);
    } else {
      const manager = employeeMap.get(employee.managerId);
      if (manager) {
        manager.children.push(employee);
      } else {
        employeesHasNoManager.push(employee);
      }
    }
  });
  return {
    rootNodes,
    employeesHasNoManager
  };
};

function EmployeeTree({ employees }: { employees: EmployeeType[] }) {
  const [treeData, setTreeData] = useState(buildTree(employees));

  const checkParent = (managerId: number | null, isChecked: boolean) => {
    // deep copy treeData
    const updatedTreeData = JSON.parse(JSON.stringify(treeData));

    const updateParentCheck = (nodes: EmployeeType[], managerId: number | null) => {
      for (const node of nodes) {
        if (node.id === managerId) {
          node.checked = isChecked;
          if (node.managerId !== null) {
            updateParentCheck(updatedTreeData.rootNodes, node.managerId);
          }
        } else if (node.children) {
          updateParentCheck(node.children, managerId);
        }
      }
    };

    updateParentCheck(updatedTreeData.rootNodes, managerId);
    setTreeData(updatedTreeData);
  };

  const sendCheckedInputs = () => {
    const ids: number[] = [];
    treeData.rootNodes.forEach((employee) => {
      if ( employee.checked ) {
        ids.push(employee.id);
      }
    });

    // axios.post('url', ids) ......
  }

  return (
    <div>
      {treeData.rootNodes.map((employee) => (
        <EmployeeNode key={employee.id} employee={employee} checkParent={checkParent} />
      ))}
      <button onClick={sendCheckedInputs}>Send Checked Inputs</button>

      <div>Warning!</div>
      {treeData.employeesHasNoManager.map((employee) => (
        <span key={employee.id}>
          {employee.title} - {employee.name}
        </span>
      ))}
    </div>
  );
}

export default EmployeeTree;
