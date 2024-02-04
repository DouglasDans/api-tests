package com.livros.livros.service;

import com.livros.livros.model.entities.Autor;

import java.util.List;

public interface IAutorService {

    public List<Autor> find();

    public Autor insert(Autor obj);

}
