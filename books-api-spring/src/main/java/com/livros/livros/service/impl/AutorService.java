package com.livros.livros.service.impl;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.model.repositories.IAutorRepository;
import com.livros.livros.service.IAutorService;
import com.livros.livros.service.exception.DatabaseException;
import com.livros.livros.service.exception.ResourceNotFoundException;
import com.livros.livros.util.Util;
import jakarta.persistence.EntityNotFoundException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutorService implements IAutorService {

    private Logger log = LogManager.getLogger(AutorService.class);
    private final IAutorRepository autorRepository;

    public AutorService(IAutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    @Override
    public List<Autor> find() {
        log.info(">>>> [AutorService] find iniciado");

        return autorRepository.findAll();
    }

    @Override
    public Optional<Autor> findById(Long id) {
        log.info(">>>> [AutorService] findById(" + id +") iniciado");

        Optional<Autor> autor = autorRepository.findById(id);

        return Optional.ofNullable(autor.orElseThrow(() -> new ResourceNotFoundException(id)));
    }

    @Override
    public Optional<Autor> insert(Autor obj) {
        log.info(">>>> [AutorService] insert iniciado");

        return Optional.of(autorRepository.save(obj));
    }

    @Override
    public Optional<Autor> update(Autor obj) {
        log.info(">>>> [AutorService update iniciado]");
        try{
            Autor entidade = autorRepository.getReferenceById(obj.getId());
            updateData(entidade, obj);
            return Optional.of(autorRepository.save(entidade));
        } catch (EntityNotFoundException e){
            throw new ResourceNotFoundException(obj.getId());
        }
    }

    private void updateData(Autor entidade, Autor obj){
        entidade.setNome(obj.getNome());
        entidade.setDataNascimento(obj.getDataNascimento().toString());
        entidade.setNacionalidade(obj.getNacionalidade());
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
        Optional<Autor> autor = findById(id);
        autorRepository.deleteById(id);
    }
}
