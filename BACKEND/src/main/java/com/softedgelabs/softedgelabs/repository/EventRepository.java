package com.softedgelabs.softedgelabs.repository;
import com.softedgelabs.softedgelabs.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EventRepository extends JpaRepository<Event, Long> {
}
