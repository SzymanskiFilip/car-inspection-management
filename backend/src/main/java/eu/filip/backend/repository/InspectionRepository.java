package eu.filip.backend.repository;

import eu.filip.backend.entity.Inspection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InspectionRepository extends CrudRepository<Inspection, Long> {

}
