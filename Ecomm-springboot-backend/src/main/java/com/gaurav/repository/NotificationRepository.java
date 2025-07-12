package com.gaurav.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gaurav.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {



}
