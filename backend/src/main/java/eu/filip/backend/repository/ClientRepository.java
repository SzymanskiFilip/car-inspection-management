package eu.filip.backend.repository;

import eu.filip.backend.entity.Client;
import eu.filip.backend.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {

    @Query(nativeQuery = true, value = "select * from clients where user_id = ?1")
    Client findClientByUser_id(Long id);
}
