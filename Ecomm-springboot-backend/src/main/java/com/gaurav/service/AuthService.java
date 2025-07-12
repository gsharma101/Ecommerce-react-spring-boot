package com.gaurav.service;

import com.gaurav.exception.SellerException;
import com.gaurav.exception.UserException;
import com.gaurav.request.LoginRequest;
import com.gaurav.request.SignupRequest;
import com.gaurav.response.AuthResponse;
import jakarta.mail.MessagingException;

public interface AuthService {

    void sentLoginOtp(String email) throws UserException, MessagingException;
    String createUser(SignupRequest req) throws SellerException;
    AuthResponse signin(LoginRequest req) throws SellerException;

}
