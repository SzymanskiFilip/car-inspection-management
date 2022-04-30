package eu.filip.backend.entity;


import javax.persistence.*;

@Table(name = "inspections")
@Entity
public class Inspection {

    public Inspection(Long id, Client client_id, Workshop workshop_id) {
        this.id = id;
        this.client_id = client_id;
        this.workshop_id = workshop_id;
    }

    public Inspection(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client client_id;

    @OneToOne
    @JoinColumn(name = "workshop_id", referencedColumnName = "id")
    private Workshop workshop_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Client getClient_id() {
        return client_id;
    }

    public void setClient_id(Client client_id) {
        this.client_id = client_id;
    }

    public Workshop getWorkshop_id() {
        return workshop_id;
    }

    public void setWorkshop_id(Workshop workshop_id) {
        this.workshop_id = workshop_id;
    }
}
