package com.softedgelabs.softedgelabs.controller;

import com.softedgelabs.softedgelabs.model.Attendee;
import com.softedgelabs.softedgelabs.service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {
    @Autowired
    private AttendeeService attendeeService;

    @GetMapping
    public List<Attendee> getAllAttendees() {
        return attendeeService.getAllAttendees();
    }

    @PostMapping
    public Attendee createAttendee(@RequestBody Attendee attendee) {
        return attendeeService.saveAttendee(attendee);
    }

    @PutMapping("/{id}")
    public Attendee updateAttendee(@PathVariable Long id, @RequestBody Attendee attendee) {
        return attendeeService.updateAttendee(id, attendee);
    }

    @DeleteMapping("/{id}")
    public void deleteAttendee(@PathVariable Long id) {
        attendeeService.deleteAttendee(id);
    }
}
