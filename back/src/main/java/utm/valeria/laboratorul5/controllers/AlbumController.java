package utm.valeria.laboratorul5.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utm.valeria.laboratorul5.exceptions.AlbumNotFoundException;
import utm.valeria.laboratorul5.models.Album;
import utm.valeria.laboratorul5.services.AlbumService;

import java.util.List;

@RestController
@CrossOrigin
public class AlbumController {
    
    private AlbumService albumService;
    
    @Autowired
    public void setAlbumService(AlbumService albumService) {
        this.albumService = albumService;
    }
    
    @GetMapping(value = "/albums")
    public ResponseEntity getAllAlbums(@RequestParam(name = "name", required = false) String name) throws AlbumNotFoundException {
        if (name != null && !name.isEmpty()) {
            Album album = this.albumService.findAlbumByName(name);
            return ResponseEntity.status(200).body(album);
        }
        List<Album> albums = this.albumService.findAllAlbums();
        return ResponseEntity.status(200).body(albums);
    }
    
    @GetMapping(value = "/albums/{id}")
    public ResponseEntity getAlbumById(@PathVariable(name = "id") Long id) throws AlbumNotFoundException {
        Album album = this.albumService.findAlbumById(id);
        return ResponseEntity.status(200).body(album);
    }
    
    @PostMapping(value = "/albums")
    public ResponseEntity createAlbum(@RequestBody Album album) {
        Album createdAlbum = this.albumService.createAlbum(album);
        return ResponseEntity.status(201).body(createdAlbum);
    }
    
    @PutMapping(value = "/albums/{id}")
    public ResponseEntity updateAlbum(@RequestBody Album album, @PathVariable(name = "id") Long id) throws AlbumNotFoundException {
        this.albumService.updateAlbum(id, album);
        return ResponseEntity.status(204).body("Successfully updated album!");
    }
    
    @DeleteMapping(value = "/albums/{id}")
    public ResponseEntity deleteAlbum(@PathVariable(name = "id") Long id) throws AlbumNotFoundException {
        this.albumService.deleteAlbum(id);
        return ResponseEntity.status(204).body("Successfully deleted album!");
    }
}
