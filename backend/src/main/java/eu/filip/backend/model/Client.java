package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Table(name = "clients")
@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long client_id;

    @Column(name = "fk_user_id")
    private Long fk_user_id;

    @Column(name = "fk_username")
    private String fk_username;

    @Column(name = "fk_workshop_id")
    private Long fk_workshop_id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "fk_code_id")
    private UUID fk_code_id;

    @ManyToOne
    @JoinColumn(name = "workshop_id")
    private Workshop workshop;
}
