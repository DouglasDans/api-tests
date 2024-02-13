package com.livros.livros.service;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.model.entities.Editora;

import java.util.List;
import java.util.Optional;

public interface IEditoraService {
    public List<Editora> find();

    public Optional<Editora> findById(Long id);

    public Optional<Editora> insert(Editora obj);

    public Optional<Editora> update(Editora obj);

    public void delete(Long id);

}
