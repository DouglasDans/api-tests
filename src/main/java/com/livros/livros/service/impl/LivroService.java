package com.livros.livros.service.impl;

import com.livros.livros.model.entities.Editora;
import com.livros.livros.model.entities.Livro;
import com.livros.livros.model.repositories.ILivroRepository;
import com.livros.livros.service.ILivroService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService implements ILivroService {

    private final ILivroRepository livroRepository;
    private final Logger log = LogManager.getLogger(getClass());

    public LivroService(ILivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    @Override
    public List<Livro> find() {
        log.info(">>>> [find iniciado]");

        return livroRepository.findAll();
    }

    @Override
    public Optional<Livro> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<Livro> insert(Livro obj) {
        return Optional.empty();
    }

    @Override
    public Optional<Livro> update(Livro obj) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
