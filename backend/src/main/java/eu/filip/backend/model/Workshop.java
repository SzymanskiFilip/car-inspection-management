package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "workshops")
@Data
public class Workshop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    @Column(name = "name")
    private String name;
}
