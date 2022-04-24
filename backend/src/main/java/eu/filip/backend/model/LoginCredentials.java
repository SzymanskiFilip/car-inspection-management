package eu.filip.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginCredentials {
    private String username;
    private String password;
}
