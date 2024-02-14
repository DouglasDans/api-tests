package com.livros.livros.service.impl;

import com.livros.livros.model.entities.Autor;
import com.livros.livros.model.entities.Editora;
import com.livros.livros.model.entities.Livro;
import com.livros.livros.model.repositories.ILivroRepository;
import com.livros.livros.service.ILivroService;
import com.livros.livros.service.exception.DatabaseException;
import com.livros.livros.service.exception.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
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
        log.info(">>>> findById(" + id +") iniciado");

        Optional<Livro> livro = livroRepository.findById(id);

        return Optional.ofNullable(livro.orElseThrow(() -> new ResourceNotFoundException(id)));
    }

    @Override
    public Optional<Livro> insert(Livro obj) {
        log.info(">>>> [AutorService] insert iniciado");

        return Optional.of(livroRepository.save(obj));
    }

    @Override
    public Optional<Livro> update(Livro obj) {
        log.info(">>>> update iniciado");
        try{
            Livro entidade = livroRepository.getReferenceById(obj.getId());
            updateData(entidade, obj);
            return Optional.of(livroRepository.save(entidade));
        } catch (EntityNotFoundException e){
            throw new ResourceNotFoundException(obj.getId());
        }
    }

    private void updateData(Livro entidade, Livro obj){
        entidade.setIsbn(obj.getIsbn());
        entidade.setTitulo(obj.getTitulo());
        entidade.setAssunto(obj.getAssunto());
        entidade.setAutor(obj.getAutor());
        entidade.setDataPublicacao(obj.getDataPublicacao().toString());
        entidade.setEdicao(obj.getEdicao());
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
        Optional<Livro> livro = findById(id);
        livroRepository.deleteById(id);
    }
}
