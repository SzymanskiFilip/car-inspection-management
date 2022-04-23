package eu.filip.backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "inspections")
@Entity
public class Inspection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client client_id;

    @OneToOne
    @JoinColumn(name = "workshop_id", referencedColumnName = "id")
    private Workshop workshop_id;
}
