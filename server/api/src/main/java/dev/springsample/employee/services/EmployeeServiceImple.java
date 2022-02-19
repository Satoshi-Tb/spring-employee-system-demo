package dev.springsample.employee.services;

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
		
		BeanUtils.copyProperties(employee, entity);
		repository.save(entity);
		return employee;
	}

}
