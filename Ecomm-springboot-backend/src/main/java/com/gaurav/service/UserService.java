package com.gaurav.service;

import com.gaurav.exception.UserException;
import com.gaurav.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;


}
