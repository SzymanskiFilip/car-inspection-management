package eu.filip.backend.entity;


import com.sun.istack.NotNull;

import javax.persistence.*;

@Table(name = "clients")
@Entity
public class Client{

    public Client(Long id, String first_name, String last_name, User user_id, Workshop workshop_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_id = user_id;
        this.workshop_id = workshop_id;
    }

    public Client(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String first_name;

    @NotNull
    private String last_name;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    @ManyToOne
    @JoinColumn(name = "workshop_id", referencedColumnName = "id")
    private Workshop workshop_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public Workshop getWorkshop_id() {
        return workshop_id;
    }

    public void setWorkshop_id(Workshop workshop_id) {
        this.workshop_id = workshop_id;
    }
}