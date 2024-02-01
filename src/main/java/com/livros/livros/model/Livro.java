package com.livros.livros.model;

import jakarta.persistence.*;

@Entity
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ISBN;
    private String titulo;
    private String anoPublicacao;
    private int edicao;

    @ManyToOne
    @JoinColumn(name = "idAutor", referencedColumnName = "id")
    private Autor autor;

    @ManyToOne
    @JoinColumn(name = "idEditora", referencedColumnName = "id")
    private Editora editora;

    public Livro(String ISBN, String titulo, String anoPublicacao, int edicao, Autor autor, Editora editora) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.edicao = edicao;
        this.autor = autor;
        this.editora = editora;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
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
