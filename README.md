# Attēlu galerija un karte

## Ievads
Šis projekts ir izstrādāts kā interaktīva mājaslapa ar divām galvenajām sadaļām: attēlu galeriju un kartes funkcionalitāti. 
Mērķis bija apvienot vizuālo materiālu attēlošanu ar iespēju skatīt un meklēt adreses kartē.

## Pārskats
Mājaslapa veidota, izmantojot HTML, CSS un JavaScript valodas. 
Lai pievienotu kartes funkcionalitāti, tika integrēta OpenStreetMap karte, izmantojot Leaflet JavaScript bibliotēku, kā arī Geoapify API adrešu meklēšanai un ģeokodēšanai.

### Failu struktūra

```
Praktiskais-darbs-7/
├── style.css           # Mājaslapas noformējums
├── script.js           # Mājaslapas funkciju kods
├── gallery.html        # Mājaslapas attēlu galerija
├── map.html            # Mājaslapas karte
└── README.md           # Šis fails, projekta dokumentācija
```

### Funkcionālais pārskats
- Attēlu galerija: Galerija, kas responsīvi attēlo vairākus attēlus režģī. Attēli pielāgojas ekrāna izmēram, saglabājot estētisku izkārtojumu.
- Karte: Interaktīva karte, kas ļauj meklēt adreses, izmantojot Geoapify API.
- Adreses ievade: Ievades lauks, kur lietotājs var ierakstīt adresi, kas pēc tam tiek parādīta kartē.

## Iespējamie uzlabojumi
1. Izmantot citas augstuma vienības kartei un attēlu konteineriem, lai tie neatstātu tukšus laukumus zem sevis
2. Pielagot mājaslapas krāsas (kontrasts, paši krāsu toņi)
3. Izveidot adreses ievades lauku labāk redzamu

## Zināmie defekti
1. Kad tiek samazināts mājaslapas izmērs, pogas tiek noliktas viena zem otras un starp tām nav atstarpe

## Resursi
- [Travis Horn] (https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe) - Responsīvs režģis
- [w3schools] (https://www.w3schools.com/howto/howto_css_image_overlay_title.asp) - Teksta pārklājums uz bildes
- [Youtube - Narges Mirzaaghaei] (https://www.youtube.com/watch?v=wywYRQb3JCE&ab_channel=NargesMirzaaghaei) - Kā ievietot OpenStreetMap savā mājaslapā 
- [Youtube - Narges Mirzaaghaei] (https://www.youtube.com/watch?v=vRUqtrS9BD4&ab_channel=NargesMirzaaghaei) - Kā atrast adresi, izmantojot OpenStreetMap mājaslapā
- [Leaflet] (https://leafletjs.com/) - JavaScript bibliotēka priekš interaktīvām kartēm
- [Geoapify] (https://myprojects.geoapify.com/) - API adrešu meklēšanai

## Autors
- 2025: Rodrigo Valters Rukutis