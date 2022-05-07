package eu.filip.backend.util;

public class InspectionDto {
    private Long id;
    private InspectionType inspectionType;
    private String make;
    private String model;
    private int year_of_production;
    private Long client_id;
    private Long workshop_id;

    public InspectionDto(Long id, InspectionType inspectionType, String make, String model, int year_of_production, Long client_id, Long workshop_id) {
        this.id = id;
        this.inspectionType = inspectionType;
        this.make = make;
        this.model = model;
        this.year_of_production = year_of_production;
        this.client_id = client_id;
        this.workshop_id = workshop_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public InspectionType getInspectionType() {
        return inspectionType;
    }

    public void setInspectionType(InspectionType inspectionType) {
        this.inspectionType = inspectionType;
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

    public int getYear_of_production() {
        return year_of_production;
    }

    public void setYear_of_production(int year_of_production) {
        this.year_of_production = year_of_production;
    }

    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public Long getWorkshop_id() {
        return workshop_id;
    }

    public void setWorkshop_id(Long workshop_id) {
        this.workshop_id = workshop_id;
    }
}
