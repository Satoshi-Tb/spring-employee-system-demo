package dev.springsample.employee.services;

import java.util.List;

import dev.springsample.employee.model.Employee;

public interface EmployeeService {

	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees();

}
