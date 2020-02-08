package br.com.takeBot.John.controller;

import java.text.ParseException;

/**
 * @author João Victor de Castro Alves
 */
public class Testes {

	public static void main(String[] args) throws ParseException {
		RepositoryService JSON = new RepositoryService();
		System.out.print(JSON.getJSONRepositories());
	}
}
