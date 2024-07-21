package com.softedgelabs.softedgelabs.service;

import com.softedgelabs.softedgelabs.model.Attendee;
import com.softedgelabs.softedgelabs.model.Event;
import com.softedgelabs.softedgelabs.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.softedgelabs.softedgelabs.repository.AttendeeRepository;


import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private AttendeeRepository attendeeRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
    public void removeAttendeeFromEvent(Long eventId, Long attendeeId) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        Attendee attendee = attendeeRepository.findById(attendeeId).orElseThrow(() -> new RuntimeException("Attendee not found"));

        // Remove attendee from event
        event.getAttendees().remove(attendee);
        eventRepository.save(event);

        // Remove event from attendee
        attendee.getEvents().remove(event);
        attendeeRepository.save(attendee);

        // Delete the attendee
        attendeeRepository.deleteById(attendeeId);
    }

}