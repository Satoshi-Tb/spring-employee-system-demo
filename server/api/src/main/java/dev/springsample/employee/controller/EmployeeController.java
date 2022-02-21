package dev.springsample.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.springsample.employee.model.Employee;
import dev.springsample.employee.services.EmployeeService;

@RestController
@CrossOrigin(origins = {"http://localhot:8080", "http://localhost:3000"})
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	// ControllerクラスではModelクラスを利用する
	
	private final EmployeeService employeeService;
	
	public EmployeeController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		boolean deleted = employeeService.deleteEmployee(id);
		var response = new HashMap<String, Boolean>();
		response.put("deleted",deleted);
		
		return ResponseEntity.ok(response);
	}

	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		var employee = employeeService.getEmployeeById(id);
		return ResponseEntity.ok(employee);
	}
	
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		var result = employeeService.updateEmployee(id, employee);	
		return ResponseEntity.ok(result);
	}
	

}
