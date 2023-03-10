package edu.utcn.timetracking.server.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeHoursService {
    @Autowired
    private EmployeeHoursRepository employeeHoursRepository;

    @Transactional
    public EmployeeHours create(EmployeeHours employeeHours) {
        return employeeHoursRepository.save(employeeHours);
    }

    public List<EmployeeHours> findAllEmployeesHours(){
        Employee employee = employeeHoursRepository.findAll().get(1).getEmployee();
        System.out.println(employee.getName());
        return employeeHoursRepository.findAll();
    }
}
