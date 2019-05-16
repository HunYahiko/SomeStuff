package utm.valeria.laboratorul5.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utm.valeria.laboratorul5.exceptions.AlbumNotFoundException;
import utm.valeria.laboratorul5.models.Album;
import utm.valeria.laboratorul5.repositories.AlbumRepository;
import utm.valeria.laboratorul5.services.AlbumService;

import java.util.List;
import java.util.function.Supplier;

@Service
public class AlbumServiceImpl implements AlbumService {
    
    private AlbumRepository albumRepository;
    private Supplier<AlbumNotFoundException> exceptionSupplier = AlbumNotFoundException::new;
    
    @Autowired
    public void setAlbumRepository(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }
    
    @Override
    public List<Album> findAllAlbums() throws AlbumNotFoundException {
        List<Album> albums = this.albumRepository.findAll();
        if (albums.isEmpty()) {
            throw exceptionSupplier.get();
        }
        return albums;
    }
    
    @Override
    public Album findAlbumByName(String name) throws AlbumNotFoundException {
        return this.albumRepository.findByName(name).orElseThrow(exceptionSupplier);
    }
    
    @Override
    public Album findAlbumById(Long id) throws AlbumNotFoundException {
        return this.albumRepository.findById(id).orElseThrow(exceptionSupplier);
    }
    
    @Override
    public Album createAlbum(Album album) {
        return this.albumRepository.save(album);
    }
    
    @Override
    public void updateAlbum(Long id, Album album) throws AlbumNotFoundException {
        Album oldAlbum = this.albumRepository.findById(id).orElseThrow(exceptionSupplier);
        oldAlbum.setName(album.getName());
        oldAlbum.setNumberOfTracks(album.getNumberOfTracks());
        oldAlbum.setPrice(album.getPrice());
        oldAlbum.setDescription(album.getDescription());
        this.albumRepository.save(oldAlbum);
    }
    
    @Override
    public void deleteAlbum(Long id) throws AlbumNotFoundException {
        Album album = this.albumRepository.findById(id).orElseThrow(exceptionSupplier);
        this.albumRepository.delete(album);
    }
}
