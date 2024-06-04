package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.data.RoleRepository;
import com.example.demo.data.User;
import com.example.demo.data.UserRepository;

@Service
public class UserServiceImpl implements UsersService {
    @Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
    private BCryptPasswordEncoder passwordEncoder;

	//now implement our Users services that is initialize in UsersService
	@Override
	public List<User> getAllUsers(){ //get all records from Users table
		Iterable<User> iterable = userRepository.findAll();
		List<User> UsersList = new ArrayList<>();
		iterable.forEach(UsersList::add);
		return UsersList;
	}
	
	@Override
	public User getUserById(long id) { //Get data from Users table based on id
		return userRepository.findById(id).orElse(null);
	}
	
	@Override
	public User saveUser(User user) { // insert new records from form int Users table
		if(userRepository.findByEmail(user.getEmail()).isPresent()){
			throw new IllegalStateException("Email already exists");
		}
		user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

		return userRepository.save(user);
	}
	
	@Override
	public void deleteUser(long id) {
		userRepository.deleteById(id);
	}

	public Optional<User> authenticateUser(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent() && passwordEncoder.matches(password, userOptional.get().getPasswordHash())) {
            return userOptional;
        } else {
            return Optional.empty();
        }
    }
}
