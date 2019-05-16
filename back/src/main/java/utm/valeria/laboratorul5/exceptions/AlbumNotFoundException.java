package utm.valeria.laboratorul5.exceptions;

import utm.valeria.laboratorul5.models.Album;

public class AlbumNotFoundException extends Exception {
    
    public AlbumNotFoundException() {
        super("Album Not Found");
    }
    
    public AlbumNotFoundException(String message) {
        super(message);
    }
}
