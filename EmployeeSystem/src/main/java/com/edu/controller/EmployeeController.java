package com.edu.controller;

import com.edu.entity.Employee;
import com.edu.exception.ResourceNotFoundException;
import com.edu.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/employees") //baseurl
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employee
    @GetMapping("")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    //create employee
    @PostMapping("")
    public ResponseEntity<Employee> registerEmployee(@RequestBody Employee employee){
        return new ResponseEntity<>(employeeRepository.save(employee),HttpStatus.CREATED);
    }

    //get employee by id
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException(
                                                                                            "Employee not found"));
        return ResponseEntity.ok(employee);
    }

    //update employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable("id") Long id){
        Employee emp = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not " +
                                                                                                        "found"));
        emp.setFirstName(employee.getFirstName());
        emp.setLastName(employee.getLastName());
        emp.setEmail(employee.getEmail());
        emp.setDepartment(employee.getDepartment());
        emp.setContact(employee.getContact());

        Employee updatedEmployee = employeeRepository.save(emp);
        return ResponseEntity.ok(updatedEmployee);
    }

    //Delete employee
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("id")Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("employee " +
                "not " +
                "found"));

        employeeRepository.delete(employee);

        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
