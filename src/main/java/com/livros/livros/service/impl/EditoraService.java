package com.livros.livros.service.impl;

import com.livros.livros.model.entities.Editora;
import com.livros.livros.model.repositories.IEditoraRepository;
import com.livros.livros.service.IEditoraService;
import com.livros.livros.service.exception.DatabaseException;
import com.livros.livros.service.exception.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EditoraService implements IEditoraService {

    private final Logger log = LogManager.getLogger(getClass());
    private final IEditoraRepository editoraRepository;

    public EditoraService(IEditoraRepository editoraRepository) {
        this.editoraRepository = editoraRepository;
    }

    @Override
    public List<Editora> find() {
        log.info(">>>> [EditoraService] find iniciado");

        return editoraRepository.findAll();
    }

    @Override
    public Optional<Editora> findById(Long id) {
        log.info(">>>> [EditoraService] findById(" + id +") iniciado");

        Optional<Editora> editora = editoraRepository.findById(id);

        return Optional.ofNullable(editora.orElseThrow(() -> new ResourceNotFoundException(id)));
    }

    @Override
    public Optional<Editora> insert(Editora obj) {
        log.info(">>>> [EditoraService] insert iniciado");

        return Optional.of(editoraRepository.save(obj));
    }

    @Override
    public Optional<Editora> update(Editora obj) {
        log.info(">>>> [AutorService update iniciado]");
        try{
            Editora entidade = editoraRepository.getReferenceById(obj.getId());
            updateData(entidade, obj);
            return Optional.of(editoraRepository.save(entidade));
        } catch (EntityNotFoundException e){
            throw new ResourceNotFoundException(obj.getId());
        }
    }

    private void updateData(Editora entidade, Editora obj){
        entidade.setNome(obj.getNome());
        entidade.setCnpj(obj.getCnpj());
        entidade.setPais(obj.getPais());
    }

    @Override
    public void delete(Long id) {
        log.info(">>>> [delete iniciado]");
        try{
            deleteData(id);
        } catch (ResourceNotFoundException e) {
            throw new DatabaseException(e.getMessage());
        }
    }

    private void deleteData(Long id){
        Optional<Editora> editora = findById(id);
        editoraRepository.deleteById(id);
    }
}
