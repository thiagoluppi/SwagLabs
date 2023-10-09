const { test } = require('@playwright/test')

/*

"Two integers A and B are given. We are interested in positions 
at which the decimal representation of A occurs as a substring in the 
decimal representation of B (counting from 0). For example:
53 occurs in 1953786 at position 2.
78 occurs in 195378678 at positions 4 and 7.
57 does not occur in 153786.

Decimal representations are assumed to be big-endian and without leading zeros 
(the only exception being the number 0, whose decimal representation is "0").

function solution(A, B);

that, given two integers A and B, returns the leftmost position at which A occurs in B. 
The function should return −1 if A does not occur in B.

For example, given A = 53 and B = 1953786, the function should return 2, as explained above.

Assume that:
A and B are integers within the range [0..999,999,999]."

*/
test.describe("Login", () => {

    test('Two Integers', async ({ }) => {
        function solution(A, B) {
            // Convertendo A e B para strings para facilitar a busca de substrings
            let strA = A.toString()
            let strB = B.toString()

            // Procurando a primeira ocorrência de A em B
            let posicao = strB.indexOf(strA)

            // Retornando a posição de A em B, ou -1 se A não ocorrer em B
            return posicao
        }

        let resultado = solution(123, 123456789)
        console.log(resultado)
    })
})

/*

"You are given a login page to an online service. Your task is to validate whether the form works correctly.

Write a list of test cases that should check whether the given page works correctly. 
Write them as JUnit test methods (@test) in Solution class. 
Before each test, your class is called with the WebDriver already pointing at the page being tested. 

info:
− Valid credentials: email: login@codility.com, Password: password
− Invalid credentials: email: unknown@codility.com, Password: password


Requirements:
1. Check if the email and password fields are on the main screen of the application:
Email input has id equal to "email-input"
Password input has id equal to "password-input"

2. Check if the given valid credentials work:
Use credentials given in the description (login@codility.com)
After a successful login attempt, a div with class equal to message success and containing a message: 
Welcome to Codility is visible.

3. Check if the given wrong credentials work:
Use credentials given in the description (unknown@codility.com).
After an unsuccessful login attempt, a div with class equal to message error and containing a message 
You shall not pass! Arr! is visible.

4. Check if the email validation is working:
Use email in an invalid form
After an unsuccessful login attempt, a div with class equal to validation error and 
containing a message Enter a valid email is visible.

5. Check for empty credentials:
After an unsuccessful login attempt, a div with class equal to validation error 
and containing a message Email is required is visible.

Assessment/Tools:
The WebDriver that is provided (webDriver) in the constructor is already pointing to the page being tested. 
Make sure you annotate your test cases with a @Test decorator. 
If the page being tested is misbehaving, at least one of your tests should fail."





package com.codility.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import org.junit.Test;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AppTest extends BaseTest {
    @Test
    public void verificarCamposEmailSenha() {
        WebElement campoEmail = webDriver.findElement(By.id("email-input"));
        WebElement campoSenha = webDriver.findElement(By.id("password-input"));
        assertTrue(campoEmail.isDisplayed());
        assertTrue(campoSenha.isDisplayed());
    }

    @Test
    public void verificarCredenciaisValidas() {
        webDriver.findElement(By.id("email-input")).sendKeys("login@codility.com");
        webDriver.findElement(By.id("password-input")).sendKeys("password");
        webDriver.findElement(By.id("login-button")).click();
        WebElement mensagemSucesso = webDriver.findElement(By.cssSelector(".message.success"));
        assertTrue(mensagemSucesso.isDisplayed());
        assertTrue(mensagemSucesso.getText().contains("Welcome to Codility"));
    }

    @Test
    public void verificarCredenciaisInvalidas() {
    webDriver.findElement(By.id("email-input")).sendKeys("unknown@codility.com");
    webDriver.findElement(By.id("password-input")).sendKeys("password");
    webDriver.findElement(By.id("login-button")).click();
    WebElement mensagemErro = webDriver.findElement(By.cssSelector(".message.error"));
    assertTrue(mensagemErro.isDisplayed());
    assertTrue(mensagemErro.getText().contains("You shall not pass! Arr!"));
    }

    @Test
    public void verificarValidacaoEmail() {
    webDriver.findElement(By.id("email-input")).sendKeys("email-invalido");
    webDriver.findElement(By.id("password-input")).sendKeys("password");
    webDriver.findElement(By.id("login-button")).click();
    WebElement erroValidacao = webDriver.findElement(By.cssSelector(".validation.error"));
    assertTrue(erroValidacao.isDisplayed());
    assertTrue(erroValidacao.getText().contains("Enter a valid email"));
    }

    @Test
    public void verificarCredenciaisVazias() {
        webDriver.findElement(By.id("email-input")).sendKeys("");
        webDriver.findElement(By.id("password-input")).sendKeys("");
        webDriver.findElement(By.id("login-button")).click();
        WebElement erroValidacao = webDriver.findElement(By.cssSelector(".validation.error"));
        assertTrue(erroValidacao.isDisplayed());
        assertTrue(erroValidacao.getText().contains("Email is required"));
    }
}
*/
