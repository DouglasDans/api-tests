package com.livros.livros.service.impl;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.model.repositories.IAutorRepository;
import com.livros.livros.service.IAutorService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService implements IAutorService {

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IAutorRepository autorRepository;

    @Override
    public List<Autor> find() {
        log.info(">>>> [AutorService] consultaAutor iniciado");

        return autorRepository.findAll();
    }

    @Override
    public Autor insert(Autor obj) {
        return autorRepository.save(obj);
    }


}
