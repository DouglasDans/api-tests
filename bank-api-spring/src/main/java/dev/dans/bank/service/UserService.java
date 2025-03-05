package dev.dans.bank.service;

import dev.dans.bank.domain.models.User;

public interface UserService {
    User findById(Long id);
    User create(User user);
}
