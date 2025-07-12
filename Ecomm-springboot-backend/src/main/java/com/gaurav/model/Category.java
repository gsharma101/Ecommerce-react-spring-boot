package com.gaurav.model;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Table(name = "categories")
@Data
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String name;

    @NotNull
    @Column(unique = true)
    private String categoryId;
    
    @ManyToOne
    private Category parentCategory;

    @NotNull
    private Integer level;
    


}
