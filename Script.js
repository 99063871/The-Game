var reden = prompt("Je zit in de gevangenis, wat heb je gedaan?")
var number = Math.floor(Math.random() * 101);
alert("Daar zit je " +  number + " jaar in de gevangenis voor.")


var escape = prompt("wil je ontsnappen?")
escape = escape.toLowerCase();
	if(escape == "ja"){
		alert("je loopt je cel uit waar wil je heen Links of Rechts?")
		var LeRi = prompt("Links of Rechts?")
		LeRi = LeRi.toLowerCase();
		if(LeRi == "links"){
			alert("je bent naar links gelopen daar zie je 4 criminelen lopen, wat doe je laat je ze lopen of ga je vechten?")
			var LeVecht = prompt("Ga je vechten? kies ja of nee.")
			LeVecht = LeVecht.toLowerCase();
				if(LeVecht == "ja"){
					alert("Dit was niet de beste keuze 4 tegen 1 is niet zo eerlijk.")
					document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
				}
				else if(LeVecht == "nee"){
					alert("Je laat ze met rust en je loopt verder.") 
					alert("Je loopt langs een werkplaats, loop je naar binnen?")
						var WeBinnen = prompt("loop je de werkplaats in? kies uit ja of nee")
						WeBinnen = WeBinnen.toLowerCase();
							if(WeBinnen == "ja"){
							alert("Je ziet een schep, pikhouweel en schuurpapier.")
							var Keuze = prompt("Wat neem je mee? kies uit schep, pikhouweel of schuurpapier")
							Keuze = Keuze.toLowerCase();
								if(Keuze == "schuurpapier"){
								alert("Je hebt " + Keuze + " gekozen.")}
								else{ alert("Je hebt een " + Keuze + " gekozen.")
								}


									}
									if(WeBinnen == "ja"){
										alert("Je bent weer uit de werkplaats gelopen en loopt weer verder.")
										alert("Je komt nu bij beveiliging poortjes.")
											var WeUit = prompt("Loop je erdoor heen of ga je terug naar je cel? kies uit verder of terug")
											WeUit = WeUit.toLowerCase();
											if(WeUit == "verder"){
												if(Keuze == "schuurpapier"){
													alert("Je bent door de poortjes gelopen zonder problemen.")
													alert("je bent in de buitenplaats gekomen, je ziet daar een basketbal veld en bankjes.")
														var BuitenDoen = prompt("Wat ga je doen basketballen of op een bank zitten? kies uit basketballen of bank zitten.")
														if(BuitenDoen == "bank zitten"){
															alert("Er zit al iemand op de bank dus je gaat naast hem zitten.")
															alert("Hij begint een gesprek, hij vraagt of je schuurpapier hebt want dat is het enige wat hij nog nodig heeft om te ontsnappen.")
															alert("Je zegt dat je schuurpapier bij je hebt en laat het zien.")
															alert("Hij zegt: geef het aan mij en we zullen ontsnappen.")
															var GeefSchuur = prompt("geef je het schuurpapier? kies ja of nee")
																if(GeefSchuur == "ja"){
																	alert("je geeft het schuurpapier. Hij zegt dat je hem moet volgen.")
																	var Volg = prompt("Volg je hem? kies ja of nee")}
																		if(Volg == "ja"){
																			alert("Je volgt hem.")
																			alert("Hij loopt een gang in en jij achtervolgt hem.")
																			alert("Hij draaide zich om bedankte je voor het schuurpapier en een vriend van hem stak je neer.")
																			document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
																		}
																			else if(Volg == "nee"){
																				alert("Hij loopt weg met je schuurpapier.")
																				var AVolg = prompt("Loop je achter hem aan om je schuurpapier terug te pakken? kies ja of nee")
																					if(AVolg == "ja"){
																						alert("Je achtervolgt hem, Hij rent weg dus jij rent achter hem aan.")
																						alert("Hij rent een gang in jij achtervolgt hem die gang in en je werd neergestoken.")
																						document.write("Je bent doodgegaan refresh je pagina om te herstarten.")
																					}
																			}	
																else if(GeefSchuur == "nee"){
																	alert("Je geeft het schuurpapier niet")
																	alert("Hij zegt dat je vanavond 9 uur naar het toiletgebouw moet komen met het schuurpapier.")
																	alert("Je loopt terug naar je cel.")
																	alert("Een paar uur later loop je naar het toiletgebouw daar zie je hem staan met 3 andere.")
																	alert("Hij vraagt voor het schuurpapier en je geeft het aan hem.")
																	alert("Hij combineert het met iets en hij plakt het vast aan de muur.")
																	alert("het ontploft en jullie kunnen zo naar buiten lopen.")
																	document.write("Het is je gelukt je bent uit de gevangenis!!!")
																}	
														}
														else if(BuitenDoen == "basketballen."){
															alert("Je gaat basketballen.")
															alert("Tijdens het basketballen kom je in een ruzie.")
															alert("Je wordt neergestoken.")
															document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
														}
												}
												else if(Keuze != "schuurpapier"){
													document.write("je bent gepakt refresh de pagina om te herstarten.")
												}
											}
											else if(WeUit == "terug"){
												if(Keuze == "schuurpapier"){
													alert("Je gaat je cel verbouwen en je gaat de " + number + " jaar uitzitten in een mooie cel.")
													document.write("Het is je gelukt je bent uit de gevangenis!!!")
												}
												else if(Keuze == "pikhouweel"){
													alert("Je loopt terug naar je cel en je gaat graven.")
													alert("Het duurde even maarrrr...")
													document.write("Het is je gelukt je bent uit de gevangenis!!!")
												}
												else if(Keuze == "schep"){
													alert("Je loopt terug naar je cel en je gaat graven.")
													alert("Na een tijdje kom je erachter dat een schep niet bedoelt is voor beton.")
													document.write("Je hebt het opgegeven refresh de pagina om te herstarten.")
												}
											}

																					}
							else if(WeBinnen != "ja"){
										alert("je loopt langs de werkplaats.")
										alert("Je komt nu bij beveiliging poortjes.")
											var WeVerder = prompt("Loop je erdoor heen of ga je terug naar je cel? kies uit verder of terug")
											WeVerder = WeVerder.toLowerCase();
												if(WeVerder == "verder"){
													alert("Je loopt er door heen zonder problemen.")
													alert("Je bent de buitenplaats ingelopen er is niemand.")
													var BuiDoen = prompt("Ga je op een bank zitten of ga je wat eten? kies zitten of eten")
													BuiDoen= BuiDoen.toLowerCase();
														if(BuiDoen == "zitten"){
															alert("Je gaat op de bank zitten.")
															var BlijfZitten = prompt("Blijf je zitten of ga je naar de kantine om wat te eten? kies zitten of eten")
																BlijfZitten=BlijfZitten.toLowerCase();
																if(BlijfZitten == "zitten"){
																	alert("Je blijft zitten.")
																	alert("Weet je zeker dat je blijft zitten je verhongert bijna.")
																	var BlijvenZitten = prompt("Blijf je nog zitten of ga je eten? kies Zitten of eten")
																	BlijvenZitten=BlijvenZitten.toLowerCase();
																		if(BlijvenZitten == "zitten"){
																			document.write("Je bent verhongert refresh de pagina om te herstarten.")
																		}
																		else if(BlijvenZitten == "eten"){
																alert("Je loopt naar de kantine en gaat wat eten.")
																alert("Terwijl je terug loopt naar je cel zie je iemand graven en je vraagt wat hij doet.")
																alert("Hij zegt dat hij aan het ontsnappen is.")
																alert("Je zegt dat je bewakers gaat roepen als hij je niet mee laat komen dus hij laat je meekomen.")
																document.write("Het is je gelukt je bent uit de gevangenis!!!")
																}
																}
																
														}
														else if(BuiDoen == "eten"){
															alert("Je loopt naar de kantine en gaat wat eten")
															alert("Terwijl je terug loopt naar je cel zie je iemand graven en je vraagt wat hij doet.")
															alert("Hij zegt dat hij aan het ontsnappen is.")
															alert("Je zegt dat je bewakers gaat roepen als hij je niet mee laat komen dus hij laat je meekomen.")
															document.write("Het is je gelukt je bent uit de gevangenis!!!")

												}
												}
														else if(WeVerder == "terug"){
							alert("Je loopt terug naar je cel terwijl je terugloopt zie je iemand weg rennen.")
							alert("Hij heeft 3 mensen achter zich aan je ziet dat ze wapens hebben dus je rent ook weg achter hem aan.")
							alert("Hij draaid zich om en duwt je tegen de muur aan en je valt.")
							alert("Van de 3 mensen stopt er 1 en steekt je neer.")
							document.write("Je bent doodgegaan refresh de pagina om te herstarten.")
							}
							}

						}
						else if(LeRi == "rechts"){
		alert("Je loopt naar rechts je ziet daar de fitness ruimte.")
		var Fitness = prompt("Loop je naar binnen of loop je door? kies binnen of door")
		Fitness=Fitness.toLowerCase();
			if(Fitness == "binnen"){
				alert("Je bent naar binnen gelopen")
				var FitnessBinnen = prompt("Ga je hardlopen of fietsen? kies hardlopen of fietsen")
					if(FitnessBinnen == "hardlopen"){
						alert("Je gaat hardlopen")
						alert("Je bent nu al 5 km aan het hardlopen tot er iemand op je af loopt en de stekker van je apparaat eruit haalt")
						document.write("Je bent gevallen op je nek, je bent dood refresh de pagina om de herstarten")
					}
			}
	}
				}
				else if(LeRi == "rechts"){
		alert("Je loopt naar rechts je ziet daar de fitness ruimte.")
		var Fitness = prompt("Loop je naar binnen of loop je door? kies binnen of door")
		Fitness=Fitness.toLowerCase();
			if(Fitness == "binnen"){
				alert("Je bent naar binnen gelopen")
				var FitnessBinnen = prompt("Ga je hardlopen of fietsen? kies hardlopen of fietsen")
				FitnessBinnen=FitnessBinnen.toLowerCase();
					if(FitnessBinnen == "hardlopen"){
						alert("Je gaat hardlopen")
						alert("Je bent nu al 5 km aan het hardlopen tot er iemand op je af loopt en de stekker van je apparaat eruit haalt")
						document.write("Je bent gevallen op je nek, je bent dood refresh de pagina om de herstarten")
					}
					else if(FitnessBinnen == "fietsen"){
						var SoortFietsen = prompt("Welke soort fietsen ga je doen? kies uit wielrennen of mountainbiken")
							if(SoortFietsen == "mountainbiken"){
								alert("Je hebt een goede keuze gemaakt!")
								alert("Er komen een paar gevangene naar je toe lopen en zeggen: kom met ons mee.")
								alert("Je loopt met ze mee.")
								alert("Ze stoppen met lopen, je staat bij een ingang van een cel.")
								alert("Iemand tilt het bed op en je ziet een gat.")
								alert("Ze zeggen dat je in het gat moet en dat je dan zo naar buiten loopt.")
								document.write("Het is je gelukt je bent uit de gevangenis!!!")
							}
							else if(SoortFietsen == "wielrennen"){
								alert("Na 20 km gefietst te hebben stop je.")
								alert("Je loopt naar de douches.")
								alert("Terwijl je aan het douchen bent glij je uit.")
								document.write("Je bent  hard gevallen gevallen, refresh de pagina om te herstarten.")
							}
					}
			}
			else if(Fitness == "door"){
				alert("Je loopt langs de fitness ruimte.")
				alert("Je komt uit bij de bewakers.")
				var Bewakers = prompt("Loop je bij de bewakers naar binnen? kies ja of nee")
					if(Bewakers == "ja"){
						alert("Je loopt bij de bewakers naar binnen")
						var Wapen = prompt("Je ziet een wapen pak je het wapen? kies ja of nee")
						Wapen=Wapen.toLowerCase();
							if(Wapen == "ja"){
								alert("De bewakers zien het en schieten je.")
								document.write("Je bent doodgeschoten refresh de pagina om te herstarten.")
							}
							else if(Wapen == "nee"){
								alert("De bewakers sturen je weg omdat je daar niet mag zijn.")
								alert("Je loopt terug naar je cel.")
								alert("Je had niet door dat je achtervolgt werd door bewakers.")
								alert("Zodra je in je cel komt wordt er tegen je gezegd dat je naar een beter beveiligde cel verplaatst wordt")
								document.write("Je zal nooit uit deze cel komen, na "  + number + " jaar ben je de gevangenis uitgekomen.")
							}
					}
					else if(Bewakers == "nee"){
						alert("Je loopt nog verder.")
						alert("Je ziet een bewaker staan hij is helemaal alleen.")
						var BewakerDood = prompt("Ga je tegen de bewaker vechten? kies ja of nee")
						BewakerDood=BewakerDood.toLowerCase();
							if(BewakerDood == "ja"){
								alert("Je hebt geluk gehad, je hebt de bewaker vermoord.")
								alert("je pakt zijn sleutels.")
								alert("je komt bij een deur, er staat uitgang op de deur.")
								alert("gelukkig heb je sleutels bij je!")
								document.write("Het is je gelukt je bent uit de gevangenis!!!")
							}
							else if(BewakerDood == "nee"){
								alert("Je loopt langs de bewaker")
								alert("Je word neergeslagen...")
								document.write("Ik denk niet dat je daar naartoe mocht. je word naar een beter beveiligde cel verplaatst. Na " + number + " Jaar word je vrijgelaten.")
							}
					}
			}
	}
		}

	else if(escape == "nee"){
		alert("Na " + number + " lange jaren ben je de gevangenis uitgekomen.")
		document.write("Het is je gelukt je bent uit de gevangenis!!!")
	}