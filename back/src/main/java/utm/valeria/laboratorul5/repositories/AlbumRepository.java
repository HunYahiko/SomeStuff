package utm.valeria.laboratorul5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utm.valeria.laboratorul5.models.Album;

import java.util.List;
import java.util.Optional;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {
    Optional<Album> findByName(String name);
    Optional<Album> findById(Long id);
    List<Album> findAll();
}
