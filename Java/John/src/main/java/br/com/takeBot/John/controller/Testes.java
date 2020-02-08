package br.com.takeBot.John.controller;

import java.text.ParseException;
import java.util.ArrayList;

import org.json.JSONObject;

import br.com.takeBot.John.controller.*;

public class Testes {

	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		Ordenation JSON = new Ordenation();
		ArrayList<JSONObject> jsonValues = JSON.getCSharpRepositoriesOrdenedByData();
	}
}
