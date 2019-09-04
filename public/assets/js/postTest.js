const N = 20;
var EventTypeNames = [ "dance", "opera", "theater", "music"];

var locationPost = async () => 
{
    await post(URLS.LOCATION,  // post can be found in script.js
        {
            "id": "A01",
            "how_to_reach": "Building 22, Ocean Drive, Miami, Florida. Right at frontal the entrance of the festival, turn left to see the building in front of you"
        });
    await post(URLS.LOCATION,  // post can be found in script.js
        {
            "id": "A02",
            "how_to_reach": "Building 13, Ocean Drive, Miami, Florida. Using the second entrance, the building would be the third on you right"
        });
    await post(URLS.LOCATION,  // post can be found in script.js
        {
            "id": "A03",
            "how_to_reach": "Building 5, Ocean Drive, Miami, Florida. Coming from the top-left entrance to the festival, it is the first encountered building."
        });
}
    
var seminarPost = async () => 
{
    await post(URLS.SEMINAR,  // post can be found in script.js
        {
            "title": "The elegance of music",
            "location_id": "A01",
            "date": "2019-09-10",	
            "start": "12:00:00",
            "abstract": "This seminar discusses how music has devoleped as an art over the course of the last century. Here you can find many of the finest musicians from all around the world explaining their perspective on delicate, yet so mesmerizing art like music. Other than a general excursus over the history of music, the seminar will focus on the impact that music has on our society as it is.",
            "end": "14:00:00",
            "vacancy": 25
        });
    await post(URLS.SEMINAR,  // post can be found in script.js
        {
            "title": "Acting: a line between imagination and reality",
            "location_id": "A03",
            "date": "2019-09-07",
            "start": "13:30:00",
            "abstract": "This seminar discusses the topic of acting, first by providing a superficial defition of what it is and then by diving down on the more technical side of the subject. The focus is then going to shift on how an art like acting can impact your personal life and change the perspective on your inner world.",
            "end": "15:00:00",
            "vacancy": 13
        });
    await post(URLS.SEMINAR,  // post can be found in script.js
        {
            "title": "Opera, a kiss between music and acting",
            "location_id": "A02",
            "date": "2019-09-08",
            "start": "09:00:00",
            "abstract": "This seminar discusses the evolution of two evergreen arts: acting and music. Starting from the very origin of both, the discussion culminates on how they merged into a completly new and innovative genre, called opera. The focus is going to be placed on how this new art has changed itself of the course of the years and are the differencies between its early stages and the ones that we are experiencing right now.",
            "end": "11:30:00",
            "vacancy": 29
        });
    await post(URLS.SEMINAR,  // post can be found in script.js
        {
            "title": "What is it like to dance in 2019",
            "location_id": "A02",
            "date": "2019-09-06",
            "start": "17:00:00",
            "abstract": "This seminar discusses what's the correct approach to introduce new people to dancing in our times. Some dance instructors are going to explain their stance on the evergreen topic of the education and how much of a relevance it has in today's art of dancing.",
            "end": "19:30:00",
            "vacancy": 42
        });
}   

var companyPost = async () => 
{
    await post(URLS.COMPANY,  // post can be found in script.js
        {
            "name": "Simple Plan",
            "detail": "This company is made up of 3 particularly talented musicians who have come together to a band that's quickly rising in popularity",
            "photos": [
                "/images/c1-1.jpg","/images/c1-2.jpg","/images/c1-3.jpg"
            ]
        });
    await post(URLS.COMPANY,  // post can be found in script.js
        {
            "name": "The Best Company",
            "detail": "This is a company of dances",
            "photos": [
                "/images/c3-1.png"
            ]
        });
    await post(URLS.COMPANY,  // post can be found in script.js
        {
            "name": "Kaba Modern",
            "detail": "A hip-hop group originating from California, Kaba Modern have been active since 1992. Kaba Modern has entered various multinational competitions and gained recognition in the media. The Kaba Modern family is divided into three sub-teams: Kreative Movement (formerly known as Kaba Kids), Kaba Modern UCI and Kaba Modern Legacy. The have come 2nd and 3rd in Hip Hop International 2007 and 2008 respectively. Some members of group have also helped choreographed ‘The Debut’ movie.",
            "photos": [
                "/images/c2-1.jpeg","/images/c2-2.png","/images/c2-3.jpg"
            ]
        });
}

