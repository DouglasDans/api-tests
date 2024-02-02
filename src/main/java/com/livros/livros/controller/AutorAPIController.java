package com.livros.livros.controller;

import com.livros.livros.service.IAutorService;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class AutorAPIController {

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IAutorService autorService;

    @CrossOrigin
    @GetMapping(value = "autor")
    @Transactional
    public ResponseEntity<Object> consultaAutor(){
        log.info(">>>> [Controller] consultaAutor iniciado");

        return ResponseEntity.status(HttpStatus.OK).body(autorService.consultaAutor());
    }

}
