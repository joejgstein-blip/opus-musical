export type Section = SceneSection | SongSection;

export interface SceneSection {
  id: string;
  type: "scene";
  title: string;
  act: 1 | 2;
  body: string;
}

export interface SongSection {
  id: string;
  type: "song";
  title: string;
  act: 1 | 2;
  soundcloudUrl: string | null;
  lyrics: string | null;
  lyricsWip?: boolean;
}

const ALBUM_URL =
  "https://soundcloud.com/user-885999480/sets/musical_demo/s-YmPI8omDIvl";

// Embed the album positioned at a track index (0-based).
// Replace individual soundcloudUrl values with direct track URLs once uploaded.
function albumTrack(index: number) {
  return `${ALBUM_URL}&start_track=${index}`;
}

export const show = {
  title: "Opus",
  synopsis: `[Synopsis coming soon]`,
  acts: [
    { number: 1, title: "Act I" },
    {
      number: 2,
      title: "Act II",
      note: `Act II exists as a series of vignettes within a single after-party, taking place approximately one year after Act I. The "Talent Show" is now called the "Jon Sun Memorial Show." The act intentionally doesn't give grief much time to settle before something else comes along.`,
    },
  ],
  sections: [
    // ─── ACT I ──────────────────────────────────────────────────────────────

    {
      id: "act1-prologue-scene",
      type: "scene",
      act: 1,
      title: "Prologue",
      body: `The show opens with a narration from John's future son, talking about the special moments in life and how quickly they all seem to slip away. As the opening narration ends, a steady piano instrumental begins (Prologue). We start with John after having graduated college, with visuals of him navigating the everyday monotony of life. A new musical element is introduced as John meets his future wife, Sophie, for the first time, and we continue to see the development of their relationship as the music builds. Additional musical elements are introduced as we see John and Sophie interacting with their friends and eventually getting married. Their life continues to unfold, with children being born and them experiencing special moments with their family. The music becomes softer and slower as one day we cut to a visual of John in a doctors office, discussing somber news. The final dissonant notes fade away with John shown alone, head in his hands.`,
    } satisfies SceneSection,

    {
      id: "act1-song-prologue",
      type: "song",
      act: 1,
      title: "Prologue",
      soundcloudUrl: "https://soundcloud.com/user-885999480/08_prologue_orchestra-8/s-Ku7EI8WQEPj?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=11f00ba7504442969d394f614c3c3273&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: null,
      lyricsWip: false,
    } satisfies SongSection,

    {
      id: "act1-jon-comes-home",
      type: "scene",
      act: 1,
      title: "Jon Comes Home",
      body: `Scene begins with Jon on the phone with Sophie (split stage?) - conveying the news (to decide - what level of specificity). He is on his way home - as he leaves the office, he ponders what this means for him.

HOLD THE LINE (First Verse and Chorus)

After the chorus, he arrives home and greets Sophie and his two children at home. Sophie hugs him, and his two kids want him to play a game with them. He agrees and sings as they play a game of tag in the house.

HOLD THE LINE (2nd Verse)

Music lulls as they finish the game. The kids need to get ready to go to practice - he says goodbye to them and is once again alone in the house.

HOLD THE LINE (Bridge and Final Chorus)

End Scene as the music ends.`,
    } satisfies SceneSection,

    {
      id: "act1-song-hold-the-line",
      type: "song",
      act: 1,
      title: "Hold the Line",
      soundcloudUrl: "https://soundcloud.com/user-885999480/02_hold_the_line-2/s-PqpjETGHdgw",
      lyrics: `[Verse 1]

Who am I?
And what will I become?
How much time?
Why do I feel so numb?

How can I,
Say all I need to say?
And I feel — I'm
drifting away.

I'm stuck here in the woods,
and now the whole world seems so dark.
Can anybody help?
Because I'm not Lewis or Clark.

My wife, my kids, my family,
They need to see me,
Win this…please?

I'll find a way through this,
And I'll find some belief.

[Chorus]

So I'm on my way,
Taking what's mine,
I'll fight on my knees,
Holding the line

I'm seizing each day,
Forget what they say,
'Cause I can do anything,
And I'm still alive.

[Verse 2]

What is life?
But how we choose to pass the time?
Take a breath,
Because there ain't no grand design.

Days go by,
Don't blink, you'll miss it, and then it's gone,
So let's write, each day,
A cheerful song.

Take one step at a time,
And let the pieces fall in place,
Just laugh and cry and love,
And really feel that sweet embrace.

My wife, my kids, my family,
That's all I need,
I will succeed.

I'll find meaning in these,
Little things along the way, okay.

[Bridge]

Round and round the wheel goes,
Where it stops, nobody knows,
Have to make it through these highs,
And these low, low, lows,

Terrified of what's to come,
Feel I see a setting sun,
Heart is heavy,
But I know, that I won't succumb—

I'll hold that line,
I'm working each damn day,
To be fine—

So hear me right now,
When I say

[Final Chorus]

That I'm on my way,
Taking what's mine,
I'm down on my knees,
Holding the line

I'm seizing each day,
Forget what they say,
'Cause I can do anything,
And I'm gonna thrive—

Doing my time,
I'm fighting this fight,
Holding that line.

I'm seizing each day,
Forget what they say,
As long as I'm breathing,
I'm gonna fight.

I'm holding the line—
I'm taking what's mine—

And I can do anything,
And I will survive.`,
    } satisfies SongSection,

    {
      id: "act1-evening-bedtime",
      type: "scene",
      act: 1,
      title: "Evening and Bedtime",
      body: `Some days later, we return to the household in the evening. Jon is helping the kids with their homework at the dinner table, when he bends over in pain. The kids are frightened, but Jon tells them to get ready for bed. He has a brief conversation with Sophie that it has been a tough day, but he's okay and he will read them a bed-time story.

We re-join the kids in their bedroom, with them quietly asking if Dad is okay. He re-assures them, and he decides he's going to tell them a story about them - two kids who grow up to be superheroes.

FLY

As the song progresses, the kids are excited during verse 2 and out of bed. Before the outro, Jon corals them to get into bed, and the song ends with them tucked in. Jon whispers good night as the song fades out, with Sophie looking on in the doorway. Scene fades out.`,
    } satisfies SceneSection,

    {
      id: "act1-song-fly",
      type: "song",
      act: 1,
      title: "Fly",
      soundcloudUrl: "https://soundcloud.com/user-885999480/03_fly-3/s-IGq1piV40Hh",
      lyrics: `[Verse 1]

Take a breath,
Take my hand,
I'll tell you all the ways,
That you can do way more,
Than you think you can.

Go to space,
Become president,
And through it all,
Just know that,
I'll be your biggest fan.

And no, I, I won't always be beside you,
You'll go to places that are fun,
And cool,
And brand new.

And when you need me,
You can find me here.
With you all along,
My dears.

[Chorus]

You'll fly,
You'll soar right into the sky.
And fly,
And oh you'll reach such great heights.

[Verse 2]
*(Kids leading, Jon joining in)*

Take a breath,
Take my hand,
We know we're not the only ones,
Who can do more,
Than we think we can.

Yeah space is cool,
And I'd love to RULE!
But most of all,
We'd like a bedtime
Story from you.

And we know, you won't always be here reading,
We'll find new stories to make sure our love keeps beating,
And every day,
You can find us here,
And all the awesome things we'll share.

[Chorus — everyone]

We'll fly,
We'll soar right into the sky.
And fly,
And oh we'll reach such great heights.

[Outro]
*(Starting with Jon, then kids joining in)*

Take a breath,
We're together tonight,
And tomorrow you'll see,
In a brighter light.

Take the world by storm,
All the great things that you'll do.
And always in your heart,
Know you have someone who loves you.

Take a breath,
We're together tonight,
And tomorrow you'll see,
In a brighter light.

Through the highs and lows,
We'll see it through.
And always in your heart,
Know you have someone who loves you.

Take a breath,
And take my hand,
And soon you'll be in a distant land.

You've got me,
And I've got you.
And always in your heart,
Know you have someone who loves you.

And always in your heart know you have someone who loves you.`,
    } satisfies SongSection,

    {
      id: "act1-last-day-work",
      type: "scene",
      act: 1,
      title: "Last Day at Work",
      body: `We start with Jon in the office, leading a team meeting and then returning to his desk and grimacing. While there, Jon and one of his coworkers discuss his condition and how he is doing overall. Jon keeps an upbeat attitude, but realizes that he would like to cross something off of his bucket list as a way to keep fighting. He decides that he's never learned to play an instrument, and decides that he will learn to play the piano. He, along with his coworkers, sing about getting out of the office and hitting their own bucket list items.

BUCKET LIST

The scene ends with Jon packing up his bag and heading home.`,
    } satisfies SceneSection,

    {
      id: "act1-song-bucket-list",
      type: "song",
      act: 1,
      title: "Bucket List",
      soundcloudUrl: "https://soundcloud.com/user-885999480/04_bucket_list-3/s-83ifpE0EHqg?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=082b57cf9a9941a8aba0a125cc2cdd18&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse 1]
*(Coworkers)*

I want to take a safari,
And get to see a lion bathing in the Serengeti air.
Or maybe drive a Ferrari,
Take it on the autobahn and drive it fast as I could dare.

Road tripping to Alaska,
Never need to ask, the
Time of day 'cause I don't care.

Snorkeling with the fishies,
See a coral reef,
You've never seen the water quite so…

[Pre-Chorus]

Clearly these dreams,
Are, more than they seem,
They're a beacon calling out,
So we believe…

[Chorus 1 — Ensemble]

We're getting to the bottom of our list,
It's time to see what life is all about.
Tally up the moments you can't miss.
Then go grab a pen, cross the next one out.

We're not enthralled,
By conference calls,
*(Solo)* Unless I'm takin' them in Machu Picchu.

So if you had one year left,
What would you do?

*Jon: I'm…not sure yet.*

[Verse 2]

I'm going sky-diving,

Dine at the finest steakhouse,
Compliment the chef,
That I'm so blessed to be the honored guest.

[Pre-Chorus]

Guess that these dreams,
Are, more than they seem,
They're a beacon calling out,
So we believe…

[Chorus 2 — Ensemble]

We're getting to the bottom of our list,
It's time to see what life is all about.
Tally up the moments you can't miss.
Then go grab a pen, cross the next one out.

Our 9 to 5s,
They don't excite,
*(Solo)* Unless I finally get to move to Paris.

So if you had one year left,
What would you see?

[Bridge]

Well, maybe, just maybe,
I don't need more places to see.
No emus, not Peru,
It's something else I should pursue.

Give you all one lasting memory,
Show everyone there's so much more to me,
So if I had one day left, that's what I'd do,
I'd learn to play a song for all of you.

[Chorus 3 — Ensemble]

We're getting to the bottom of our list,
It's time to see what life is all about.
Tally up the moments you can't miss.
Then go grab a pen, cross the next one out.

We're not enthralled,
By conference calls,
*(Jon)* It's time to have a different kind of breakthrough.

So if you had one year left,
What would you do?

If you had one year left,

[Build]

10 months left,
8 months left,
23 weeks left,
5 months left,
One more summer,
3 months left,
Only 4 weeks,
Now 10 sunsets,
If you had one day left, what would you do?

[Outro]

I'd finally play that song for you —
That's what I'd do.
*Ensemble: One more sunset, and one more evening to spend.*

If I had one day left, that's what I'd do,
I'd finally play that song for you.`,
    } satisfies SongSection,

    {
      id: "act1-piano-lessons",
      type: "scene",
      act: 1,
      title: "Piano Lessons",
      body: `After a brief discussion with Sophie, he heads out for his lesson, cutting to the music lesson. He introduces himself to his teacher, where he expresses nerves about learning as an adult. The teacher assures him that it's never too late to learn, and that you just take it one step at a time.

ABC

The song pulls in additional contributions from other students at the school, ending on an upbeat note. The lesson continues as the scene cuts.`,
    } satisfies SceneSection,

    {
      id: "act1-song-abc",
      type: "song",
      act: 1,
      title: "ABC",
      soundcloudUrl: "https://soundcloud.com/user-885999480/05_abc-5/s-yPeE4ogFSjr?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=b17b623ec1f742e6931bbd620f8cb2ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse 1]
*(Teacher)*

A, B, C,
And 1, 2, 3,
Just take one step at a time,
And it's a breeze.

A, B, C,
Do-re-mi,
And surely soon you'll see,
It's simple as can be.

That's really all you ever need.
Just 1-2-3.

[Verse 2]

Now 2-3-4,
Let's play some more,
There's no stress,
This lesson isn't keeping score.

And 2-3-four,
La-ti-do,
Just feel the flow,
You'll know exactly where it goes.

If you ever need a chance to breathe,
1. 2. 3.

[Bridge]

Sometimes we switch the tempo,
Or bring in some new notes,
There's so many possibilities.
Then before we know it,
The song's at its end.
But before then, you know just what we need?

[Verse 2b]

It's A-B-C,
So follow me,
Now it's your turn,
So turn the page and proceed,
All you really need to succeed,
1, 2, 3.

[Verse 3 — Jon]

It's A, B, C,
And 1, 2, 3 — right?
I don't even know the names,
Of all the keys.

Then 2-3-4,
And la-ti-do,
I'll play it high, and low,
And fast, and maybe slow.

Today's the day to plant the seed.
Of 1-2-3.

[Verse 4]

Now 1-2-3,
And do-re-mi,
Maybe I'm starting to believe,
This is for me!

And 2-3-4 — ah shoot!
*(Messes up playing)*

[Final — Everyone]

A-B-C,
1-2-3,
If you're feeling something now,
Come sing with me,

A, B, C,
1 2 3 … 4 5,
Oh how that music makes us feel alive,
Oh how that music makes us feel alive.`,
    } satisfies SongSection,

    {
      id: "act1-date-night",
      type: "scene",
      act: 1,
      title: "Date Night",
      body: `We see Jon practicing at the piano a bit, playing along with one of the kids. Sophie walks in as the kid goes off to do homework, and they talk about how it's been going. After Jon needs to take a moment when they are "dancing", they discuss the need to do something fun and get out of the house. Jon decides to plan a date for the two of them, heading into New York City for an evening.

Transition

We see them walking around downtown - passing by some of their favorite spots. They begin reminiscing about some of their first nights.

IN THE CITY (Verse 1, Chorus, Verse 2)

Jon needs to take another moment, and after a brief moment of sadness, Jon continues the song.

IN THE CITY (Bridge, Final Chorus).

The scene ends with them together, laughing.`,
    } satisfies SceneSection,

    {
      id: "act1-song-in-the-city",
      type: "song",
      act: 1,
      title: "In the City",
      soundcloudUrl: "https://soundcloud.com/user-885999480/06_in_the_city-4/s-tAzvCm0IkOM?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=af4fc47145ea48409ed0e4636b33aae5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse 1]

It was long ago,
Back before we ever knew how life goes.
Caught my eye, with a smile,
Turned my head and then we talked for a while.

And it felt so right,
And we drank all night,
Talkin' 'bout, how the future,
It seemed so bright.

Grabbed a slice at 3,
You put your arm around me,
And I knew right then,
That I'd never leave…

Until the stars go out on us.

[Chorus]

Dance with me,
And spin me around,
Don't need no company,
'Cause three is a crowd.

So let those problems fade away,
We're alright,
Just me and you, baby,
Alone in the city tonight.

[Verse 2]

Let's go out to the arcade bar,
Or we can just take a stroll through the park.
You know the one with that skyline view,
We would lay there until it got dark.

Grab a street dog,
*(wow, that was our staple)*
Hit that dive bar,
We carved our name in the table.

We can do anything, I don't care.
As long as you're here.

[Chorus]

Dance with me,
And spin me around,
Don't need no company,
'Cause three is a crowd.

So let those problems fade away,
We're alright,
Just me and you, baby,
Alone in the city tonight.

[Bridge]

Do you mind,
If we just take rest for a moment,
If I just catch my breath for a moment,
Because tonight was our night and I told you,
That I'd be fine.

Take whatever time you need,
There's no other place I'd rather be.
And know that it's enough for me,
To be with you, in the city…

Tonight's a new story to write,
I'll be with you 'till morning light.
And when we're at this chapter's end,
We'll turn the page and start again.

[Final Chorus and Outro]

Dance with me,
And spin me around,
Don't need no company,
'Cause three is a crowd.

So let those problems fade away,
We're alright,
Just me and you, baby,
Alone in the city tonight.

Tonight's a new story to write,
I'll be with you 'till morning light.
And when we're at this chapter's end,
We'll turn the page and start again.

Tonight's a new story to write,
I'll be with you 'till morning light.
Let's take the pen we simply must,
Tell the timeless tale of us.`,
    } satisfies SongSection,

    {
      id: "act1-birthday-party",
      type: "scene",
      act: 1,
      title: "Birthday Party",
      body: `We are nearing Jon's birthday, and a bunch of his family and friends have come over the celebrate. Jon is doing visibly worse at this point, but it's a festive atmosphere and we see him talking to a few people about his progress and how he's doing. After the birthday cake comes out, Jon blows out the candles and gives a speech - expressing his gratitude for his family and friends.

LUCKIEST MAN

The scene ends with Jon singing the final line, sitting back down at the table with Sophie and his two kids.`,
    } satisfies SceneSection,

    {
      id: "act1-song-luckiest-man",
      type: "song",
      act: 1,
      title: "Luckiest Man",
      soundcloudUrl: "https://soundcloud.com/user-885999480/07_luckiest_man-6/s-HcGvEgGp24a?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=d0f888fc19ce4116963b71a15f5eb94d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse]

Happy birthday to me,
Well, that's a funny thing to sing.
Because right now I'm feeling,
More weathered than my age says,
Like a sage,
Who gained wisdom too late.

And why can't we put life on pause?
Revel more in this applause,
Take a picture of this moment,
Where love is omnipotent,
Stay inside it,
Now that's time well spent.

[Pre-Chorus]

Looking back through all the years,
The laughs, the tears,
The things I feared,
It's all so clear.

When you start accounting,
It's paramount,
To never doubt,
What life is all about.

'Cause…

[Chorus]

I've seen city lights,
And starry nights,
Turned into sunrises,
Rode camels through a great sandy sea.

Went to mountain peaks,
And quiet creeks,
Got lost in woods for weeks,
But now right here is where I'd like to be.

I've seen subway lines,
And ancient shrines,
A big ball of twine.

Sipped on mai tais
On a beach in Kauai.

I flew across the North Atlantic,
To kiss the Blarney stone,
And yet I always found my way back home.

Because deep inside I've always known.

I would trade it away,
Every trip that I've taken,
If I knew that it meant I could stay.

And it's each one of you,
That's seen me through,
This —
So nothing compares to this.
I'm the luckiest man there is.

On the face, of the earth.`,
    } satisfies SongSection,

    {
      id: "act1-morning-rush",
      type: "scene",
      act: 1,
      title: "Morning Rush",
      body: `It's morning after the party, and the family is getting ready for the day - Jon off to work and the kids off to school. We see a hectic morning taking place, rushing to get through breakfast, and then Jon and the kids rush out the door, with some dishes left at the table - still some leftover clean-up from the party too. Sophie sees them out, and then starts cleaning up. As she reaches Jon's place setting, she falters a bit.

LIE

The scene ends with Sophie, sitting back down at Jon's place setting.`,
    } satisfies SceneSection,

    {
      id: "act1-song-lie",
      type: "song",
      act: 1,
      title: "Lie",
      soundcloudUrl: "https://soundcloud.com/user-885999480/04_lie-4/s-c0WTvNKFFSC?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=933bdc1263604d0cb4f5ee25f0169104&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse]
*(Sophie)*

Another dish into the sink,
It seems like every time I blink,
There's another thing to do,
I'm at the brink.

Grab the food, and pack the lunches,
And there's still no Captain Crunch,
So throw it on the list,
With milk, and eggs, and such.

There's that squeak to our front door,
Putting in a hardwood floor,
John said he'd check,
And get the quotes down at the store.

And these dishes never end,
Could really use a hand to lend,
Some help,
Can we just wind the clocks back and pretend?

That tomorrow, we can tackle all these things.
And us together, we make such a damn good team.

[Pre-Chorus]

I've heard that sometimes,
You need hope,
When all else is gone,

Here with our family,
In this home,
Is where he belongs.

And who cares, who cares,
What any doctor says?
We're gonna fight this bitter creature through,
Until the very end,

'Cause he promised,

[Chorus]

"Even if the sky begins to fall,
You know I'm with you through it all,
There's nothing else that I would rather do,
Than waking up each day to you."

And I don't believe,
He'd lie to me,
So let's wake up from this bad dream.

Can we, please?
How could this take him from me?

[Bridge]

A trip to France,
And Disneyland,
And salsa dancing,
Was our plan,
Lounging around,
On silver sands,
With you, with my home.

Graduations,
All the weddings,
Growing old,
Just us — together.
Time is ours,
Always will be,
With you, with my home.

We had it all
Now it feels so small
Just want to be,
With you, with my home.

We had a plan,
Until this began,
And all I want is
You, you're my home.

And you promised,

[Final Chorus]

"Even if the sky begins to fall,
You know I'm with you through it all,
There's nothing else that I would rather do,
Than waking up each day to you."

And I don't believe,
You'd lie to me,
But we can't wake up from this dream.

Even so,
Don't leave me here all alone.`,
    } satisfies SongSection,

    {
      id: "act1-memory-lane",
      type: "scene",
      act: 1,
      title: "A Night Down Memory Lane",
      body: `A few days later, Jon and Sophie are discussing the evening, where some of Jon's old college friends are in-town and coming over to visit. Sophie exits with the kids, and we see the friends enter. After some brief conversation, they all crack open a few drinks and start talking about their updates over the past few years.

WINDING ROAD

As the song ends, the friends share a few more good-byes and then exit, leaving Jon by himself. He walks over the piano and starts practicing, playing twinkle, twinkle little star before transitioning into a new song, but he can't seem to find the melody.`,
    } satisfies SceneSection,

    {
      id: "act1-song-winding-road",
      type: "song",
      act: 1,
      title: "Winding Road",
      soundcloudUrl: "https://soundcloud.com/user-885999480/06_winding_road-6/s-mtWJhLn8fXa?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=9c506350dbb949e4ab0403d33d719d36&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse 1]

*(Mike)*
Found a new job and moved my family out to L.A.
Gave it a year and it came crashing down like a wave.
Saw that pink slip,
Nearly lost my grip,
But we moved back home, reset, and we've found a way.

*(Pat)*
Got out of med school and, oh, life is feeling so new,
The days are long, and tough — it's rough there in the ICU.
But through it all,
I've found my call,
And I know I'm there to stay — going to see it through.

[Pre-Chorus]

*Jon:* We've come so far.
*Mike:* And we've picked up some scars.
*Pat:* But it sure is nice,
Seeing you all again,
So here's to old friends.

[Chorus]

Now pack your bags we're on a winding road,
Searching afar and wide to find where we should go,
I don't know where it stops but all I know,
Is however chips may fall,
I'll be here drinking beers with you all.

[Verse 2]

*(Briana)*
Well Steve decided to go out one night to the "clurb,"
He ended up in a hotel room — do not disturb.
Her name was Sam,
Caught him with red hands,
So you can bet I kicked his ass right out to the curb.

*(Phil)*
If I'm being honest, I've been just a little checked out.
Dan's good, and work's good — I'm just wandering around now.
I found for me,
A new hobby,
Started photography, we'll see — I still have my doubts.

[Pre-Chorus]

*Briana:* Boy life can be an uphill climb.
*Jon:* Let's drink one more time.

[Chorus]

Now pack your bags we're on a winding road,
Searching afar and wide to find where we should go,
I don't know where it stops but all I know,
Is however chips may fall,
I'll be here drinking beers with you all.

[Harmonies]

Here's to old friends,
Until the night ends,
Make a toast,
To this winding road we're on!

Here's to old friends,
Until the night ends,
Make a toast,
To this winding road we're on!`,
    } satisfies SongSection,

    {
      id: "act1-practice-symptoms",
      type: "scene",
      act: 1,
      title: "Practice & Practice & Symptoms",
      body: `Conveying the passing of time, we see the family going through the typical days - Jon is practicing, playing with the kids, working with Sophie. Interspersed are calls from the doctor, subtle but increasing signs of the symptoms getting worse.

The scene ends with Jon leaving after dinner to go to another lesson.`,
    } satisfies SceneSection,

    {
      id: "act1-bad-lesson",
      type: "scene",
      act: 1,
      title: "A Bad Lesson",
      body: `During a lesson with his teacher, Jon is expressing frustration that he hasn't been able to make progress as fast as he'd like, and he's struggling to write a song that he feels good about to perform. During that conversation, he gets ill and needs to run out of the room. Worried, his teacher calls Sophie.

In his low point, Jon expresses how he doesn't know how he can do it, and keep going. It's the breaking of the rose colored glasses that he has been wearing this whole time. reassures him how he doesn't have to fight by himself - he can let other people fight for him sometimes.

SUPERMAN

Jon and Sophie end the song hugging - they thank the teacher for the help and exit as the scene ends.`,
    } satisfies SceneSection,

    {
      id: "act1-song-superman",
      type: "song",
      act: 1,
      title: "Superman",
      soundcloudUrl: "https://soundcloud.com/user-885999480/010_superman-5/s-MVrXQbsRa5P?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=02fef5639d954b50a7989315fda7568c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `*(Sophie has been telling Jon he needs to rest. He keeps brushing it off. She pushes harder, more frustrated, until—)*

*Jon snaps: "I KNOW what's happening to me!"*

*A beat. He softens. He shouldn't have said it like that.*

[Verse 1]
*(Jon)*

It seems the mask is slipping off.
Worked so hard to dodge the knocks.
I can't pretend it hasn't knocked me down.
Each time it's harder to stand up, from the ground.

I'm seeing cracks in my defense.
Each battle's getting more intense.
Thought I was superman but now I'm just a guy,
Wearing a costume you could buy down at the store.
I don't know how I can do this anymore.

[Chorus]
*(Sophie — comforting)*

You can take off the cape and rest.
You've got my shoulder here to lean on, there's nothing to contest.
And then tomorrow we can face, this quest.

So take my hand,
And we can do this,
We can lift you off the floor.

And take one step,
Then two,
You'll walk right out that door.

You've been hurting for a moment,
And it's not weakness to show it,
*So let me be clear:*
Wherever you go I'll be right here.

[Verse 2]
*(Jon)*

What can you do when life's this rough.
These affirmations just aren't enough,
Rose-colored glasses turn the gray skies into sun,
Maybe these rainclouds, they just can't be outrun.

But,
Even so I've got to try,
Stay in the suit and keep on flying,
High up,
I'll soar across the sky,
Until the green screen falls apart, and this all ends.
Right now I really need to pretend.

[Chorus 2]
*(Jon)*

So carry on,
Down the road,
The only way to make it home.
Just keep on trudging,
Through the dark and the unknown.

Yes I've been hurting,
For a moment,
And you know,
I'm freaking scared,
So tell me,
How do I keep going from here?

Because I'm no further down this path,
A fact I can't ignore.
And even home it doesn't feel like home no more.

I'm tired of hurting,
And you know,
Maybe it's time to say a prayer.
To tell me,

How do I keep going from here.`,
    } satisfies SongSection,

    {
      id: "act1-bad-lesson-continued",
      type: "scene",
      act: 1,
      title: "A Bad Lesson, Continued",
      body: `Jon and Sophie walk in, and after saying good night to his kids, Jon sits back down at the piano. He taps a few notes, and then seems to have a breakthrough as he starts playing a humming a new melody.

SHINE (Prelude)

The scene ends with Jon realizing that he's happy with it, grabbing his pen and paper and excitedly writing notes down as he exits.`,
    } satisfies SceneSection,

    {
      id: "act1-song-shine-prelude",
      type: "song",
      act: 1,
      title: "Shine (Prelude)",
      soundcloudUrl: albumTrack(10),
      lyrics: null,
      lyricsWip: false,
    } satisfies SongSection,

    {
      id: "act1-performance",
      type: "scene",
      act: 1,
      title: "The Performance",
      body: `It's the big day - after a few words of encouragement from Sophie and his teacher, Jon goes "on stage" and sits down at the piano to perform his song.

SHINE (Up Until the Outro)

Jon finishes his performance to a round of applause, and many of his family and friends join him on stage for the outro. Before the final chorus, he hugs his family and friends and talks to his two kids. The ensemble sings the final chorus. For the outro, after his solo, we see Jon out of breath and sit down, facing the audience, surrounded by his family and friends. The ensemble sings the final lines, holding a long note before the scene cuts to black.`,
    } satisfies SceneSection,

    {
      id: "act1-song-shine",
      type: "song",
      act: 1,
      title: "Shine",
      soundcloudUrl: "https://soundcloud.com/user-885999480/07_shine-7/s-mwfSZm41hmV?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=cf6aa0c9293b4ce1817e7d9e8a5b6cb8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Intro]

Well, it might be the end.
You never really know.
So let me tell you my friends,
You're in for one hell of a show.

I'm gonna shine tonight,
I'll rise above it all,
And tell the world.

That a broken person can mend,
'Cause I'm okay.
And I'm gonna shine 'till the end.

Ooh — ooh — ooh.
Ooh — ooh — ooh. [x2]

[Verse]

Where do we find the strength to make it through each day?
How can we find the time to say everything we need to say?
This life's a bright mosaic of all the good times past,
Why can't we just slow it down, and make them last?

I feel the ground,
It's shifting under me,
It's time to spread these wings, fly,
And finally be free.

[Chorus]

So it might be the end,
You never really know.
So let me tell you my friends,
You're in for one hell of a show.

I'm gonna shine tonight,
I'll rise above it all,
And tell the world.

That a broken person can mend,
'Cause I'm okay.
And I'm gonna shine 'till the end.

Ooh — ooh — ooh.
Ooh — ooh — ooh. [x2]

[Bridge 1]

Well the tides will rise and fall,
And there will be sunshine after squalls,
Every person in here knows,
If there's no rain, there's no rainbows.

And well, sometimes I catch myself despairing,
But that's a look I can't be wearing.
So I push through the pain,
And I'll rise right up again.

[Bridge 2]

I'll be climbing, and running, and leaping,
I'm reaching so high.
Scratching and clawing and bleeding,
Just trying to get by.
Fighting and taking a beating,
But I just won't die.
Until I reach the sky.

[Bridge 3]
*(Directed at Jon's family, who have joined him on stage)*

And then…

Someday, somehow,
When we're through this bad weather.
We'll be, you and me,
Always together,
I know, it sounds,
Like I'm just being clever,
But, you'll see, you and me,
Always forever.

Someday, somehow,
I know I'm gonna climb this mountain.
Someday, somehow,
So I'm gonna say it louder,
Someday, somehow,
I know I'm gonna climb up this mountain.
But until then,
Let me sing again.

[Pre-Chorus]

It might be the end,
You never really know.
So for now let's bring it in for one last go.

[Final Chorus]

It might be the end,
You never really know.
But let me ask you my friends,
Wasn't this one hell of a show?

I'm gonna shine tonight,
I'll rise above it all,
And tell the world.

That a broken person can mend,
'Cause I'm okay.
And I'm gonna shine 'till the end.

[Outro]
*(The performance ends. During the musical interlude, the crowd joins Jon on stage. He hugs and greets them. The ensemble sings.)*

Turn on the lights and see,
I'm gonna shine, be free,
And take a breath,
From the weight of the world.

From mountain to the sea,
I want to shout with glee,
So sing with me,
And the music goes on…

[Ending]

Until the sky caves,
And if the earth shakes,
Until my last breath,
I'm gonna shine through it all. [x4]`,
    } satisfies SongSection,

    // ─── ACT II ─────────────────────────────────────────────────────────────

    {
      id: "act2-a-memory",
      type: "scene",
      act: 2,
      title: "A Memory",
      body: `After intermission, we see only a piano on stage as Sophie walks out. We see her falter as the piano in the room grabs her attention - lighting focuses on Sophie and the piano as Jon (memory) walks out and sits down to start playing.

FOR YOU

Sophie, who went over to join Jon at the piano during the song, plays the single, final note of the song. As it fades out, the lighting comes up and background chatter begins as the curtain raises. Sophie is snapped out of her memory as the audience sees the scene for the first time - showing that we are now at the memorial after-party.

An MC explains how the show works as a fundraiser in honor of Jon, and that they raised a lot of money in his memory. She thanks Sophie for hosting the gathering afterwards as conversations begin in the background again.`,
    } satisfies SceneSection,

    {
      id: "act2-song-for-you",
      type: "song",
      act: 2,
      title: "For You",
      soundcloudUrl: "https://soundcloud.com/user-885999480/012_for_you-1/s-sXG074dS888?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=49e782e6f7d04e8bb5a94f60d4ee0a65&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `*(Jon, alone — not yet aware Sophie is listening)*

Feels like the world is getting colder,
Now it's clear what will unfold.
I'm just wishing I could hold her.

Another day, or maybe two.

*(Jon realizes Sophie is listening. She sits at the piano. He continues.)*

I don't know how we ever got here.
But now the sun is set I fear.
I'm at the exit sign for nowhere.

So pour a glass, I'll have a few.
And toast to just being with you.

[Chorus]
*(Jon & Sophie)*

So one for me,
One for you,
One for all the things we couldn't do.

One for love,
One for youth,
One for all the times that we've been through.

*(Jon)*
And I've been lost,
I've been blue,
Walking down this endless avenue.

But wherever I have gone,
You've always been where I belong.

*(Both)*
So one for me,
One for you,
One for all the things we couldn't do.

One for love,
One for youth,
One for all the times that we've been through.

And I'm not lost,
I'm not blue,
Walking through this life when it's us two.

*(Jon only)*
So whenever I have gone,
I hope you keep playing this song. [x2]
Because I wrote it for you.`,
    } satisfies SongSection,

    {
      id: "act2-teachable-moments",
      type: "scene",
      act: 2,
      title: "Teachable Moments",
      body: `The focus shifts to Jon's teacher, congratulating one of his students on a great performance. Another potential student is introduced to him, and he jokes that learning is as easy as "A-B-C". The background stops again.

TEACHER SONG (focus of this one is a conversation between Jon and the teacher, where the teacher asks him why this is how he wants to spend his energy - building on the "Bucket List" song in Act I. The main takeaway is that it's about being yourself, and leaving something behind. Experiences are priceless).

Once again, we return to focus and the background conversations resume. The last part of the conversation is around why he still teaches - to help others have these experiences.`,
    } satisfies SceneSection,

    {
      id: "act2-song-teacher",
      type: "song",
      act: 2,
      title: "Teacher Song",
      soundcloudUrl: null,
      lyrics: null,
      lyricsWip: true,
    } satisfies SongSection,

    {
      id: "act2-old-photos",
      type: "scene",
      act: 2,
      title: "Old Photos",
      body: `Focus shifts to Jon's friends, who are gathering around some old pictures of Jon that are hanging on the wall. They are laughing at the old pictures, and express their disbelief that it's already been almost a year since the performance, and how they still think about Jon day-to-day.

BLUE SKIES (to be re-written)

They end the song, of course, with a toast, and then disperse to go mingle a bit more as the focus shifts back to the general crowd. This is the first true end scene of Act II.`,
    } satisfies SceneSection,

    {
      id: "act2-song-blue-skies",
      type: "song",
      act: 2,
      title: "Blue Skies",
      soundcloudUrl: null,
      lyrics: null,
      lyricsWip: true,
    } satisfies SongSection,

    {
      id: "act2-kids-room",
      type: "scene",
      act: 2,
      title: "The Kids' Room",
      body: `We return to Sophie, who is checking on her kids, who have decided to leave the main party area and are hanging out in their room. They are laying on the floor, reading one of their books that Jon would read to them before bed. They say how they miss their dad, and Sophie agrees that he was always the best at telling stories. The lights change to indicate we are entering a memory as Jon enters.

The kids have had a tough day - their grandma has passed away.

FLY (REPRISE) Re-written to be framed as their grandma watching them as they grow up and do great things - "always in their hearts".

The scene ends with Jon kissing both kids on the head, and then walking out of the room. The lights return to normal as the kids go over and sit on each side of Sophie. After a shared moment, she asks if they want to go back downstairs. They agree, and exit.`,
    } satisfies SceneSection,

    {
      id: "act2-song-fly-reprise",
      type: "song",
      act: 2,
      title: "Fly (Reprise)",
      soundcloudUrl: albumTrack(13),
      lyrics: null,
      lyricsWip: true,
    } satisfies SongSection,

    {
      id: "act2-last-conversation",
      type: "scene",
      act: 2,
      title: "A Last Conversation",
      body: `Back in the main room, conversation is still buzzing as the party starts to wind down. Sophie gathers everyone's attention to formally thank them for coming - as she expresses gratitude, and reflects on the past year to set up the annual show, she catches again. The crowd freezes, and lights shift into another memory.

Sophie is reminded of the day that Jon proposed to her. She begins singing alone, but Jon joins after the first chorus.

HOME (Message of this song is about the journey - they promised that they would get through everything together (a different angle to LIE in the first act), and excitement for the future. The end of the song returns to Sophie alone, stating that "I'd choose to do it all again with you") - the completion of Sophie's arc, the sentiment that even knowing what would happen, she would still go back and do it again).

As the song ends, we return the focus to the present and the crowd, and Sophie wraps up the speech.`,
    } satisfies SceneSection,

    {
      id: "act2-song-home",
      type: "song",
      act: 2,
      title: "Home",
      soundcloudUrl: "https://soundcloud.com/user-885999480/013_home-2/s-9gif1nV8nPH?in=user-885999480/sets/musical_demo/s-YmPI8omDIvl&si=4cc9659edcf740b6a518d64fe69f2621&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      lyrics: `[Verse 1]
*(Sophie's point of view)*

You took my hand and then the world melted away,
It was a warm evening right at the end of May.
We grabbed our knapsack from the backseat of the car,
And set up camp down on the beach beneath a million little stars.

You told a joke and, oh, we laughed so much it hurt,
Then you began to pull out something from your shirt,
And in that moment I truly could not believe,
When you got down on your one knee and wove a fairy tale for me.

[Chorus]

You said "Sophie will you take my hand and not let go,
Even if the sky fell down on us I'd hold you close.
Now, I confess,
I really hope you say yes.
Even though I'm queasy,
It's so easy,
To know I'd wake up every day to you.
There's nothing else that I would rather do.
Than waking up each brand new day to you."

[Verse 2]
*(Jon's point of view)*

You were so excited that you sprang up to your feet,
I had to run and chase you down the beach,
And when I caught up you had tears filling your eyes,
As you responded to my question with the most beautiful smile.

[Chorus]

That of course I'll take your hand and always hold you close,
Even if the sky falls down on us I'll not let go,
Oh wow, I'm a mess,
But the answer is yes,
And with you my dear,
It's just so clear,
I'd love to wake up every day to you.
There's nothing else that I would rather do.
I know I'm home whenever I'm with you.

[Bridge]

*Jon:* And now, the world is ours to see.
*Sophie:* Us two, we'll follow all our dreams.

*Jon:* I know right now that the money is tight,
*Together:* So listen,
If you're by my side it has to be right.

We'll find a way.
To brighter days.

[Bridge 2]

South of France,
Disneyland,
We'll lay on silver sands and…

We'll dance too,
Me and you,
At every wedding venue.

Let's grow old,
And behold,
A beautiful life we've molded.

And when each day's through,
I know that I'll be ending it with you.

And finally our dreams are coming true.
We'll set the world on fire, me and you.
There's nothing in this world that we can't do.
And yes, I've finally found my home in you.

[Outro — Sophie]

You took my hand and then the world melted away,
And even though I really wish you could have stayed,
Upon reflection, oh, this life has been a dream,
And no, the bucket list we had isn't as empty as it seemed.

Those exotic flights and endless nights and trips to ski,
I could write an endless song of every memory,
The kids, our gems,
So much of you in them.
And even though I'll have to wait to dance,
And go ourselves to Disneyland,
And so much more that we had planned…

It was enough to have those days with you.
I'd choose to do it all again with you.`,
    } satisfies SongSection,

    {
      id: "act2-epilogue-scene",
      type: "scene",
      act: 2,
      title: "Epilogue",
      body: `The party departs, and we are left with Sophie and the kids by themselves, back in the house. The kids ask if they can play "The Floor is Lava", something we have seen them play with Jon in Act I. As they start playing and laughing, the music starts.

EPILOGUE

We see time start to speed up, and various events happening with the family and friends - kids playing in events, dinners between Sophie and friends, eventually leading to a crowd and Jon's son in a graduation robe. The music softens as we see his son giving a speech - the speech ends with the same opening monologue, bringing the show full-circle to show that it was Jon's son speaking at the very beginning, reflecting on lessons learned from his dad.

The speech ends, and music swells one final time as the family and friends gather to take a picture to celebrate graduation. We see Jon sneak into the photo as well, and they strike the final pose as the music cuts, and lights go out.`,
    } satisfies SceneSection,

    {
      id: "act2-song-epilogue",
      type: "song",
      act: 2,
      title: "Epilogue",
      soundcloudUrl: null,
      lyrics: null,
      lyricsWip: true,
    } satisfies SongSection,
  ] as Section[],
};
