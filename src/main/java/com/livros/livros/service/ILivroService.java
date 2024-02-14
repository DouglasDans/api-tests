package com.livros.livros.service;

import com.livros.livros.model.entities.Editora;
import com.livros.livros.model.entities.Livro;

import java.util.List;
import java.util.Optional;

public interface ILivroService {

    public List<Livro> find();

    public Optional<Livro> findById(Long id);

    public Optional<Livro> insert(Livro obj);

    public Optional<Livro> update(Livro obj);

    public void delete(Long id);
}
