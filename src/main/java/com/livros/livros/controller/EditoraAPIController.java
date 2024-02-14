package com.livros.livros.controller;

import com.livros.livros.controller.response.HttpResponse;
import com.livros.livros.model.entities.Editora;
import com.livros.livros.service.IEditoraService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/editora")
public class EditoraAPIController {

    private final IEditoraService editoraService;
    private final Logger log = LogManager.getLogger(EditoraAPIController.class);

    public EditoraAPIController(IEditoraService editoraService) {
        this.editoraService = editoraService;
    }

    @CrossOrigin
    @GetMapping
    @Transactional
    public ResponseEntity<Object> consultaEditora() {
        log.info(">>>> [consultaEditora iniciado]");

        return ResponseEntity.ok(editoraService.find());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        log.info(">>>> [consultaPorId iniciado]");

        Optional<Editora> editora = editoraService.findById(id);

        return ResponseEntity.ok(editora);
    }

    @CrossOrigin
    @PostMapping
    @Transactional
    public ResponseEntity<Object> inserirEditora(@RequestBody Editora editora) {
        log.info(">>>> [inserirEditora iniciado]");

        return ResponseEntity.ok(editoraService.insert(editora));
    }

    @CrossOrigin
    @PatchMapping
    @Transactional
    public ResponseEntity<Object> updateEditora(@RequestBody Editora editora) {
        log.info(">>>> [updateEditora iniciado]");

        return ResponseEntity.ok(editoraService.update(editora));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> deleteEditora(@PathVariable Long id, HttpServletRequest request) {
        log.info(">>>> [deleteEditora iniciado]");

        editoraService.delete(id);
        HttpResponse response = new HttpResponse();

        response.setStatus(HttpStatus.OK);
        response.setMessage("Editora id: " + id + " deletada com sucesso");
        response.setPath(request.getRequestURI());

        return ResponseEntity.ok(response);
    }
}
