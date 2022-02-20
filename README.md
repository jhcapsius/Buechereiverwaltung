# Buechereiverwaltung

## Vorrausgesetze Software
- Docker
- NodeJS 16.13.0
---

## Inbetriebnahme
1. Repo clonen
2. per Terminal in den Ordner Buechereiverwaltung navigieren
3. von dort aus den Container per "docker-compose up -d" (ohne die Anführungszeichen) eingeben und mit Enter bestätigen 
4. Anschließend in einem zweiten Terminal in den Backend Ordner navigieren
5. Dort den Befehl "npm start" (ohne die Anführungszeichen) eingeben und mit Enter bestätigen. Es kann sein, dass es eine Fehlermeldung gibt, da das Backend nicht die Datenbank erreichen kann. Sollte das passieren, ist der Docker-Container noch nicht vollständig am laufen und man muss einen Augenblick warten gibt den Befehl erneut ein.
6. Anschließend lässt sich die Startseite über http://localhost:3000/ erreichen. Das Backend läuft über http://localhost:3001/ und die Datenbank ist über http://localhost:3002/ erreichbar
---
## Herunterfahren

- Backend: 
  - In dem Terminal in das Backend gestartet wurde die Tastenkombination Strg-C anwenden, "j" eingeben und mit Enter bestätigen
- Docker: 
  - In dem Terminal in der Container gestartet wurde "docker-compose down" eingeben und mit enter bestätigen. Mit dem Befehl "docker-compose down -v" lassen die erstellten Volumes beim herunterfahren löschen.
---
## Funktionen
- Über den Tab "Bücherei" lassen sich Bücher ausleihen
- Über den Tab Bücher und Regalverwaltung ist es möglich:
  - Eine Übersicht über alle Bücher und Bücherregale zu erlangen 
  - Nach Büchern zu suchen. Das Ergebnis beinhaltet ID, Titel, Standort (Bücherregal) und Status (ausgeliehen oder verfügbar)
  - Neue Bücher hinzufügen
  - Zurückgebrachte Bücher zu markieren
  - Neue Bücherregale zu erstellen
  - Büchern den bestehenden Bücherregalen zuzuweisen
---
## Was ist noch geplant?
- Backend in Docker zu integrieren
- ~~Einen Login für Benutzer und Angestellte zu erstellen~~ (abgeschlossen)
- Eine Suchfunktion in die Bücherei zu integrieren
- ~~Die Verwaltung erweitern. Das beinhaltet:~~ (abgeschlossen)
  - ~~Die Übersicht der Bücher zu erweitern, dass man angezeigt bekommt welche Bücher im Lager~~ (hinzugefügt) 
  - ~~Bücher aus der Datenbank zu löschen~~ (hinzugefügt)
  - ~~Bücheregale aus der Datenbank zu löschen~~ (hinzugefügt)
  - ~~Bücher aus den Regalen zurück ins Lager zu legen~~ (hinzugefügt)

  