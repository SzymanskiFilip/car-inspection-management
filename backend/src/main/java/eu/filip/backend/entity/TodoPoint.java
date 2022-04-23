package eu.filip.backend.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    @NotNull
    @NotBlank
    @Column(name = "body")
    private String body;

    @NotNull
    @NotBlank
    @Column(name = "status")
    private int status;
}
