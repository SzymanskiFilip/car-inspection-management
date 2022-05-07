package eu.filip.backend.repository;

import eu.filip.backend.entity.Inspection;
import eu.filip.backend.util.InspectionDto;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InspectionRepository extends CrudRepository<Inspection, Long> {

    @Query(nativeQuery = true, value = "select * from inspections where workshop_id = ?1")
    List<Inspection> findAllByWorkshop_id(Long id);
}
