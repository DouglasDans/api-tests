package com.livros.livros.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Editora {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String nome;
   private String cnpj;
   private String pais;

   public Editora(){}

   public Editora(String nome, String cnpj, String pais) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.pais = pais;
   }

   public Long getId() {
      return id;
   }

   public String getNome() {
      return nome;
   }

   public void setNome(String nome) {
      this.nome = nome;
   }

   public String getCnpj() {
      return cnpj;
   }

   public void setCnpj(String cnpj) {
      this.cnpj = cnpj;
   }

   public String getPais() {
      return pais;
   }

   public void setPais(String pais) {
      this.pais = pais;
   }
}
