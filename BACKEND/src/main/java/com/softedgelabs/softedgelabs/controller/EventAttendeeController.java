package com.softedgelabs.softedgelabs.controller;

import com.softedgelabs.softedgelabs.model.Attendee;
import com.softedgelabs.softedgelabs.model.Event;
import com.softedgelabs.softedgelabs.service.AttendeeService;
import com.softedgelabs.softedgelabs.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events/{eventId}/attendees")
public class EventAttendeeController {
    @Autowired
    private EventService eventService;

    @Autowired
    private AttendeeService attendeeService;

    @PostMapping
    public Event addAttendeeToEvent(@PathVariable Long eventId, @RequestBody Attendee attendee) {
        Event event = eventService.getAllEvents().stream()
                .filter(e -> e.getId().equals(eventId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Event not found"));
        Attendee savedAttendee = attendeeService.saveAttendee(attendee);
        event.getAttendees().add(savedAttendee);
        return eventService.saveEvent(event);
    }

    @DeleteMapping("/{attendeeId}")
    public void removeAttendeeFromEvent(@PathVariable Long eventId, @PathVariable Long attendeeId) {
        System.out.println("Event ID: " + eventId);
        System.out.println("Attendee ID: " + attendeeId);
        eventService.removeAttendeeFromEvent(eventId, attendeeId);
    }

}
