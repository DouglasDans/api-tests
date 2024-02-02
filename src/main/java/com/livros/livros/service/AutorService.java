package com.livros.livros.service;

import com.livros.livros.model.Autor;
import com.livros.livros.model.IAutorRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService implements IAutorService{

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IAutorRepository autorRepository;

    @Override
    public List<Autor> consultaAutor() {
        log.info(">>>> [AutorService] consultaAutor iniciado");

        return autorRepository.findAll();
    }
}
