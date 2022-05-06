package eu.filip.backend.controller;

import eu.filip.backend.entity.User;
import eu.filip.backend.service.UserService;
import eu.filip.backend.util.CheckAuthDto;
import eu.filip.backend.util.LoginCredentials;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;

@RestController
public class LoginController {

    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials credentials){
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) throws ServletException {
        request.logout();
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/check")
    public ResponseEntity<CheckAuthDto> check(Principal principal){
        try{
            User user = userService.findUserByUsername(principal.getName());
            CheckAuthDto checkAuthDto = new CheckAuthDto(user.getUsername(), user.getRole());
            return ResponseEntity.ok(checkAuthDto);
        } catch (Exception e){
            System.out.println("EXCEPTION USER NOT FOUND!");
        }

        return ResponseEntity.notFound().build();
    }

}
