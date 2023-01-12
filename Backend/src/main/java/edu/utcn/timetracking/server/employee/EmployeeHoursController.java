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

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeHoursRepository employeeHoursRepository;

    @PostMapping("/{employeeId}")
    public EmployeeHours create(@PathVariable(value = "employeeId") Integer employeeId, @RequestBody EmployeeHours employeeHours)
    {
        EmployeeHours employeeHours1 = employeeRepository.findById(employeeId).map(employee ->
        {
            employeeHours.setEmployee(employee);
            return employeeHoursRepository.save(employeeHours); }).orElseThrow( RuntimeException::new );
        return employeeHours1;
    }

    @GetMapping
    public List<EmployeeHours> getAllEmployeesHours(){
        return employeeHoursService.findAllEmployeesHours();
    }

}
