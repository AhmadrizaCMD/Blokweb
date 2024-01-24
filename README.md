# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ahmadriza Sewruttan

  #### Je startniveau:
  Rood

  #### Je focus:
Responsive 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website: https://www.lamborghini.com/en-en 
  
  Omschrijving: Lamborgini is een sportauto website waar je kunt kijken wat het is en welke auto's er allemaal zijn.

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina 
  
  <img src="readme-images/beyond.png" width="375px" alt="omschrijving van de pagina">


  

  #### Screenshot(s) van de tweede pagina (small screen):
Concept pagina 
 
  <img src="readme-images/www.lamborghini.com_en-en_models_concept.png" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  - De linkjes hadden geen unieke namen
  - Er werden veel <div> gebruikt
  - De focus state was nier duidelijk uitgewerkt
  - De headings waren soms niet in goede volgorde geschreven
  - voor list content gebruikten ze niet altijd list items
  - bij sommige img hadden ze geen logische alt text
  - de video kan niet worden pauzeerd
  - video had geen caption
  - Er is geen dark mode beschikbaar
  - bij animaties gebruikten ze geen correcte media query

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

 Home pagina 
  <img src="readme-images/Homebreakdown.png" width="375px" alt="omschrijving van de pagina">

 concept pagina 
  <img src="readme-images/iPhone 13 & 14 - 3.png" width="375px" alt="omschrijving van de pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen
  Namen:
  
  Merle:

  Ahmadriza: - Ik wil weten hoe je een video/annimatie van de inspector kunt halen. Bij mijn site is dat nog ingewikkeld. 
             - Hoe de li in de nav zo tonen dat op mobiel formaat het verdwijnt in de dropdown menu en bij desktop wel zichrbaar is
              

  Quinten: student 2/Quinten Weimer: Moet een form om mee te zoeken in de header of er buiten?
          - Hoe maak ik dingen klikbaar zonder meer dan 1 html pagina?
          - Hoe spreek ik mijn gewenste images aan? Ze zitten allemaal boven een h3 dus mis kan ik daar wat mee.
          - Marquee, hoe werkt het met screenreader en hoe maak ik drie verschillende berichtjes?

  Niels:  - ik wil weten hoe ik de knoppen beter kan centreren en de specifieke vormgeving aan kan passen
          - weten hoe ik de verschillende afbeeldingen een eigen stijl kan geven op een makkelijke manier hoe kan ik de screenreader goed maken.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

tijdens het 1e voortgangsgesprek kon  iedereen zijn/haar vragen stellen en die werd uiteraard behandeld met uitleg. Bij dit gesprek heb ik niet alleen antwoord gekregen van mijn vragen maar ook weer bijgeleerd van de vragen van mijn clubje. 

- Doordat ik het video source niet kon vinden of eigenlijk wel kon vinden maar niet kon gebruiken omdat het beveiligd was mocht ik een alternatief opzoeken en die gebruiken met de <video> tag.
- Als 2e wat ook intressant was, was het gedeelte hoe je in de header (nav) responsive maakt dat naarmate het scherm groter wordt je meer te zien krijgt. Hiervoor kon je 2 functies voor gebruiken: flex en grid. Ook kon je d.m.v. de @media (min/max/ hight) tag erovor zorgen dat het responsive wordt.



</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen
  Namen:
  
  Merle: - Ik krijg met flexbox en grid mijn ‘li’ niet gecentreerd en op de plek waar ik hem wil, hoe kan ik dit oplossen?
         - Wat is een mooie volgorde om mijn css in te schrijven? Sanne liet zien welke volgorde hij gebruikte, en hoe weet ik precies wat er onder welke categorie valt?

  Ahmadriza: - in m’n 3e section beter grid of flex gebruiken (responsieve)
             - ik wil m’n video automatisch laten afspelen
             - Mijn nav ook zichtbaar houden tijdens scrollen hiervoor position fixed/absolute?
              

  Quinten: - Meer duidelijkheid over het inzetten van flexbox op bepaalde elemente
           - De fonts van sanrio er in krijgen, zijn moeilijk te vinden
           - De form over de hele breedte te laten spannen
           - CSS goed ordenen

  Niels:  - Hoe ik de horizontale box met text die automatisch beweegt maak 
          - Hoe ik de footer apart aanspreek zonder de code al te veel aan te passen. - Wanneer nou button en wanneer een link (precieze verschil) - nth of type mag dat steeds?
  ### Verslag van meeting
