package utm.valeria.laboratorul5.services;

import utm.valeria.laboratorul5.exceptions.AlbumNotFoundException;
import utm.valeria.laboratorul5.models.Album;

import java.util.List;

public interface AlbumService {
    List<Album> findAllAlbums() throws AlbumNotFoundException;
    Album findAlbumByName(String name) throws AlbumNotFoundException;
    Album findAlbumById(Long id) throws AlbumNotFoundException;
    Album createAlbum(Album album);
    void updateAlbum(Long id, Album album) throws AlbumNotFoundException;
    void deleteAlbum(Long id) throws AlbumNotFoundException;
}
