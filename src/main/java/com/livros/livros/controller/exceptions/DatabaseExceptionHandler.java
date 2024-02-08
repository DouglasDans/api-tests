package com.livros.livros.controller.exceptions;

import com.livros.livros.service.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class DatabaseExceptionHandler {

    Logger log = LogManager.getLogger(getClass());
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> dataNotFound(ResourceNotFoundException e, HttpServletRequest req) {
        String error = "Dado não encontrado no banco de dados";

        ErrorResponse httpError = new ErrorResponse(HttpStatus.NOT_FOUND, error, e.getMessage(), req.getRequestURI());

        log.error(">>>> [DatabaseExceptionHandler] " + error + " - Path: " + httpError.getPath());

        return new ResponseEntity<ErrorResponse>(httpError, httpError.getStatus());
    }


}
