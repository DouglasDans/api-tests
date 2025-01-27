package com.livros.livros.controller.exceptions;

import com.livros.livros.controller.response.HttpResponse;
import com.livros.livros.service.exception.DatabaseException;
import com.livros.livros.service.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DatabaseExceptionHandler {

    Logger log = LogManager.getLogger(getClass());
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<HttpResponse> dataNotFound(ResourceNotFoundException e, HttpServletRequest req) {
        String error = "Dado não encontrado no banco de dados";

        HttpResponse httpError = new HttpResponse(HttpStatus.NOT_FOUND, e.getMessage(), req.getRequestURI());

        log.error(">>>> [DatabaseExceptionHandler] " + error + " - Path: " + httpError.getPath());

        return new ResponseEntity<HttpResponse>(httpError, httpError.getStatus());
    }

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<HttpResponse> databaseException(DatabaseException e, HttpServletRequest req) {
        String error = "A requisição não pôde ser realizada pelo banco de dados";

        HttpResponse httpError = new HttpResponse(HttpStatus.BAD_REQUEST, e.getMessage(), req.getRequestURI());

        log.error(">>>> [DatabaseExceptionHandler] " + error + " - Path: " + httpError.getPath());

        return new ResponseEntity<HttpResponse>(httpError, httpError.getStatus());
    }


}
