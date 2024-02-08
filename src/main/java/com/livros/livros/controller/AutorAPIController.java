package com.livros.livros.controller;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.model.repositories.IAutorRepository;
import com.livros.livros.service.IAutorService;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "api/v1/autor")
public class AutorAPIController {

    Logger log = LogManager.getLogger(AutorAPIController.class);

    private final IAutorService autorService;

    public AutorAPIController(IAutorService autorService) {
        this.autorService = autorService;
    }

    @CrossOrigin
    @GetMapping
    @Transactional
    public ResponseEntity<Object> consultaAutor(){
        log.info(">>>> [Controller] consultaAutor iniciado");

        return ResponseEntity.ok().body(autorService.find());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> consultaAutorPorId(@PathVariable Long id){
        log.info(">>>> [Controller] consultaAutorPorId iniciado");

        Optional<Autor> autor = autorService.findById(id);

        return ResponseEntity.ok().body(autor);
    }

    @CrossOrigin
    @PostMapping
    @Transactional
    public ResponseEntity<Object> inserirAutor(@RequestBody Autor autor){
        log.info(">>>> [Controller] inserirAutor iniciado");

        return ResponseEntity.ok().body(autorService.insert(autor));
    }

}
