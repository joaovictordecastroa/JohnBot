package br.com.takeBot.John.controller;

import java.awt.List;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.json.JSONArray;
import org.json.JSONObject;


import br.com.takeBot.John.controller.*;
import br.com.takeBot.John.model.Repositories;

/**
 * @
 * @author "João Victor de Castro Alves"
 * @apiNote - "Método que recupera os repositórios em C# da Take e realiza a ordenação do JSON por data" 
 */
public class Ordenation {
	public ArrayList getCSharpRepositoriesOrdenedByData() throws ParseException {
		Repositories repositories = new Repositories();
	    JSONArray repositoriesArray = new JSONArray(repositories.repositories());
	    JSONArray sortedJsonArray = new JSONArray();
	    //Cria uma lista vazia de JSONObject
	    ArrayList<JSONObject> jsonValues = new ArrayList<JSONObject>();
	    
	    //Percorre o JSON inserindo na ArrayList<JSONObject> os repositórios relacionados a C#
	    for (int i = 0; i < repositoriesArray.length(); i++) {
	    	JSONObject repository = repositoriesArray.getJSONObject(i);
			String language = (repository.get("language")).toString();
	    	if(language.equals("C#")) {
		        jsonValues.add(repository);
	    	} 
	    }
	    return (jsonValues);
	}
}
