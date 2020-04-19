import { Twitt } from '../components/twitt';
import { NotificationTwitt } from '../components/notificationTwitt';

type TwittProps = React.ComponentProps<typeof Twitt>;

export const twitts: Omit<TwittProps, 'onPress'>[] = [
  {
    id: 1,
    name: 'Jussi Simola',
    handle: '@Jusi95',
    date: '10h',
    title: 'Pääkallopata',
    content:
    `
    ### Ainekset (4 annosta)
    400 g - sika-nautajauhelihaa
    1 kpl - sipulia
    300 g - makaronia
    1 tl - suolaa
    1/2 tl - mustapippuria
    
    ### Ohjeet
    Ota jauheliha huoneenlämpöön puoli tuntia ennen paistamista. Kuori ja silppua sipuli. Ruskista jauheliha omassa rasvassaan.
    
    Lisää sipulisilppu ja hauduta se pehmeäksi. Keitä sillä välin makaronit suolalla maustetussa vedessä pakkauksen ohjeen mukaan. Valuta makaronit ja lisää ne jauheliha-sipuliseokseen. Mausta suolalla ja pippurilla.
    `,
    image: 'https://assets.meillakotona.fi/w7lrg8grgqb7/20564-paakallopata/98bee9e05b2e0017ea08119efb557a7d/paniikkipata_drJSB.jpg',
    avatar:
      'https://eu.ui-avatars.com/api/?name=Jussi+Simola',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 2,
    name: 'Pekka Haavisto',
    handle: '@satya164',
    date: '20h',
    title: "Riisin keittäminen",
    content:
    `
    Lisäkkeeksi keitettävä riisi keitetään yleensä vähäisessä nestemäärässä, jolloin koko nestemäärä imeytetään riisinjyviin. Nesteeksi käy veden lisäksi esimerkiksi liha-, kana-, kala- tai kasvisliemi. 

Riisin keittämisen mittasuhteet:

"1 osa riisiä ja 2 osaa vettä" (1 osa = esimerkiksi desilitra tai vesilasi) 

Yhtä henkilöä/annosta kohti mitataan 0,5 dl riisiä,  1 dl vettä ja noin 1/4 tl suolaa. Suolan lisääminen ei ole välttämätöntä. Voit keittää riisin myös ilman suolaa.
 Eli esimerkiksi neljälle hengelle mitataan: 2 dl raakaa riisiä, 4 dl vettä ja noin 1 tl suolaa. Keittoaika on noin 15-20 minuuttia, kun kyseessä on pitkäjyväinen riisi.
Huom! Tarkista kuitenkin aina pakkauksesta suositeltu nestemäärä ja keittoaika! Tumman ja täysjyväriisin keittämiseen tarvitset yleensä 1-2 dl enemmän vettä ja keittoaika on pitkäjyväistä riisiä hieman pidempi.


Näitä aineksia tarvitset:

Riisiä
Vettä
Suolaa (voit keittää riisin myös ilman suolaa)

Näitä välineitä tarvitset:

Kattila + kansi, kauha, mittavälineet.

![Test](http://2.bp.blogspot.com/-WfCzzD1lEkE/TZcLasVjQqI/AAAAAAAAK6U/lFJSDrMDRiE/s200/DSCF0616.JPG)

Näin keität riisin:

1. Mittaa kattilaan tarvitsemasi määrä viileää hanavettä. Veden määrää riippuu käyttämästäsi riisin määrästä. Laita jokaista yhtä desilitraa riisiä kohti kaksi desilitraa vettä. Yhtä henkilöä/annosta varten tarvitset 0,5 desilitraa riisiä.

2. Laita kattila liedelle ja aseta kansi paikoilleen, jotta vesi kiehuu nopeammin. Säädä levy kovalle lämmölle (6). Valitse käytettävän keittolevyn koko kattilan pohjan koon mukaan siten, että kattila peittää koko levyn.

3. Kun vesi kiehuu, lisää suola. Vesi kiehuu, kun vesi alkaa kuplia ja siitä nousee vesihöyryä. Voit keittää riisin halutessasi myös ilman suolaa.

4.  Kun vesi kiehuu taas, eli suola on liuennut, lisää riisi. Voit lisätä riisin jo edellisessä vaiheessa (vaihe 3), jos et lisää suolaa keitinveteen.

5. Sekoita kevyesti kauhalla ja säädä lämpö miedoksi (käännä nuppi kohtaan 2). Hauduta riisiä kannen alla sekoittamatta, kunnes kaikki neste on imeytynyt riisiin. Tarkista keittoaika paketista ja tarkista välillä onko kattilassa vettä.

6.  Riisi on kypsää, kun vettä ei enää näy. Voit tarkistaa riisin kypsyyden myös maistamalla hieman riisiä. Jos se tuntuu vielä purtaessa kovalle, vaikka kaikki vesi on haihtunut, lisää hieman vettä (esim. n. 0,25 dl). Anna riisin kypsyä vielä hetki, kunnes lisätty vesi on imeytynyt.

7. Ota kattila liedeltä ja sammuta liesi.

8. Tarjoile riisi heti haluamasi kastikkeen kera.
    `,
    image: 'http://4.bp.blogspot.com/-hiLDcXXcCA0/TZhCSihv-5I/AAAAAAAAK8Y/7DMlwWS9hF8/s200/DSCF0698.JPG',
    avatar:
      'https://eu.ui-avatars.com/api/?name=Pekka+Haavisto',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 3,
    name: 'Jenna Jussila',
    handle: '@elvin_not_11',
    date: '14h',
    title: 'Chili con carne',
    content: `
    ##### Ainekset
    ###### Annokset 10 kpl
    2 kpl - punasipulia
    4 kpl - valkosipulinkynsiä
    1 nippu - korianteria (vapaavaltinnainen)
    3-5 kpl - tuoretta chiliä
    2 kpl - porkkanaa
    1,5 rkl - savustettua paprikajauhetta
    1 kpl - kanelitanko
    1 rkl - kuminansiemeniä
    1 kg - nauta/sika jauhelihaa 50% / 50%
    4 * 400 g - kokonaisia kuorittuja tomaatteja tai tomaattimurskaa
    3 kpl - eriväristä paprikaa tai säilykepaprikapurkki
    2 * 400 g - kidney papuja
    
    ##### Valmistusohje
    ###### 3 - 4 tuntia
    * Ota jauheliha lämpimään puolituntia ennen valmistusta.
    * Pilko punasipuli, valkosipulinkynnet, porkkanat, chilit ja kaorianterin varret.
    * Paista sipuli, valkosipuli, chili ja korianterin varret isossa kasarissa tai padassa (tilavuus 4,2 l) noin 10 min.
    * Lisää porkkana, paprikajauhe, kanelitanko ja kuminansiemenet pataan ja paista vielä 5 min.
    * Lisää jauheliha ja ruskista.
    * Lisää säilyketomaatit ja halutessasi 3 dl mustaa kahvia pataan ja anna kiehua hiljalleen kannen alla 1 - 2 tuntia.
    * Valuta säilykepaprikat, valuta ja huuhtele pavut. Jos käytät tuoreita papuja pilko ja poista siemenet.
    * Lisää paprika ja pavut keittoajan loppuvaiheessa.
    * Tarjoile riisin ja hapankerman kanssa.
    
    ##### EXTRA
    * Huuhtele ja valuta pavut.
    * Laita poellille lisää öljyä ja suolaa tasaisesti.
    * Paista pavut 200 asteisessa uunissa noin 30 minuuttia kunnes pavut ovat haljenneet ja rapeita.
    * Tarjoa areikseen tai sekoita chili con carneen.
    `,
    image:
      'https://img.taste.com.au/Pas8_G-H/w643-h428-cfill-q90/taste/2019/04/healthy-chilli-con-carne-148825-1.jpg',
    avatar:
      'https://eu.ui-avatars.com/api/?name=Jenna+Jussila',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
  {
    id: 4,
    name: 'Joni Perälä',
    handle: '@JoshWComeau',
    date: '10h',
    title: 'Makaronilaatikko',
    content: `
      #### Ainekset
      ##### Annokset 5 kpl
      5 dl makaronia
      1 pkt pekonia (170 g)
      1 kpl sipuli
      1 kpl punainen paprika
      1 prk (180 g) aurinkokuivattuja tomaatteja
      400 g jauhelihaa
      1 tl suolaa
      0,5 l kuohukermaa
      2 munaa
      voita uuniastian voiteluun
      
      #### Valmistusohje
      ##### 2 tuntia
      
      Keitä makaronit pussin ophjeen mukaan. Valuta ja jätä odottamaan.
      Pilko sipuli, paprika ja pekoni pieniksi paloiksi.
      Valuta aurinkokuivatuista tomaateista öly (Öljyä voi käyttää paistamiseen tai salaatinkastikkeeksi).
      Pilko aurinkokuivatut tomaatit pieniksi.
      
      Ruskista jauheliha pannulla (voit käyttää halutessasi öljyä). Laita pasitettu liha kulhoon odottamaan.
      Paista pekoni. Lisää paprika, aurinkokuivatut tomaatit ja sipulit pekonin joukkoon paista noin 5 minuuttia.
      Laita kulhoon jauhelihan kanssa, mausta suolalla sekä pippurilla.
      
      Sekoita makaroni jauhelihakulhoon.
      Vatkaa kuohukerma ja munat sekaisin kevyesti erillisessä kulhossa.
      Sekoita kerma munaseos muiden ainesten joukkoon.
      
      Voitele uunivuoka ja kaada seos siihen, suojaa kelmulla ja anna tekeytyä vähintään tunti jääkaapissa
      (voit jättää tekeytymään yönyli).
      Paista 200 asteisessa uunissa 1 tnti.`,
    image: 'https://www.kotikokki.net/media/cache/large_1024/recipeimage/large_1024/52d6e25dd074a9ec0e0d0d2f/original.jpg',
    avatar:
      'https://eu.ui-avatars.com/api/?name=Joni+Perälä',
    comments: 12,
    retweets: 36,
    hearts: 175,

  },

];

type NotificationTwittProps = React.ComponentProps<typeof NotificationTwitt>;

export const notificationTweets: Array<NotificationTwittProps> = [
  {
    id: 1,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
      },
      {
        name: 'Leandro Favre',
        image:
          'https://pbs.twimg.com/profile_images/1181019042557173760/a1C7MHkM_400x400.jpg',
      },
    ],
  },
  {
    id: 2,
    content: "It's finally somewhat bright on my way to work 🥳",
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Wojteg1337',
        image:
          'https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg',
      },
    ],
  },
  {
    id: 3,
    content:
      'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Nader Dabit',
        image:
          'https://pbs.twimg.com/profile_images/1167093599600816129/APWfpd5O_400x400.jpg',
      },
    ],
  },
  {
    id: 4,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
      },
      {
        name: 'Leandro Favre',
        image:
          'https://pbs.twimg.com/profile_images/1181019042557173760/a1C7MHkM_400x400.jpg',
      },
    ],
  },
  {
    id: 5,
    content: "It's finally somewhat bright on my way to work 🥳",
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Wojteg1337',
        image:
          'https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg',
      },
    ],
  },
  {
    id: 6,
    content:
      'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Nader Dabit',
        image:
          'https://pbs.twimg.com/profile_images/1167093599600816129/APWfpd5O_400x400.jpg',
      },
    ],
  },
];
