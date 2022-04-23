package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "clients")
@Entity
public class Client{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String first_name;
    private String last_name;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    @ManyToOne
    @JoinColumn(name = "workshop_id", referencedColumnName = "id")
    private Workshop workshop_id;
}
