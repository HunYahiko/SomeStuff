package utm.valeria.laboratorul5.controllers.advices;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import utm.valeria.laboratorul5.exceptions.AlbumNotFoundException;

@ControllerAdvice
public class AlbumControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler({AlbumNotFoundException.class})
    protected ResponseEntity albumNotFoundHandler(AlbumNotFoundException exception) {
        return ResponseEntity.status(404).body(exception.getMessage());
    }
}
