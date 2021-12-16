package com.hiper.repository.crud;

import com.hiper.model.Vegetarian;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Juan pablo Roa Fragozo
 */
public interface InterfaceVegetarian extends MongoRepository<Vegetarian, String> {
    
}
