package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "workshops")
public class Workshop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    private String name;
}
