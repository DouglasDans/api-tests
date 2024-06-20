package com.livros.livros.service;

import com.livros.livros.model.entities.Autor;

import java.util.List;
import java.util.Optional;

public interface IAutorService {

    public List<Autor> find();

    public Optional<Autor> findById(Long id);

    public Optional<Autor> insert(Autor obj);

    public Optional<Autor> update(Autor obj);

    public void delete(Long id);

}
