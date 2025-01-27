package com.livros.livros.controller;

import com.livros.livros.controller.response.HttpResponse;
import com.livros.livros.model.entities.Livro;
import com.livros.livros.service.ILivroService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/livro")
public class LivroAPIController {

    private final ILivroService livroService;
    private final Logger log = LogManager.getLogger(LivroAPIController.class);

    public LivroAPIController(ILivroService livroService) {
        this.livroService = livroService;
    }

    @CrossOrigin
    @GetMapping
    @Transactional
    public ResponseEntity<Object> consultaLivro() {
        log.info(">>>> [consultaLivro iniciado]");

        return ResponseEntity.ok(livroService.find());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        log.info(">>>> [consultaPorId iniciado]");

        Optional<Livro> livro = livroService.findById(id);

        return ResponseEntity.ok(livro);
    }

    @CrossOrigin
    @PostMapping
    @Transactional
    public ResponseEntity<Object> inserirLivro(@RequestBody Livro livro) {
        log.info(">>>> [inserirLivro iniciado]");

        return ResponseEntity.ok(livroService.insert(livro));
    }

    @CrossOrigin
    @PatchMapping
    @Transactional
    public ResponseEntity<Object> updateLivro(@RequestBody Livro livro) {
        log.info(">>>> [updateLivro iniciado]");

        return ResponseEntity.ok(livroService.update(livro));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> deleteLivro(@PathVariable Long id, HttpServletRequest request) {
        log.info(">>>> [deleteLivro iniciado]");

        livroService.delete(id);
        HttpResponse response = new HttpResponse();

        response.setStatus(HttpStatus.OK);
        response.setMessage("Livro id: " + id + " deletado com sucesso");
        response.setPath(request.getRequestURI());

        return ResponseEntity.ok(response);
    }
}
