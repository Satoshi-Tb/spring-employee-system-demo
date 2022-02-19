package dev.springsample.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.springsample.employee.entity.EmployeeEntity;

@Repository
public interface EmployeeRepositry extends JpaRepository<EmployeeEntity, Long>{

}
