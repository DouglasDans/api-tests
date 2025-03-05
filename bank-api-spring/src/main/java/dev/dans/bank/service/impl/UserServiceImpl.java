package dev.dans.bank.service.impl;

import dev.dans.bank.domain.models.User;
import dev.dans.bank.domain.repositories.UserRepository;
import dev.dans.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findById(Long id) {
        return this.userRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public User create(User userToCreate) {
        if (this.userRepository.existsByAccountNumber((userToCreate.getAccount().getNumber()))) {
            throw new IllegalArgumentException("This account number already exists");
        }

        return this.userRepository.save(userToCreate);
    }
}
