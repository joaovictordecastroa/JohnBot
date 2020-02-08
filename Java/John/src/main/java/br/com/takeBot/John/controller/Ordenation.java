package br.com.takeBot.John.controller;

import java.awt.List;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
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
	
	public ArrayList<JSONObject> getCSharpRepositories() throws ParseException {
		Repositories repositories = new Repositories();
	    JSONArray repositoriesArray = new JSONArray(repositories.repositories());
	    ArrayList<JSONObject> response = new ArrayList<JSONObject>();
	    
	    for (int i = 0; i < repositoriesArray.length(); i++) {
	    	JSONObject repository = repositoriesArray.getJSONObject(i);
			String language = (repository.get("language")).toString();
	    	if(language.equals("C#")) {
		        response.add(repository);
	    	} 
	    }
	    return (response);
	}
	
	public JSONObject getJSONRepositories() throws ParseException {
		
		JSONObject response = new JSONObject();
	    ArrayList<JSONObject> repositoriesArray = getCSharpRepositories();
	    
	    Collections.sort(repositoriesArray, new Comparator<JSONObject>(){
            public int compare(JSONObject a, JSONObject b) {
              return (a.get("created_at").toString()).compareToIgnoreCase(b.get("created_at").toString());
           }
	    });
	    
	    for(int i = 1; i < 6; i++) {
	    	response.put(String.valueOf(i),repositoriesArray.get(i-1));
	    }

		return response;
	}
}
