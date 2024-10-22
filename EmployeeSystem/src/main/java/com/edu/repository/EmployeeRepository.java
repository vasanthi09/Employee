package com.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}

