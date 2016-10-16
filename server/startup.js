import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/api/parties';

Meteor.startup(() => {
  // if (Parties.find().count() === 0) {
  const parties =[
     {
        'name':'Washington Trails Association',
        'description':"As the nation's largest state-based hiking nonprofit organization, Washington Trails Association is the voice for hikers in Washington state. We protect hiking trails and wildlands, take volunteers out to maintain trails, and promote hiking as a healthy, fun way to explore the outdoors.",
        'link':'http://www.wta.org/',
        'img': 'http://www.wta.org/carousel/copy_of_mount-st-helens-hikes/image',
        'lat':47.6029919,
        'long':-122.3335622,
        'keyword':'Environment and Animals',
        'keycode':1
     },

     {
        'name':'EarthCorps',
        'description':"EarthCorps brings together passionate and hardworking young adults from the US and countries around the world, for a yearlong leadership training program in Seattle, Washington.",
        'link':'http://earthcorps.org',
        'img':'http://www.earthcorps.org/photos/homeText/fullsize/40/PortSusanBay.JPG',
        'lat':47.682863,
        'long':-122.260909,
        'keyword':'Environment and Animals',
        'keycode':1
     },

    {
        'name':'Conservation Northwest',
        'description':"Creative and effective, for over 25 years Conservation Northwest has protected hundreds of thousands of acres of wildlands and wildlife habitat, and touched thousands of lives throughout the greater Northwest. We're your voice for conserving wildlands and amazing wildlife.",
        'link':'http://conservationnw.org',
        'img': 'http://www.conservationnw.org/carousel/become-a-member-for-only-25-during-october/image',
        'lat':47.635583,
        'long':-122.3706205,
        'keyword':'Environment and Animals',
        'keycode':1
     },

    {
        'name':'Art With Heart',
        'description':"For 20 years, Art with Heart has been on a mission to help children overcome trauma through creative expression. We are the nonprofit organization behind Oodles of Doodles, Chill & Spill and other evidence-based, therapeutic books and programs that help children struggling through illness, divorce, violence, or the loss of someone important to them.",
        'link':'http://artwithheart.org/',
        'img':'http://artwithheart.org/wp-content/uploads/MyP2-450x290.jpg',
        'lat':47.606787,
        'long':-122.320349,
        'keyword':'Arts, Culture & Humanities',
        'keycode':2
  },

    {
        'name':'Artist Trust',
        'description':"We provide Washington State artists of all creative disciplines the necessary support to launch and sustain successful careers, through financial grants, career training and professional resources.",
        'link':'http://www.artisttrust.org/',
        'img': 'http://artisttrust.org/files/art/Hourglass_Front_Cover_ATweb.jpg',
        'lat':47.618597,
        'long':-122.317228,
        'keyword':'Arts, Culture & Humanities',
        'keycode': 2
  },

    {
        'name':'Arts West',
        'description':"ArtsWest produces artistic events that provoke conversation, incite the imagination and use live theater as a powerful agent of change.",
        'link':'http://www.artswest.org/',
        'img': 'http://www.artswest.org/wp-content/uploads/2016/10/Ten_Parts-1020x340.jpg',
        'lat':47.560715,
        'long':-122.387177,
        'keyword':'Arts, Culture & Humanities',
        'keycode': 2
  },

    {
        'name':'Puget Sound Association of Phi Beta Kappa',
        'description':"The Puget Sound Association of Phi Beta Kappa, based in Seattle, is a chartered association for Phi Beta Kappa members living in western Washington state to promote scholarship, fellowship, and cultural interests. Learn more about membership (free if you're a recent initiate), our scholarships and awards programs, and our social and cultural activities.",
        'link':'http://www.psa-pbk.org/',
       'img':'https://scontent.xx.fbcdn.net/t31.0-8/474963_10150803344355712_1617576136_o.jpg',
        'lat':47.684944,
        'long':-122.298222,
        'keyword':'Education',
        'keycode': 3
  },

    {
        'name':'Teach For America Washington',
        'description':"Teach For America—Washington believes that we can and must do better on behalf of our students, particularly students of color and those growing up in high-need, rural communities. We work with community organizations, educational leaders and families to ensure that all children in Washington not only receive an excellent education, but also have the opportunity to attend college and become the leaders we need to change the course of our nation.",
        'link':'https://wa.teachforamerica.org/',
        'img':'https://wa.teachforamerica.org/sites/default/files/styles/pane_marquee/public/slides/image/washington_marquee_5.jpg?itok=7_Me4Dqu',
        'lat':47.557995,
        'long':-122.331304,
        'keyword':'Education',
        'keycode': 3
  },

    {
        'name':'Washington Alliance for Better Schools',
        'description':"Washington Alliance for Better Schools (WABS) is a collaborative of eleven school districts that leverages resources, talent and intellectual capital to help over a quarter million students graduate career and college ready.",
        'link':'http://www.wabsalliance.org/',
        'img': 'http://www.wabsalliance.org/wp-content/uploads/2015/01/statement-communities-315x492.jpg',
        'lat':47.766165,
        'long':-122.329218,
        'keyword':'Education',
        'keycode': 3
  },

   {
        'name':"Alzheimer's Association, Western and Central Washington State Chapter",
        'description':"To eliminate Alzheimer's disease through the advancement of research; to provide and enhance care and support for all afftected; and to reduce the risk of dementia through the promotion of brain health.",
        'link':'http://www.alz.org/alzwa/',
        'img':'http://www.alz.org/images/alzwa/Town_Halls_2015_myriam_crop.jpg',
        'lat':47.62303,
        'long':-122.358424,
        'keyword':'Health',
        'keycode': 4
  },

    {
        'name':'Community Health Plan of Washington',
        'description':"More than 20 years ago, we made a commitment to improve the health of our communities by making quality health care accessible to all Washington state residents. We continue that pledge today by providing affordable comprehensive coverage to more than 315,000 individuals and families throughout the state",
        'link':'http://www.chpw.org/',
        'img':'http://chpw.org/images/CafeWell_Spring_Pro.jpg',
        'lat':47.614178,
        'long':-122.334732,
        'keyword':'Health',
        'keycode': 4
  },

    {
        'name':'March of Dimes, Washington Chapter',
        'description':"Every year in the United States, nearly half a million babies are born too soon, with more than 7,000 of them right here in Washington. With your help, we work to improve the health of babies and support families if something does go wrong.",
        'link':'http://www.marchofdimes.org/washington/',
        'img':"http://www.marchofdimes.org/images/mastheads/CA_FamilyMasthead3.jpg",
        'lat':47.611965,
        'long':-122.339731,
        'keyword':'Health',
        'keycode': 4
  },

    {
        'name':'American Civil Liberties Union',
        'description':"The Bill of Rights would only be well-meaning promises if people did not fight to protect it. The ACLU is the nation's premier organization dedicated to defending and expanding civil liberties and civil rights for all people in America. Our job is to conserve America's original civic values - the Constitution and the Bill of Rights.",
        'link':'https://aclu-wa.org/',
        'img':'https://aclu-wa.org/sites/default/files/images/BORD_SidebarAd.png',
        'lat':47.605816,
        'long':-122.3319745,
        'keyword':'Human Services',
        'keycode': 5
  },

    {
        'name':'Asian Counseling & Referral Services',
        'description':"Asian Counseling and Referral Service (ACRS) is a nationally recognized nonprofit organization working for social justice and offering a broad array of behavioral health programs, human services and civic engagement activities for Asian Americans, Pacific Islanders and other communities in King County and beyond. ACRS serves a wide range of Asian American and Pacific Islander communities – immigrants, refugees and American born – in the Pacific Northwest.",
        'link':'http://acrs.org/',
        'img':'https://acrs.org/wp-content/uploads/2016/03/Slider_Club-Bamboo_SM.jpg',
        'lat':47.5989146,
        'long':-122.3253955,
        'keyword':'Human Services',
        'keycode': 5
  },

   {
        'name':'Northwest Harvest',
        'description':"The mission of Northwest Harvest is leading the fight for hungry people statewide to have access to nutritious food while respecting their dignity and promoting good health. Our vision is ending hunger in Washington. Northwest Harvest is the only nonprofit food bank distributor operating statewide in Washington with a network of more than 380 food banks, meal programs and high-need schools. Through this network, we provide more than 2 million meals every month.",
        'link':'http://northwestharvest.org/',
        'img':'http://www.northwestharvest.org/stuff/contentmgr/files/0/0e417e530c851260468460b8dcbae434/image/_resized/80_765_428_kara_web_slider.jpg',
        'lat':47.605565,
        'long':-122.3266066,
        'keyword':'Human Services',
        'keycode':5
     },

     {
       'name':'Northwest Immigrant Rights Project',
       'description':"Northwest Immigrant Rights Project promotes justice by defending and advancing the rights of immigrants through direct legal services, systemic advocacy, and community education.",
       'link':'https://www.nwirp.org/',
       'img':'https://www.nwirp.org/wp-content/uploads/2016/06/IMG_1061-e1466714662470.jpg',
       'lat':47.605816,
       'long':-122.3319745,
       'keyword':'International, Foreign Affairs',
       'keycode':6
    },

    {
       'name':'Casa Latina',
       'description':"As a vibrant, immigrant worker rights organization, Casa Latina empowers low-wage Latino immigrants to move from economic insecurity to economic prosperity and to lift their voices to take action around public policy issues that affect them. Casa Latina was founded in 1994, shortly after unprecedented numbers of Latino workers began arriving to Seattle. Since then, the organization has grown from doing street outreach out of borrowed spaces, to organizing job dispatch out of a trailer in a parking lot, to now providing a suite of impactful programs—including day labor dispatch, ESL classes, job skills & safety trainings, and community organizing for almost 750 worker-members—out of a three-building campus in Seattle’s Central District.",
       'link':'http://casa-latina.org/',
       'img':'http://casa-latina.org/sites/casa-latina.org/files/styles/article_main_image/public/programs/IMG_2466_edited.JPG?itok=vsgez6c',
       'lat':47.5995476,
       'long':-122.310533,
       'keyword':'International, Foreign Affairs',
       'keycode':6
    },

    {
       'name':'Peacetrees Vietnam',
       'description':"PeaceTrees’ work begins with healing the land and making it safe for children to play, farmers to till the soil and families to build their homes. These efforts include clearing the land of unexploded landmines and other ordnance, as well as teaching people to be aware of the threats and enable them to live more safely in the midst of these hazards. On an individual level, PeaceTrees Vietnam recognizes the economic devastation resulting from injuries and death from landmine explosions and provides victims and their families with direct aid and scholarships for children.",
       'link':'www.peacetreesvietnam.org/',
       'img':'http://www.peacetreesvietnam.org/wp-content/uploads/702-e1392332323505.jpg',
       'lat':47.6127957,
       'long':-122.3367484,
       'keyword':'International, Foreign Affairs',
       'keycode':6
    },

 {
       'name':'El Centro de La Raza',
       'description':"El Centro de la Raza is a voice and a hub for Seattle and Martin Luther King, Jr. County’s Latino community as we advocate on behalf of our people and work to achieve social justice. Through our comprehensive programs and services, we empower members of the Latino community as fully participating members of society. We also work to raise awareness with the general public, and government, business and civic leaders about the needs of the Chicano/Latino community in the United States.",
       'link':'www.elcentrodelaraza.org/',
       'img':'http://www.elcentrodelaraza.org/wp-content/uploads/2016/10/Web-Poster-2016.jpg',
       'lat':47.6029919,
       'long':-122.3335622,
       'keyword':'Public, Societal Benefit',
       'keycode':7
    },


    {
       'name':'21 Progress',
       'description':"21 PROGRESS provides programs that enhance leadership development among the hard working people of Washington, their families, and communities. Through popular education, civic engagement and arts & culture.",
       'link':'www.21progress.org/',
       'img':'http://21progress.org/wp-content/uploads/2013/12/21SQUA-Shirts.jpg',
       'lat':47.5989146,
       'long':-122.3253955,
       'keyword':'Public, Societal Benefit',
       'keycode':7
    },

    {
       'name':'Seattle Works',
       'description':"Seattle Works connects volunteers, develops leaders, and builds community. We're best known for: volunteering with Seattle Works helps individuals establish or deepen roots in the community and serve as leaders, our nonprofit partners connect with new volunteers and get important projects accomplished; the nonprofits also tap into a pool of talented, intelligent and committed board members, partnering with Seattle Works helps corporations attract and retain talent by providing meaningful opportunities for employees to volunteer, hone their skills and build strong teams.",
       'link':'http://www.seattleworks.org/',
       'img':'http://www.seattleworks.org/servlet/servlet.ImageServer?id=015A0000005fUquIAE&oid=00DA0000000BVJWMA4',
       'lat':47.6002692,
       'long':-122.3312991,
       'keyword':'Public, Societal Benefit',
       'keycode':7
    },

    {
       'name':'Catholic Community Affairs',
       'description':"Catholic Community Services (CCS) and Catholic Housing Services (CHS) are official human service outreach arms of the Catholic Church in Western Washington. Under the leadership of Archbishop J. Peter Sartain and Boards of Trustees, staff and volunteers answer the Gospel call to loving and compassionate service with particular concern for the sanctity of human life from conception to natural death and for the dignity of the human person. ",
       'link':'http://www.ccsww.org/',
       'img':'http://www.ccsww.org/images/content/pagebuilder/betty-ltc-appeal-2016.jpg',
       'lat':47.601184,
       'long':-122.301694,
       'keyword':'Religion Related',
       'keycode':8
    },

    {
       'name':'Jconnect Seattle',
       'description':"Jconnect is Seattle’s most vibrant community for Jewish young adults. We are the ones throwing ridiculous parties, davening with spirit, teaching the most interesting texts, pursuing justice with a Jewish ethic, and making Seattle an incredible place to live if you’re a 21-35 year old Jew.",
       'link':'http://www.jconnectseattle.org/',
       'img':'http://www.jconnectseattle.org/wp/wp-content/uploads/2016/01/Birthright-Jconnect.jpg',
       'lat':47.664575,
       'long':-122.309946,
       'keyword':'Religion Related',
       'keycode':8
    },

    {
       'name':'The Jewish Federation of Greater Seattle',
       'description':'The Jewish Federation of Greater Seattle is creating Jewish Connections for Life - ensuring that all Jews can participate in Jewish life in any way that fits their interests and passions, at every stage of life.',
       'link':'http://www.jewishinseattle.org/',
       'img':'http://www.jewishinseattle.org/sites/default/files/images/Cover_Oct-Nov_FINAL_72px.jpg',
       'lat':47.612858,
       'long':-122.342054,
       'keyword':'Religion Related',
       'keycode':8
    }
 ];


    Parties.remove({});
    parties.forEach((party) => {
      Parties.insert(party)
    });
  // }
});
