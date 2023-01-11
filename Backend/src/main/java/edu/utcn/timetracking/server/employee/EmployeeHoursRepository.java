package edu.utcn.timetracking.server.employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeHoursRepository extends JpaRepository<EmployeeHours, Integer> {
}
