# Buechereiverwaltung

## Vorrausgesetze Software
- Docker
---

## Inbetriebnahme
1. Repo clonen
2. per Terminal in den Ordner Buechereiverwaltung navigieren
3. von dort aus den Container per "docker-compose up -d" (ohne die Anführungszeichen) eingeben und mit Enter bestätigen 
4. Anschließend lässt sich die Startseite über http://localhost:3000/ erreichen. Das Backend läuft über http://localhost:3001/.
---
## Herunterfahren
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
- ~~Backend in Docker zu integrieren~~ (abgeschlossen
- ~~Einen Login für Benutzer und Angestellte zu erstellen~~ (abgeschlossen)
- ~~Eine Suchfunktion in die Bücherei zu integrieren~~ (abgeschlossen)
- ~~Die Verwaltung erweitern. Das beinhaltet:~~ (abgeschlossen)
  - ~~Die Übersicht der Bücher zu erweitern, dass man angezeigt bekommt welche Bücher im Lager~~ (hinzugefügt) 
  - ~~Bücher aus der Datenbank zu löschen~~ (hinzugefügt)
  - ~~Bücheregale aus der Datenbank zu löschen~~ (hinzugefügt)
  - ~~Bücher aus den Regalen zurück ins Lager zu legen~~ (hinzugefügt)
- ~~Passwortverschlüsselung~~ (abgeschlossen)
- ~~Authentifizierung~~ (abgeschlossen)
- User-Profilseite
- Passwort zurücksetzen oder im User-Profil ändern
--- 
## Hinweis
Für den Angestelltenlogin bitte die ID 2,3 oder 4 und das Passwort "password" benutzen
  