var performerPost = async () => 
{
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Pierre Bouvier",
            "age": "22",
            "birth": "Montréal",
            "achievements": [
                "Grammy Award Winner - 2013; 21st Annual Gardel Awards Winner"
            ],
            "detail": "Pierre is the leading vocalist of the uprising rock band Simple Plan. When Bouvier was 13 or 14 years old, he founded the punk rock band Reset with his best friend Chuck Comeau in which he was the bass guitarist and lead vocalist. He was not happy with Reset and left the band in 1999, a year after Comeau's departure in 1998. His current bandmate David Desrosiers took his place as lead vocalist and bass guitarist. He later met Comeau at a Sugar Ray concert and joined him in creating Simple Plan with old schoolmates David Desrosiers, Jeff Stinco and Sébastien Lefebvre.",
            "company_id": 1,
            "photos": [
                "/images/p1-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Chuck Comeau",
            "age": "26",
            "birth": "Montréal",
            "achievements": [
                "Music Awards Winner - 2015"
            ],
            "detail": "Comeau start his music career in 1993, when he was 13 years old along with bandmate Pierre Bouvier. Comeau left Reset in 1998 to study law on McGill University, and left to pursue music career, he later reunited with Bouvier at a Sugar Ray concert, they later formed Simple Plan in 1999 along with old schoolmates Sébastien Lefebvre and Jeff Stinco. Later, David Desrosiers replaced Bouvier and Reset but only last for 6 months and left Reset to join Simple Plan.",
            "company_id": 1,
            "photos": [
                "/images/p2-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Sébastien Lefebvre",
            "birth": "Montréal",
            "age": "39",
            "achievements": [
                "50th GMA Dove Awards Winner"
            ],
            "detail": "In early 2009, Lefebvre recorded an acoustic EP entitled You Are Here / Vous Êtes Ici. It was released on October 20, 2009, under Coalition Entertainment Inc. The first single I Fall for You was released on September 8, 2009. A music video was also released on YouTube, directed by Simple Plan bandmate, Chuck Comeau.",
            "company_id": 1,
            "photos": [
                "/images/p3-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Daryl Hall",
            "birth": "San Francisco",
            "age": "72",
            "achievements": [
                "APRA Music Awards of Winner - 2015"
            ],
            "detail": "Signed to Atlantic by Ahmet Ertegun and managed by Tommy Mottola in the early 1970s, Hall & Oates have sold more albums than any other duo in music history[citation needed]. Their second album, Abandoned Luncheonette, produced by Arif Mardin and released in 1973, yielded the single, She's Gone, which went to No. 7 in the U.S. Top 10 on re-release in 1976 after reaching No. 1 on the R&B charts when it was covered by Tavares. The duo recorded one more album with Atlantic, War Babies (produced by Todd Rundgren), before they were dropped and promptly signed to RCA. During their tenure at RCA the duo catapulted to international superstardom",
            "company_id": 2,
            "photos": [
                "/images/p4-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Chris Brown",
            "age": "24",
            "birth": "Tappahannock",
            "achievements": [
                "BET Awards Winner - 2017"
            ],
            "detail": "Christopher Maurice Brown was born on May 5, 1989, in the small town of Tappahannock, Virginia, to Joyce Hawkins, a former day care center director, and Clinton Brown, a corrections officer at a local prison. He has an older sister, Lytrell Bundy, who works in a bank. Music was always present in Brown's life beginning in his childhood. He would listen to soul albums that his parents owned, and eventually began to show interest in the hip-hop scene. Brown taught himself to sing and dance at a young age and often cites Michael Jackson as his inspiration. He began to perform in his church choir and in several local talent shows. When he mimicked an Usher performance of My Way, his mother recognized his vocal talent, and they began to look for the opportunity of a record deal. At the same time, Brown was going through personal issues. His parents had divorced, and his mother's boyfriend terrified him by subjecting her to domestic violence.",
            "photos": [
                "/images/p6-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Shakira",
            "age": "37",
            "birth": "Barranquilla",
            "achievements": [
                "BET Awards Winner - 2017"
            ],
            "detail": "In early 2008, Forbes named Shakira the fourth top-earning female artist in music industry. Then, in July of that year, Shakira signed a $300 million contract with Live Nation, an international touring giant, which contract was to remain in effect for ten years. The touring group also doubles as a record label which promotes, but does not control, the music its artists release. Shakira's contract with Epic Records called for three more albums as well – one in English, one in Spanish, and a compilation, but the touring and other rights of the Live Nation deal were confirmed to begin immediately.",
            "photos": [
                "/images/p7-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Justin Timberlake",
            "age": "25",
            "birth": "New York",
            "achievements": [
                "BET Awards Winner - 2017"
            ],
            "detail": "After the Super Bowl incident, Timberlake put his recording career on hold to act in several films, having starred in a few feature films earlier in his career. The first role he took during this time was as a journalist in Edison Force, filmed in 2004 and received a direct-to-video release on July 18, 2006. He also appeared in the films Alpha Dog, Black Snake Moan, Richard Kelly's Southland Tales, and voiced Prince Artie Pendragon in the animated film Shrek the Third, released on May 18, 2007. He also appeared as a young Elton John, in the video for John's song This Train Don't Stop There Anymore. Timberlake was considered to play the role of Roger Davis in the film version of the rock musical Rent, but director Chris Columbus had insisted that only the original Broadway members could convey the true meaning of Rent, so the role was reprised by Adam Pascal",
            "photos": [
                "/images/p8-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Rich Little",
            "age": "42",
            "birth": "Los Angeles",
            "achievements": [
                "Teather"
            ],
            "detail": "Little was born in Ottawa, Ontario, Canada, the middle of three sons of Lawrence Peniston Little, a doctor, and Elizabeth Maud (née Wilson). He attended Lisgar Collegiate Institute. In his early teens, he formed a partnership with Geoff Scott, another budding impressionist, concentrating on reproducing the voices of Canadian politicians such as Prime Minister John Diefenbaker and Ottawa mayor Charlotte Whitton. (Scott went on to become a politician.) He and Scott were performing professionally in night clubs by their late teens.",
            "photos": [
                "/images/p9-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Lisa Lampanelli",
            "age": "58",
            "birth": "Trumbull",
            "achievements": [
                "Teather"
            ],
            "detail": "Lampanelli, one of three siblings, was born in Trumbull, Connecticut, to a middle class family. Three of her grandparents were of Italian descent, and the fourth of Polish ancestry. Her mother, Gloria (née Velgot), worked for the local police department, where she typed in all the arrests made, and her father, Leonard Lampugnale, worked for Sikorsky Aircraft and later became a painter. Lampanelli attended Roman Catholic schools, studied journalism at Boston College and Syracuse University, and attended the Radcliffe Publishing Course at Harvard. She worked as a copy editor at Popular Mechanics and an assistant at Rolling Stone. She was also a fact checker and the first chief of research for Spy magazine; a book about Spy describes her then as your average decked-out-heavy-metal-head-next-door. Speaking later to Maxim Magazine Online, Lampanelli remarked, I was a real journalist for Rolling Stone, Spy, Hit Parader. I interviewed those fuckin' hair bands: Cinderella, Slaughter.",
            "photos": [
                "/images/p9-1.png"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Yuri Tag",
            "age": "29",
            "birth": "China",
            "achievements": [
                "Win MTV AWM 2012"
            ],
            "company_id": 3,
            "age": 29,
            "birth": "Hong Kong",
            "detail": "He is one of the member of Kaba Modern HIP-HOP dancer",
            "photos": [
                "/images/p10-0.jpg", "/images/p10-1.jpg"
            ]
        });
    await post(URLS.PERFORMER,  // post can be found in script.js
        {
            "name": "Lawrence Kao",
            "age": "28",
            "achievements": [
                "Win MTV AWM 2013"
            ],
            "company_id": 3,
            "age": 32,
            "birth": "Hacienda Heights",
            "detail": "Kao was born and raised in Hacienda Heights, California,[1] where he later graduated from Glen A. Wilson High School. Later, he attended University of California, Irvine and then pursued a full-time career as an hip-hop dancer",
            "photos": [
                "/images/p11-0.jpeg", "/images/p11-1.jpg"
            ]
        });
};

var newEventType = (name, description) => { return {event_type: name, description: description} };

var eventTypePost = async () => 
{
    for(var i=0; i < EventTypeNames.length; i++)
        await post(URLS.EVENT_TYPE, newEventType(EventTypeNames[i], EventTypeNames[i] + " description"));
}

var eventPost = async () => 
{
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Hamilton",
            "abstract": "Where do you start with Hamilton? The hit hip-hop infused musical drama about the 10 Dollar Founding Father Without A Father from Lin-Manuel Miranda has all but taken over the world since its first sold-out run the at Off-Broadway Public Theatre in 2015. Now housed at the Richard Rodgers Theatre for the foreseeable future, the rollicking historical epic is a true arbiter of our times, with its message of inclusivity, passion, diversity and resistance from oppression as relevant now as it ever was",
            "date": "2019-09-05",
            "start": "18:00:00",
            "end": "21:00:00",
            "location_id": "A03",
            "vacancy": 17,
            "seminar_id": 2,
            "performer_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "company_ids": [
                1, 2
            ],
            "event_type": "dance"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Menopause The Musical",
            "abstract": "Menopause The Musical will change your mind about the change as this hilarious comedy gets you laughing about hot flashes, mood swings, memory loss and weight gain.",
            "date": "2019-09-06",
            "start": "12:00:00",
            "end": "14:00:00",
            "location_id": "A03",
            "vacancy": 24,
            "performer_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "company_ids": [
                1, 2
            ],
            "event_type": "dance"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Moulin Rouge! The Musical",
            "abstract": "One of the most beloved movies of the 21st century, Moulin Rouge captured the hearts of audiences across the world with its tragic love story and monumental score. Now, following a delightful world premiere in Boston in 2018, this spellbinding and captivating stage musical will finally make its Broadway bow in summer 2019",
            "date": "2019-09-08",
            "start": "15:00:00",
            "end": "18:00:00",
            "location_id": "A02",
            "vacancy": 36,
            "performer_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "company_ids": [
                1, 2
            ],
            "event_type": "dance"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Michael Jackson ONE",
            "abstract": "Prepare to be immersed into the world of Michael's music in this electrifying fusion of acrobatics, dance and visuals that reflects the dynamic showmanship of the King of Pop. Michael Jackson ONE is a theatrical adventure driven by Michael's biggest hits heard like never before in a riveting, state-of-the-art surround-sound environment.",
            "date": "2019-09-05",
            "start": "11:00:00",
            "end": "14:00:00",
            "location_id": "A01",
            "vacancy": 19,
            "seminar_id": 1,
            "performer_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "company_ids": [
                1, 2
            ],
            "event_type": "music"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Beatleshow",
            "abstract": "Singing all your Beatles favorites, the performers of Beatleshow will blow you away with their dead-on impressions of the famous quartet.",
            "date": "2019-09-07",
            "start": "09:00:00",
            "end": "10:30:00",
            "location_id": "A01",
            "vacancy": 50,
            "performer_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "company_ids": [
                1, 2
            ],
            "event_type": "music"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "All Shook Up",
            "abstract": "Get all shook up with a tribute show to the King of Rock 'n' Roll Elvis Presley at Planet Hollywood in Las Vegas.",
            "date": "2019-09-06",
            "start": "11:00:00",
            "end": "14:00:00",
            "location_id": "A02",
            "vacancy": 15,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "music"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Wicked",
            "abstract": "Thrown together as unwilling roommates at The University of Shiz, initially the beautiful, blonde and effervescent Glinda clashes with the fiery, misunderstood, green-skinned Elphaba. Facing various challenges in their experiences they learn to put their differences aside and form an unexpected bond that stays with them for years to come, despite the political and magical upheaval that engulfs Oz. What makes someone truly Wicked? An uplifting and affirming adventure that journeys way below the skin, and the heart of life.",
            "date": "2019-09-08",
            "start": "17:00:00",
            "end": "20:00:00",
            "location_id": "A03",
            "vacancy": 26,
            "seminar_id": 4,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "opera"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Blue Man Group At Luxor",
            "abstract": "The avant-garde Blue Man Group combines theatrics, art, music and science to create an interactive, wild and percussion-driven experience full of humor and energy.",
            "date": "2019-09-07",
            "start": "15:00:00",
            "end": "17:00:00",
            "location_id": "A01",
            "vacancy": 28,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "opera"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Escape to Margaritaville",
            "abstract": "Escape to Margaritaville follows the fortunes of charming bartender and singer Tully, who spends his days between shifts seducing the rich female tourists on the tropical island of Margaritaville. Known as a local ladykiller, Tully can sweet-talk his way out of almost any scrape he finds himself in, whether it be an irate husband or frustrated boss. That is until the arrival of a lone, single female tourist who takes her career seriously; Tully falls head over heels but she is as frosty as the drinks he serves behind the bar. Can he win her heart before she flies home, and will the swaying palms and warm summer breeze convince them to both change their ways?",
            "date": "2019-09-05",
            "start": "13:00:00",
            "end": "15:00:00",
            "location_id": "A02",
            "vacancy": 31,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "opera"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Freak Show",
            "abstract": "Freak Show at The Erotic Heritage Museum in Las Vegas is the bizarre, dark, twisted and hilarious show you didn't know you needed in your life.",
            "date": "2019-09-06",
            "start": "14:00:00",
            "end": "15:00:00",
            "location_id": "A02",
            "vacancy": 17,
            "seminar_id": 3,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "theater"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "Rich Little",
            "abstract": "Legendary comedian and impressionist Rich Little returns to the Las Vegas stage with his one-man comedy and impersonation show, Rich Little Live at the Tropicana.",
            "date": "2019-09-07",
            "start": "11:00:00",
            "end": "13:30:00",
            "location_id": "A01",
            "vacancy": 14,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "theater"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "We Will Rock You",
            "abstract": "Set on the futuristic iPlanet, We Will Rock You follows two young rebels - Galileo and Scaramouche - who are determined to seek life outside of their manufactured music world where all instruments are banned. On the run from the Killer Queen's police, they join forces with the Rebels in their struggle to search for the one remaining instrument which will help free them from the Killer Queen and her army of brain-washed Ga Ga kids.",
            "date": "2019-09-08",
            "start": "20:00:00",
            "end": "21:30:00",
            "location_id": "A03",
            "vacancy": 29,
            "performer_ids": [
                1, 2
            ],
            "company_ids": [
                1, 2
            ],
            "photos": [                
            ],
            "event_type": "theater"
        });
        
        await post(URLS.EVENT,  // post can be found in script.js
        {
            "name": "HIP HOP NIGHT",
            "abstract": "Set on the old fashone hip hop culture, the kaba modern team will show you a really great preformernce",
            "date": "2019-09-07",
            "start": "20:00:00",
            "end": "21:30:00",
            "location_id": "A03",
            "vacancy": 29,
            "company_ids": [
                2
            ],
            "photos": [                
            ],
            "event_type": "theater"
        });
}

var signupPost = async () => 
{
    for(var i=1; i < N; i++)
        await post(URLS.SIGNUP,  // post can be found in script.js
            {
                "email": "example" + i + "@mail.com",
                "password": "khIH&*5VGk%RFk)0QedHy"
            });
}

var loginPost = async () => 
{
    for(var i=1; i < N; i++)
        console.log(await post(URLS.LOGIN,  // post can be found in script.js
            {
                "email": "example" + i + "@mail.com",
                "password": "khIH&*5VGk%RFk)0QedHy"
            }));
}

var reservationPost = async () => 
{
    for(var i=1; i < N; i++)
        await post(URLS.RESERVATION,  // post can be found in script.js
            {
                "userId": i,
                "eventId": i
            });
}

var main = async () =>
{
    try
    {
        await locationPost();
        await seminarPost();
        await companyPost();
        await eventTypePost();
        await performerPost();
        await eventPost();
        //await signupPost();
        //await loginPost();
        //await reservationPost();
    }
    catch(e) { console.log(e); }
}

main();