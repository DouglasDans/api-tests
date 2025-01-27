package com.livros.livros.service.exception;

public class DatabaseException extends RuntimeException {
    public DatabaseException(String msg){
        super(msg);
    }
}
