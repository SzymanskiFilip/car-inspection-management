package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;

@Table(name = "workshops")
@Data
public class Workshop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long workshop_id;

    @Column(name = "fk_user_id")
    private Long fk_user_id;

    @Column(name = "fk_username")
    private Long fk_username;

    @Column(name = "workshop_name")
    private Long workshop_name;
}
