package eu.filip.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "todo_points")
public class TodoPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inspection_id", referencedColumnName = "id")
    private Inspection inspection_id;

    @Column(name = "body")
    private String body;

    @Column(name = "status")
    private boolean status;
}
