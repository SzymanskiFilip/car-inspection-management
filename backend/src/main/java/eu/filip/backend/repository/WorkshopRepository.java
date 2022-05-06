package eu.filip.backend.repository;

import eu.filip.backend.entity.Workshop;
import org.hibernate.jdbc.Work;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorkshopRepository extends CrudRepository<Workshop, Long> {

    @Query(nativeQuery = true, value = "select * from workshops where user_id = ?1")
    Workshop findWorkshopByUser_id(Long id);
}
