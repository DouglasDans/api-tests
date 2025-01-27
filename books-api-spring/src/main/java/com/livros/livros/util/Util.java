package com.livros.livros.util;

public class Util {
    public static String getFunctionName() {
        String methodName = Thread.currentThread().getStackTrace()[2].getMethodName(); //Pega o método que chamou
        methodName = Thread.currentThread().getStackTrace()[1].getMethodName(); //Pega o método atual
        return methodName;
    }
}
