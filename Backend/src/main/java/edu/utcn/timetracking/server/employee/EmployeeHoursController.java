package edu.utcn.timetracking.server.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeHours")
@CrossOrigin
public class EmployeeHoursController {

    @Autowired
    private EmployeeHoursService employeeHoursService;

    @PostMapping
    public EmployeeHours create(@RequestBody EmployeeHours employeeHours)
    {
        return employeeHoursService.create(employeeHours);
    }

    @GetMapping
    public List<EmployeeHours> getAllEmployeesHours(){
        return employeeHoursService.findAllEmployeesHours();
    }

}
