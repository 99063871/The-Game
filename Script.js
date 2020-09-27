var reden = prompt("Je zit in de gevangenis, wat heb je gedaan?")
var number = Math.floor(Math.random() * 101);
alert("Daar zit je " +  number + " jaar in de gevangenis voor.")


var escape = prompt("wil je ontsnappen?")
escape = escape.toLowerCase();
	if(escape == "ja"){
		alert("je loopt je cel uit waar wil je heen Links of Rechts?")
		var LeRi = prompt("Links of Rechts?")
		LeRi = LeRi.toLowerCase();
		alert("je loopt naar " + LeRi)
		if(LeRi == "links"){
			alert("je bent naar links gelopen daar zie je 4 criminelen lopen, wat doe je laat je ze lopen of ga je vechten?")
			var LeVecht = prompt("Ga je vechten? kies ja of nee.")
			LeVecht = LeVecht.toLowerCase();
				if(LeVecht == "ja"){
					alert("Dit was niet de beste keuze 4 tegen 1 is niet zo eerlijk")
					document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
				}
				else if(LeVecht == "nee"){
					alert("Je laat ze met rust en je loopt verder") 
					alert("Je loopt langs een werkplaats, loop je naar binnen?")
						var WeBinnen = prompt("loop je de werkplaats in? kies uit ja of nee")
						WeBinnen = WeBinnen.toLowerCase();
							if(WeBinnen == "ja"){
							alert("Je ziet een schep, pikhouweel en schuurpapier")
							var Keuze = prompt("Wat neem je mee? kies uit schep, pikhouweel of schuurpapier")
							Keuze = Keuze.toLowerCase();
								if(Keuze == "schuurpapier"){
								alert("Je hebt " + Keuze + " gekozen")}
								else{ alert("Je hebt een " + Keuze + " gekozen")
								}


									}
									if(WeBinnen == "ja"){
										alert("Je bent weer uit de werkplaats gelopen en loopt weer verder")
										alert("Je komt nu bij beveiliging poortjes")
											var WeUit = prompt("Loop je erdoor heen of ga je terug naar je cel? kies uit verder of terug")
											WeUit = WeUit.toLowerCase();
											if(WeUit == "verder"){
												if(Keuze == "schuurpapier"){
													alert("Je bent door de poortjes gelopen zonder problemen")
													alert("je bent in de buitenplaats gekomen, je ziet daar een basketbal veld en bankjes.")
														var BuitenDoen = prompt("Wat ga je doen basketballen of op een bank zitten? kies uit basketballen of bank zitten")
														if(BuitenDoen == "bank zitten"){
															alert("Er zit al iemand op de bank dus je gaat naast hem zitten")
															alert("Hij begint een gesprek, hij vraagt of je schuurpapier hebt want dat is het enige wat hij nog nodig heeft om te ontsnappen")
															alert("Je zegt dat je schuurpapier bij je hebt en laat het zien")
															alert("Hij zegt: geef het aan mij en we zullen ontsnappen.")
															var GeefSchuur = prompt("geef je het schuurpapier? kies ja of nee")
																if(GeefSchuur == "ja"){
																	alert("je geeft het schuurpapier. Hij zegt dat je hem moet volgen")
																	var Volg = prompt("Volg je hem? kies ja of nee?")}
																		if(Volg == "ja"){
																			alert("Je volgt hem.")
																			alert("Hij loopt een gang in en jij achtervolgt hem.")
																			alert("Hij draaide zich om bedankte je voor het schuurpapier en een vriend van hem stak je neer")
																			document.write("Je bent doodgegaan refresh de pagina om te herstarten")
																		}
																			else if(Volg == "nee"){
																				alert("Hij loopt weg met je schuurpapier.")
																				var AVolg = prompt("Loop je achter hem aan om je schuurpapier terug te pakken? kies ja of nee")
																					if(AVolg == "ja"){
																						alert("Je achtervolgt hem, Hij rent weg dus jij rent achter hem aan")
																						alert("Hij rent een gang in jij achtervolgt hem die gang in en je werd neergestoken")
																						document.write("Je bent doodgegaan refresh je pagina om te herstarten")
																					}
																			}	
																else if(GeefSchuur == "nee"){
																	alert("Je geeft het schuurpapier niet")
																	alert("Hij zegt dat je vanavond 9 uur naar de werkplaats moet komen met het schuurpapier")
																	alert("Je loopt terug naar je cel")
																	alert("Een paar uur later loop je naar de werkplaats daar zie je hem staan met 3 andere.")
																	alert("Hij vraagt voor het schuurpapier en je geeft het aan hem.")
																	alert("Hij combineert het met iets en hij plakt het vast aan de muur")
																	alert("het ontploft en jullie kunnen zo naar buiten lopen")
																	document.write("Het is je gelukt je bent uit de gevangenis!!!")
																}	
														}
														else if(BuitenDoen == "basketballen"){
															alert("Je gaat basketballen")
															alert("Tijdens het basketballen kom je in een ruzie")
															alert("Je wordt neergestoken")
															document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
														}
												}
												else if(Keuze != "schuurpapier"){
													document.write("je bent gepakt refresh de pagina om te herstarten")
												}
											}
																					}
							else if(WeBinnen != "Ja"){
										alert("je loopt langs de werkplaats")
										alert("Je komt nu bij beveiliging poortjes")
											var WeVerder = prompt("Loop je erdoor heen of ga je terug naar je cel? kies uit verder of terug")
											WeVerder = WeUit.toLowerCase();
												if(WeVerder == "verder"){
													alert("Je loopt er door heen zonder problemen")
													alert("Je bent de buitenplaats ingelopen er is niemand")
													var BuiDoen = prompt("Ga je op een bank zitten of ga je weer naar binnen? kies bank of binnen")
													bank=bank.toLowerCase();
												}
												if(BuiDoen == "bank"){
															alert("Je gaat op de bank zitten")
														}
							}
						}
				}
		}

	else if(escape == "nee"){
		alert("Na" + number + "lange jaren ben je de gevangenis uitgekomen.")
		document.write("Het is je gelukt je bent uit de gevangenis!!!")
	}
	else if(LeRi == "rechts"){
		alert("Je loopt naar rechts")
	}