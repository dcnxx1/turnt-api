<h1>Turnt API</h1>  
<h2>Wat drijft de back-end?</h2>

### NodeJS
De backend wordt aangedreven door NodeJS. 
### NestJS
NestJS is makkelijk te gebruiken en zeer gestructureerd. Door NestJS te gebruiken, kan ik altijd overzicht houden van alle code en werken volgens een gestructureerde werkwijze
### Prisma
Deze handige ORM biedt mij in staat om gemakkelijk SQL queries en CRUD operaties uit te voeren.
### Docker
De webserver en de MySQL database bevinden zich in een lokale omgeving. Door Docker te gebruiken kan ik moeiteloos de server en databse opstarten
### MySQL
MySQL wordt gebruikt om alle gebruikersgegevens, media gegevens (zoals bronnen van liedjes, fotos en videos ) op te halen. 

### AWS MediaConvert
Met behulp van AWS MediaConvert kan ik moeiteloos alle geuploade liedjes omzetten naar een m3u8 formaat waardoor ik deze weer kan terug streamen naar de React Native app.
### AWS S3 
S3 wordt gebruikt om alle soorten media op te slaan.
### AWS CloudFront
Door een CDN te gebruiken geef ik de gebruikers de mogelijkheid om media stukken sneller te serveren
### AWS Lambda
De Lambda functie triggert AWS MediaConvert met de gewenste tijd die de artiest heeft gekozen om daarvan een 30 seconden clip te creeeren. Nadat AWS MediaConvert klaar is met het omzetten, wordt het bestand weer teruggeplaats in de S3 bucket
