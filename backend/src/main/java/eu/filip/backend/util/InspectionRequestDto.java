package eu.filip.backend.util;

public class InspectionRequestDto {
    private String make;
    private String model;
    private int year;
    private InspectionType inspectionType;

    public InspectionRequestDto(String make, String model, int year, InspectionType inspectionType) {
        this.make = make;
        this.model = model;
        this.year = year;
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

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public InspectionType getInspectionType() {
        return inspectionType;
    }

    public void setInspectionType(InspectionType inspectionType) {
        this.inspectionType = inspectionType;
    }
}
