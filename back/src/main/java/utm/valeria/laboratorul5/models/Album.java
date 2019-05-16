package utm.valeria.laboratorul5.models;

import javax.persistence.*;

@Entity
@Table(name = "albums")
public class Album {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "number_of_tracks")
    private Integer numberOfTracks;
    
    @Column(name = "price")
    private Float price;
    
    @Column(name = "description")
    private String description;
    
    public Album() {}
    
    public Album(String name, Integer numberOfTracks, Float price, String description) {
        this.name = name;
        this.numberOfTracks = numberOfTracks;
        this.price = price;
        this.description = description;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public Integer getNumberOfTracks() {
        return numberOfTracks;
    }
    
    public void setNumberOfTracks(Integer numberOfTracks) {
        this.numberOfTracks = numberOfTracks;
    }
    
    public Float getPrice() {
        return price;
    }
    
    public void setPrice(Float price) {
        this.price = price;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
}
