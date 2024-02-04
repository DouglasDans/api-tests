package com.livros.livros.controller;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.service.IAutorService;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
public class AutorAPIController {

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IAutorService autorService;

    @CrossOrigin
    @GetMapping("autor")
    @Transactional
    public ResponseEntity<Object> consultaAutor(){
        log.info(">>>> [Controller] consultaAutor iniciado");

        return ResponseEntity.status(HttpStatus.OK).body(autorService.find());
    }
    @CrossOrigin
    @PostMapping("autor")
    @Transactional
    public ResponseEntity<Object> inserirAutor(@RequestBody Autor autor){
        log.info(">>>> [Controller] inserirAutor iniciado");

        return ResponseEntity.status(HttpStatus.OK).body(autorService.insert(autor));
    }

}
