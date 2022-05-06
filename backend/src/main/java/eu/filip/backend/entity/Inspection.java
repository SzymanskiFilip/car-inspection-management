package eu.filip.backend.entity;


import eu.filip.backend.util.InspectionType;

import javax.persistence.*;

@Table(name = "inspections")
@Entity
public class Inspection {

    public Inspection(Client client_id, Workshop workshop_id, String make, String model, int yearOfProduction, InspectionType inspectionType) {
        this.client_id = client_id;
        this.workshop_id = workshop_id;
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.inspectionType = inspectionType;
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

    private String make;

    private String model;

    private int yearOfProduction;

    private InspectionType inspectionType;

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

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYearOfProduction() {
        return yearOfProduction;
    }

    public void setYearOfProduction(int yearOfProduction) {
        this.yearOfProduction = yearOfProduction;
    }

    public InspectionType getInspectionType() {
        return inspectionType;
    }

    public void setInspectionType(InspectionType inspectionType) {
        this.inspectionType = inspectionType;
    }
}
