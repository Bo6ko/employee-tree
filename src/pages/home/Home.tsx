import React, { useEffect, useState } from 'react';
import EmployeeTree from '../../components/employees/EmployeeTree';
import { EmployeeType } from '../../types/Employee';
import { fetchEmployes } from '../../components/employees/mockData';

const Home = () => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployes().then((response: any) => {
      setEmployees(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && 'loading...'}

      {!loading && <EmployeeTree employees={employees} />}
    </>
  );
};

export default Home;
