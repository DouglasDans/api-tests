package com.livros.livros.service.exception;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(Long id){
        super("Dado não encontrado no banco de dados. Id: " + id);
    }

}
