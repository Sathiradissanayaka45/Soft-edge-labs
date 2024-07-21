package com.softedgelabs.softedgelabs.service;

import com.softedgelabs.softedgelabs.model.Attendee;
import com.softedgelabs.softedgelabs.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeService {
    @Autowired
    private AttendeeRepository attendeeRepository;

    public List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }

    public Attendee saveAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public Attendee updateAttendee(Long id, Attendee attendeeDetails) {
        Attendee attendee = attendeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Attendee not found"));
        attendee.setName(attendeeDetails.getName());
        attendee.setEmail(attendeeDetails.getEmail());
        return attendeeRepository.save(attendee);
    }

    public void deleteAttendee(Long id) {
        attendeeRepository.deleteById(id);
    }
}