- het was beter om felx te gebruiken maar uiteraard kan grid ook. Flex was beter omdat je dan de volgorde makkelijker kan ordenen met de "order"
- De video wilde ik automatisch laten afspelen en Baha had me uitgelegd welke stukje code hij ervoor had gevruikt en wat de code betekende. Uitendelijk kon ik het ook gebruiken.
- met op de header een position fixed met een with van 100% te geven kon ik tijdens het scrollen naar benden nog steeds mijn header zien.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):


  - De linkjes heb ik voor de screenreader zinvolle namen gegeven
  - EIk heb helemaal geen <div> gebruikt
  - De focus state heb ik uitgewerkt dat de linkjes herkend worden als je met een screenreader mee bezig bent
  - De headings heb ik in semantische volgorde gezet
  - voor list content heb ik waar nodig list items gebruikt
  - bij al mijn img heb ik alt tekst gebruikt met zinvolle namen
  - de video heb ik toegankelijk gemaakt dat je het ook kunt pauzeren
  - voor een van mijn pagina's heb ik geexperimenteerd met darkmode en toegepast
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  Merle: - Hoe kan ik mijn navigatie laten werken?
         - ⁠Wat is de beste manier om het responsief te maken?
         - ⁠Hoeveel moet je maken met JavaScript? Als je weinig hebt, wordt dat dan meegerekend in het eindcijfer?

  Ahmadriza:  - Hoe mijn video pauzeren (voor toegankelijkheid)
              - Hoe de <p> veranderen als ik op de carrousel van img klik
              

  Quinten:  - Hoe zit het met een kleiner kopje boven een belangrijker kopje, is dit bv een h2 of h3 en welke moet eerst komen (css, html)
            - ⁠Hamburger menu, hoe verander ik het icoon
            - ⁠Moeten de dropdowns in het hamburgermenu werken?
            - ⁠Is het oke om layouts van lijstjes veel te veranderen voor bruikbaarhuid?
            
  Niels:  - Mijn svg iconen vervormen steeds, hoe kan ik het formaat aanpassen want ze zijn beveiligd op de originele website?
          - Hoe link je precies het lettertype in de juiste map, wel gedownload op laptop maar niet in juiste map.
          - Hoe zit het met H2 en H3, de belangrijkste tekst is een hogere h, ook al komt deze later op de website pas?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

- Voor het pauzeren en afspelen van mijn video had ik javascript nodig. Na de uitleg van Sanne was het duidelijk geworden hoe je de elementen moet manipuleren in JS en hoe je d.m.v. een if state ment de button kan bedienen.
- Om ervoor te zorgen dat als je op de link klikt en je wilt dat teskt veranderd had je hiervoor ook JS nodig. dit deed je eerst door een class aan te mkaen die de <p>, <a> en de <h3> manipuleeert. Vervolgens maak je variabele aan met de funtie "oncklclick" dxat evoor zorgt als je erop klikt dat de tekst veranderd. Als laastste moest er nog een functie aangemaakt worden dat als je op de a klikt dat dan d.m.v. ".textcontent" de tekst verschijnt die er moet staan.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/homepage.html.png" width="375px" alt="uitomst opdracht 1"><br>

  <img src="readme-images/ConceptPage.html.png" width="375px" alt="uitomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  - Ik heb het zo goed mogelijk responsive gemaakt
  - Heb een paar dingen verbeterd zoals de toegankelijkheid bijv. hoe je met html css en js een video kan laten pauzeren
  - Ik heb een dark mode toegevoegd als je bijv. op je mac de instellingen zet voor dark mode dat dan het ook automtisch verschijnt op de site
  - Heb geleerd hoe je met de custom properties werkt en hoe je ze kunt gebruiken
  - Flex box en grid mee geoefend en toegepast
  - Gespeeld met positionering (fixed, relative, absolute)
  - De code zo aangepast dat de screenreader ook in volgorde gaat voorlezen
  - De code zzo aangeopast dat de screenreader zinvolle woorden uitspreekt


  


  ### Dit was lastig/Is niet gelukt:
  - De a:visited state ik had het gebruikt maar dan was alles opeens een kleur geworden zonder ik erop had geklikt
  - Flexbox in de footer kwam ik er half uit en half niet daar moest ik me meer nog op focussen
  - het gedeelte van de home pagina section 2 responsive te maken

  
</details>


  ### verbeterd voor de herkansing:

  - Heb de media tags verminderd
  - Heb de media tags op een goede volgorde gezet
  - Heb gespeeld met de waardes zoals: vh, vw en %
  - heb de css bestande gesplit in 3 bestanden zodat het overzichtelijker is
  - heb mijn html verbeterd met semantische code




## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Baha
  2. chat GPT
  3. Youtube: https://www.youtube.com/watch?v=GvyGNcUiJGQ
  4. youutbe: https://www.youtube.com/watch?v=aNDqzlAKmZc&t=32s
  5. https://css-tricks.com/dark-modes-with-css/ 


</details>
