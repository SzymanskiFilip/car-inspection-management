package eu.filip.backend.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "todo_points")
public class TodoPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inspection_id", referencedColumnName = "id")
    private Inspection inspection_id;

    @NotNull
    @Column(name = "body")
    private String body;

    @NotNull
    @Column(name = "status")
    private int status;
}

