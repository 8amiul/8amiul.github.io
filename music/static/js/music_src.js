const music_src = [
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODFf/%28I%20Want%20to%20Be%20Your%29%20Mirror.mp3",
    "title": "(I Want to Be Your) Mirror",
    "artist": "Temples",
    "album": "Volcano",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI3MDBf/%28I%20Want%20to%20Be%20Your%29%20Mirror.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODJf/Are%20You%20Bored%20Yet_%20%28feat.%20Clairo%29.mp3",
    "title": "Are You Bored Yet? (feat. Clairo)",
    "artist": "Wallows/Clairo",
    "album": "Nothing Happens",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NDlf/Are%20You%20Bored%20Yet%EF%80%BF%20%28feat.%20Clairo%29.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODNf/Blossoms.mp3",
    "title": "Blossoms",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTBf/Blossoms.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODRf/Can%20I%20Call%20You%20Tonight_.mp3",
    "title": "Can I Call You Tonight?",
    "artist": "Dayglow",
    "album": "Fuzzybrain",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTFf/Can%20I%20Call%20You%20Tonight%EF%80%BF.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODVf/Certainty.mp3",
    "title": "Certainty",
    "artist": "Temples",
    "album": "Certainty",
    "year": "2016",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTNf/Certainty.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODZf/Dancing%20with%20my%20phone.mp3",
    "title": "Dancing with my phone",
    "artist": "HYBS",
    "album": "Making Steak",
    "year": "2022",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTVf/Dancing%20with%20my%20phone.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODdf/Down%20the%20Line.mp3",
    "title": "Down the Line",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY5OTI2NTZf/Down%20the%20Line.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTJf/Each%20Time%20You%20Fall%20in%20Love.mp3",
    "title": "Each Time You Fall in Love",
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTdf/Each%20Time%20You%20Fall%20in%20Love.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTNf/Every%20Time%20Around.mp3",
    "title": "Every Time Around",
    "artist": "Vansire",
    "album": "After Fillmore County",
    "year": "2020",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NThf/Every%20Time%20Around.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTRf/Flash.mp3",
    "title": "Flash",
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NTlf/Flash.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTVf/Gamma%20Rays.mp3",
    "title": "Gamma Rays",
    "artist": "Temples",
    "album": "Exotico",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjBf/Gamma%20Rays.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTZf/Go%20Higher.mp3",
    "title": "Go Higher",
    "artist": "HYBS",
    "album": "Making Steak",
    "year": "2022",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjFf/Go%20Higher.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTdf/Hot%20Motion.mp3",
    "title": "Hot Motion",
    "artist": "Temples",
    "album": "Hot Motion",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjJf/Hot%20Motion.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OThf/Hot%20Rod.mp3",
    "title": "Hot Rod",
    "artist": "Dayglow",
    "album": "Fuzzybrain",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjNf/Hot%20Rod.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1OTlf/If%20I%20Could%20Find%20You%20%28Eternity%29.mp3",
    "title": "If I Could Find You (Eternity)",
    "artist": "The Holydrug Couple",
    "album": "Moonlust",
    "year": "2015",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjRf/If%20I%20Could%20Find%20You%20%28Eternity%29.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc2MDBf/In%20Between.mp3",
    "title": "In Between",
    "artist": "WILLIS",
    "album": "Locals 4",
    "year": "2022",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjVf/In%20Between.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc2MDFf/Italo%20Disco.mp3",
    "title": "Italo Disco",
    "artist": "Last Dinosaurs",
    "album": "Yumeno Garden",
    "year": "2018",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NjZf/Italo%20Disco.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc2MDJf/japan.mp3",
    "title": "japan",
    "artist": "Yot Club",
    "album": "japan",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Njdf/japan.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc2MDNf/Lamb%27s%20Wool.mp3",
    "title": "Lamb's Wool",
    "artist": "Foster The People",
    "album": "Lamb's Wool",
    "year": "2020",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Njhf/Lamb%27s%20Wool.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1MjRf/Let%20It%20Happen.mp3",
    "title": "Let It Happen",
    "artist": "Tame Impala",
    "album": "Currents",
    "year": "2015",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Njlf/Let%20It%20Happen.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1MjNf/Love%20Again.mp3",
    "title": "Love Again",
    "artist": "Meltt",
    "album": "Swim Slowly",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzBf/Love%20Again.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mjdf/Lovers%20Rock.mp3",
    "title": "Lovers Rock",
    "artist": "TV Girl",
    "album": "French Exit",
    "year": "2014",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzFf/Lovers%20Rock.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mjhf/May%201st.mp3",
    "title": "May 1st",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzJf/May%201st.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mjlf/Metamodernity.mp3",
    "title": "Metamodernity",
    "artist": "Vansire",
    "album": "Metamodernity",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzNf/Metamodernity.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1MzBf/Move%20with%20the%20Season.mp3",
    "title": "Move with the Season",
    "artist": "Temples",
    "album": "Sun Structures (Deluxe Version)",
    "year": "2014",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzRf/Move%20with%20the%20Season.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1MzVf/Mrs%20Magic.mp3",
    "title": "Mrs Magic",
    "artist": "Strawberry Guy",
    "album": "Mrs Magic",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzVf/Mrs%20Magic.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1MzZf/New%20Gold%20%28feat.%20Tame%20Impala%20and%20Bootie%20Brown%29.mp3",
    "title": "New Gold (feat. Tame Impala and Bootie Brown)",
    "artist": "Gorillaz/Tame Impala/Bootie Brown",
    "album": "Cracker Island",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2NzZf/New%20Gold%20%28feat.%20Tame%20Impala%20and%20Bootie%20Brown%29.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mzdf/No%20More%20Lies.mp3",
    "title": "No More Lies",
    "artist": "Thundercat/Tame Impala",
    "album": "No More Lies",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Nzdf/No%20More%20Lies.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mzhf/Parking%20Lots.mp3",
    "title": "Parking Lots",
    "artist": "Plums",
    "album": "Jen",
    "year": "2015",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Nzhf/Parking%20Lots.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Mzlf/Past%20Life.mp3",
    "title": "Past Life",
    "artist": "Tame Impala",
    "album": "Currents",
    "year": "2015",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2Nzlf/Past%20Life.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NDhf/Powerlines.mp3",
    "title": "Powerlines",
    "artist": "Tame Impala",
    "album": "Currents B-Sides & Remixes",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODBf/Powerlines.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NDlf/Quarterback.mp3",
    "title": "Quarterback",
    "artist": "Wallows",
    "album": "Quarterback",
    "year": "2021",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODFf/Quarterback.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NTBf/Saturnine.mp3",
    "title": "Saturnine",
    "artist": "Mystery Jets",
    "album": "Curve Of The Earth",
    "year": "2016",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODJf/Saturnine.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NTFf/Shoot.mp3",
    "title": "Shoot",
    "artist": "Promoting Sounds/Ron Grams",
    "album": "Shoot",
    "year": "2021",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODNf/Shoot.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NTZf/Sky%20So%20Blue.mp3",
    "title": "Sky So Blue",
    "artist": "Hot Flash Heat Wave",
    "album": "Sky So Blue",
    "year": "2019",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODRf/Sky%20So%20Blue.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NTdf/So%20Good%20at%20Being%20in%20Trouble.mp3",
    "title": "So Good at Being in Trouble",
    "artist": "Unknown Mortal Orchestra",
    "album": "II (10 Year Anniversary Edition)",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODVf/So%20Good%20at%20Being%20in%20Trouble.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NThf/Social%20Jetlag.mp3",
    "title": "Social Jetlag",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODZf/Social%20Jetlag.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NTlf/Something%20Stupid%20%28From%20_Better%20Call%20Saul_%29.mp3",
    "title": "Something Stupid (From \"Better Call Saul\")",
    "artist": "Lola Marsh",
    "album": "Something Stupid (From \"Better Call Saul\")",
    "year": "2018",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODdf/Something%20Stupid%20%28From%20%EF%80%A2Better%20Call%20Saul%EF%80%A2%29.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NjBf/Staring.mp3",
    "title": "Staring",
    "artist": "Tipling Rock",
    "album": "Staring",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODhf/Staring.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NjFf/Sugar.mp3",
    "title": "Sugar",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2ODlf/Sugar.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NjJf/Tangerine.mp3",
    "title": "Tangerine",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTBf/Tangerine.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NjNf/The%20Absent%20Sea.mp3",
    "title": "The Absent Sea",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTFf/The%20Absent%20Sea.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NjRf/The%20Bay.mp3",
    "title": "The Bay",
    "artist": "Yot Club",
    "album": "The Bay",
    "year": "2020",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTJf/The%20Bay.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Njlf/The%20Fire.mp3",
    "title": "The Fire",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTNf/The%20Fire.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NzBf/THE%20SHADE.mp3",
    "title": "THE SHADE",
    "artist": "Rex Orange County",
    "album": "WHO CARES?",
    "year": "2022",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTRf/THE%20SHADE.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NzFf/What%20You%20Know.mp3",
    "title": "What You Know",
    "artist": "Two Door Cinema Club",
    "album": "Tourist History",
    "year": "2010",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTVf/What%20You%20Know.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1NzVf/Wings%20Of%20Time%20-%20From%20the%20Motion%20Picture%20Dungeons%20%26%20Dragons_%20Honor%20Among%20Thieves.mp3",
    "title": "Wings Of Time - From the Motion Picture Dungeons & Dragons: Honor Among Thieves",
    "artist": "Tame Impala",
    "album": "Wings Of Time (From the Motion Picture Dungeons & Dragons: Honor Among Thieves)",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTZf/Wings%20Of%20Time%20-%20From%20the%20Motion%20Picture%20Dungeons%20%26%20Dragons%EF%80%BA%20Honor%20Among%20Thieves.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Nzhf/Within%20You%2C%20Within%20Me.mp3",
    "title": "Within You, Within Me",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTdf/Within%20You%2C%20Within%20Me.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1Nzlf/You%20Are%20the%20Right%20One.mp3",
    "title": "You Are the Right One",
    "artist": "Sports",
    "album": "Naked All the Time",
    "year": "2015",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OThf/You%20Are%20the%20Right%20One.jpg"
  },
  {
    "link": "https://od.lk/s/NzVfNDY4ODc1ODBf/Young%20Folks.mp3",
    "title": "Young Folks",
    "artist": "Peter Bjorn and John",
    "album": "Writer's Block",
    "year": "2006",
    "albumCover": "https://od.lk/d/NzVfNDY4OTI2OTlf/Young%20Folks.jpg"
  }
]