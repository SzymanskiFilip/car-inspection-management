package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(name = "username")
    @NotNull
    @NotBlank
    private String username;

    @Column(name = "password")
    @NotNull
    @NotBlank
    private String password;

    @Column(name = "email")
    @NotNull
    @NotBlank
    private String email;

    @Column(name = "role")
    @NotNull
    @NotBlank
    private String role;
}
