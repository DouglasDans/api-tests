package com.livros.livros.model.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String isbn;
    private String titulo;
    private String assunto;
    private LocalDate dataPublicacao;
    private String anoPublicacao;
    private int edicao;

    @ManyToOne
    @JoinColumn(name = "idAutor", referencedColumnName = "id")
    private Autor autor;

    @ManyToOne
    @JoinColumn(name = "idEditora", referencedColumnName = "id")
    private Editora editora;

    public Livro(){}

    public Livro(String isbn, String titulo, String assunto, LocalDate dataPublicacao, String anoPublicacao, int edicao, Autor autor, Editora editora) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.assunto = assunto;
        this.dataPublicacao = dataPublicacao;
        this.anoPublicacao = anoPublicacao;
        this.edicao = edicao;
        this.autor = autor;
        this.editora = editora;
    }

    public Long getId() {
        return id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public LocalDate getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }

    public String getAnoPublicacao() {
        return anoPublicacao;
    }

    public void setAnoPublicacao(String anoPublicacao) {
        this.anoPublicacao = anoPublicacao;
    }

    public int getEdicao() {
        return edicao;
    }

    public void setEdicao(int edicao) {
        this.edicao = edicao;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }

    public Editora getEditora() {
        return editora;
    }

    public void setEditora(Editora editora) {
        this.editora = editora;
    }
}
