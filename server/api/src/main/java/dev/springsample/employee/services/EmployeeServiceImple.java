package dev.springsample.employee.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import dev.springsample.employee.entity.EmployeeEntity;
import dev.springsample.employee.model.Employee;
import dev.springsample.employee.repository.EmployeeRepositry;

@Service
public class EmployeeServiceImple implements EmployeeService {

	private EmployeeRepositry repository;
	

	
	public EmployeeServiceImple(EmployeeRepositry repository) {
		this.repository = repository;
	}



	@Override
	public Employee createEmployee(Employee employee) {
		
		// レポジトリ操作用は、エンティティクラスで行う
		// つまり、レポジトリはエンティティクラスに依存する。モデルクラスに依存しない
		var entity = new EmployeeEntity();
	
		// BeanUtils copyPropertiesは便利だがコスト高の可能性あり
		BeanUtils.copyProperties(employee, entity);
		repository.save(entity);
		return employee;
	}



	@Override
	public List<Employee> getAllEmployees() {
		var list = repository.findAll();
		var employeeList = list
				.stream()
				.map(emp -> {
					var e = new Employee();
					BeanUtils.copyProperties(emp, e);
					return e; 
				})
				.collect(Collectors.toList());
		
		return employeeList;
				
	}



	@Override
	public boolean deleteEmployee(Long id) {
		EmployeeEntity entity = repository.findById(id).get();
		repository.delete(entity);
		return true;
	}


	

	@Override
	public Employee getEmployeeById(Long id) {
		EmployeeEntity entity = repository.findById(id).get();
		Employee employee = new Employee();
		BeanUtils.copyProperties(entity, employee);
		return employee;
	}



	@Override
	public Employee updateEmployee(Long id, Employee employee) {
		
		EmployeeEntity entity = repository.findById(id).get();
		
		// memo
		// 参考動画ではBeanUtilsの利用を分けていた
		// model -> entityではBeansUtilsを使用しない
		// entity -> modelではBeanUtilsを使用する
		// 何か意図があるはず
		BeanUtils.copyProperties(employee, entity);
		repository.save(entity);
		return employee;
	}
	
	

}
