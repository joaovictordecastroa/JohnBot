package br.com.takeBot.John.model;


import java.io.*;
import java.net.*;

/**
 * @author João Victor de Castro Alves
 * @apiNote -  Método que realiza a requisição para a API do GitHub e retorna o JSON em formato String
 */
public class Repositories {
	public String repositories() {
		HttpURLConnection connection = null;

		  try {
		    //Cria a conexão com a API do GitHub
		    URL url = new URL("https://api.github.com/users/takenet/repos");
		    connection = (HttpURLConnection) url.openConnection();
		    connection.setRequestMethod("GET");
		    connection.setRequestProperty("User-Agent", "Mozilla/5.0");
		    connection.setUseCaches(false);
		    connection.setDoOutput(true);


		    //Recupera o JSON retornado pela API  
		    InputStream is = connection.getInputStream();
		    BufferedReader rd = new BufferedReader(new InputStreamReader(is));
		    StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
		    String line;
		    while ((line = rd.readLine()) != null) {
		      response.append(line);
		      response.append('\r');
		    }
		    rd.close();
		    //Retorna o JSON em formato String
		    return  response.toString();	       
		  } catch (Exception e) {
			  //Imprime o erro caso uma Exception seja lançada
		    e.printStackTrace();
		    return null;
		  } finally {
			  //Finaliza a conexão independente do sucesso ou não da requisição
		    if (connection != null) {
		      connection.disconnect();
		    }
		  }
	}
}
