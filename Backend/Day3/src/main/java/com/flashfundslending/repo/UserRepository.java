package com.flashfundslending.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flashfundslending.entities.Role;
import com.flashfundslending.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
Optional<User> findByEmail(String email);
User findByRole(Role role);
}
