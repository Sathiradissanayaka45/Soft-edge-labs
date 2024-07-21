package com.softedgelabs.softedgelabs.repository;

import com.softedgelabs.softedgelabs.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
}
