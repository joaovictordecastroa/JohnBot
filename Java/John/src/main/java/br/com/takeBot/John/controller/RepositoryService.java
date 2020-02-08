package br.com.takeBot.John.controller;

import java.text.ParseException;
import java.util.*;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.takeBot.John.model.RepositoryJSON;

/**
 * @author João Victor de Castro Alves
 */
public class RepositoryService {
	
	/**
	 * Filter Take.NET repositories by C# language
	 * @return List of repositories of GitHub API filtered by C# language
	 * @throws ParseException
	 */
	public ArrayList<JSONObject> getCSharpRepositories() throws ParseException {
		RepositoryJSON repositories = new RepositoryJSON();
	    JSONArray repositoriesArray = new JSONArray(repositories.get());
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
	
	/**
	 * Build JSONObject sorted by date for JohnBot
	 * @return
	 * @throws ParseException
	 */
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
