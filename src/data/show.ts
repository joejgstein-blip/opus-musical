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
      body: `Historical scenes unspool in sequence — snapshots of a life fully lived. The stage clears. In the final image, Jon sits across from a doctor. The doctor speaks. Jon absorbs the words, face unreadable, as the scene cuts to black.`,
    } satisfies SceneSection,

    {
      id: "act1-song-prologue",
      type: "song",
      act: 1,
      title: "Prologue",
      soundcloudUrl: albumTrack(0),
      lyrics: null,
      lyricsWip: false,
    } satisfies SongSection,

    {
      id: "act1-jon-comes-home",
      type: "scene",
      act: 1,
      title: "Jon Comes Home",
      body: `Jon steps out of the office, phone to his ear, telling Sophie what the doctor said — or a version of it. The weight of it settles over him as he walks. What does this mean? How much time? What does he say, and to whom?

He arrives home. Sophie wraps her arms around him. The kids barrel in, wanting him to play a game of tag. He agrees. They chase each other through the house as he sings.`,
    } satisfies SceneSection,

    {
      id: "act1-song-hold-the-line",
      type: "song",
      act: 1,
      title: "Hold the Line",
      soundcloudUrl: albumTrack(1),
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
      body: `Some days later. Jon helps the kids with homework at the dinner table when a wave of pain bends him forward. The kids look frightened. He tells them to go get ready for bed — he's okay. He and Sophie exchange a look. He'll be fine. He'll read them a story.

In their room, the kids ask in quiet voices: *Is Dad okay?* He reassures them. Tonight he's going to tell them a story about *them* — two kids who grow up to be superheroes.`,
    } satisfies SceneSection,

    {
      id: "act1-song-fly",
      type: "song",
      act: 1,
      title: "Fly",
      soundcloudUrl: albumTrack(2),
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
      body: `Jon runs a team meeting, then returns to his desk and grimaces. A coworker asks how he's doing. Jon keeps an upbeat face, but beneath it something shifts — he wants to cross something off his bucket list. He's never learned to play an instrument. He decides he'll learn piano. His coworkers join in, listing all the things *they'd* do if they had the time.`,
    } satisfies SceneSection,

    {
      id: "act1-song-bucket-list",
      type: "song",
      act: 1,
      title: "Bucket List",
      soundcloudUrl: albumTrack(3),
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
      body: `After a quick conversation with Sophie, Jon heads out for his first lesson. He introduces himself to his teacher and admits he's nervous about learning as an adult. The teacher waves it off — it's never too late. You just take it one step at a time.`,
    } satisfies SceneSection,

    {
      id: "act1-song-abc",
      type: "song",
      act: 1,
      title: "ABC",
      soundcloudUrl: albumTrack(4),
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
      body: `We catch Jon practicing at the piano, a kid playing alongside him. Sophie walks in as the kid drifts off to do homework. They talk — how's it going? Things have been hard. They need to do something fun. Jon decides to plan a proper night out: dinner and a walk through New York City.

The stage shifts. They stroll past old favorite spots. She threads her arm through his. They start remembering — those early nights in the city, before everything was anything.`,
    } satisfies SceneSection,

    {
      id: "act1-song-in-the-city",
      type: "song",
      act: 1,
      title: "In the City",
      soundcloudUrl: albumTrack(5),
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
      body: `Jon's birthday. Family and friends fill the house. Jon is visibly doing worse — moving more carefully, tiring more easily — but the energy in the room is warm and full. He works the room, checking in with everyone. When the cake comes out, he blows out the candles and stands to give a speech. The room goes quiet.`,
    } satisfies SceneSection,

    {
      id: "act1-song-luckiest-man",
      type: "song",
      act: 1,
      title: "Luckiest Man",
      soundcloudUrl: albumTrack(6),
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
      body: `The morning after the party. The house is a cheerful chaos — breakfast, backpacks, leftover dishes. Jon and the kids pour out the door. Sophie waves them off, then turns back to the kitchen. She starts cleaning up. She reaches Jon's place at the table. She stops.`,
    } satisfies SceneSection,

    {
      id: "act1-song-lie",
      type: "song",
      act: 1,
      title: "Lie",
      soundcloudUrl: albumTrack(7),
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
      body: `A few nights later. Jon and Sophie are getting ready — some of Jon's old college friends are in town, coming over for the evening. Sophie exits with the kids and the friends arrive, drinks in hand, full of updates. They settle in and start talking — jobs, moves, changes, the usual chaos of lives in motion.`,
    } satisfies SceneSection,

    {
      id: "act1-song-winding-road",
      type: "song",
      act: 1,
      title: "Winding Road",
      soundcloudUrl: albumTrack(8),
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
      body: `Time passes. The days run together — Jon at the piano, Jon playing with the kids, Jon and Sophie in the kitchen. In between: calls from doctors, small but unmistakable signs that things are getting worse. The family moves forward, but the edges are starting to fray. Jon leaves after dinner for another lesson.`,
    } satisfies SceneSection,

    {
      id: "act1-bad-lesson",
      type: "scene",
      act: 1,
      title: "A Bad Lesson",
      body: `During the lesson, Jon admits he's frustrated — he hasn't been making progress fast enough, and the song he's trying to write keeps slipping away from him. Mid-conversation, he gets suddenly ill and has to leave the room. Worried, the teacher calls Sophie.

When Sophie arrives, Jon is at his lowest point — the rose-colored glasses, cracked at last. He doesn't know how he can keep going. Sophie reminds him he doesn't have to fight alone. He can let other people carry some of it sometimes.`,
    } satisfies SceneSection,

    {
      id: "act1-song-superman",
      type: "song",
      act: 1,
      title: "Superman",
      soundcloudUrl: albumTrack(9),
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
      body: `Later that night. Jon and Sophie come home. He says good night to the kids and settles back at the piano. He taps a few notes. Taps a few more. Something shifts. A new melody starts to take shape — tentative at first, then gathering. He hums along with it.`,
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
      body: `The day of the show. Sophie squeezes his hand. His teacher gives him a word of encouragement. Jon walks onstage and sits down at the piano. The room goes still. He places his hands on the keys, takes a breath — and begins.`,
    } satisfies SceneSection,

    {
      id: "act1-song-shine",
      type: "song",
      act: 1,
      title: "Shine",
      soundcloudUrl: albumTrack(11),
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
      body: `After intermission: only a piano on stage. Sophie walks out. She sees it and stops — light narrows around her and the piano as Jon (a memory) walks out and sits down to play.

Sophie drifts toward him. She sits beside him. She plays the final note as the song fades. The lights come up. Background chatter begins. The curtain rises: we are at the Jon Sun Memorial Show after-party. Sophie blinks back into the present.

The MC thanks the crowd, explains the fundraiser, and thanks Sophie for hosting. Conversations resume around her.`,
    } satisfies SceneSection,

    {
      id: "act2-song-for-you",
      type: "song",
      act: 2,
      title: "For You",
      soundcloudUrl: albumTrack(12),
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
      body: `The focus shifts to Jon's piano teacher, congratulating one of his students on a great performance. Someone introduces him to a potential new student. He laughs — learning is as easy as "A-B-C." Then, unprompted, a memory: Jon at the piano, asking why this is how he wanted to spend his energy.`,
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
      body: `Jon's friends have gathered near a wall of old photos. They laugh at a few of them — Jon at some age when none of them were quite themselves yet. Then someone says it out loud: they can't believe it's been almost a year. They still think about him all the time.`,
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
      body: `Sophie slips away from the party to check on the kids, who have retreated to their room. They're on the floor, reading one of the books Jon used to read to them at bedtime. They say they miss him. Sophie says she does too — he was always the best at telling stories.

The lights shift. Jon walks in. It's a memory: a hard day — the kids' grandmother has just passed away. Jon sits between them on the floor.`,
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
      body: `Back in the main room. The party is starting to wind down. Sophie gathers everyone's attention to formally thank them for coming. She begins to speak — gratitude, reflection, the year that's passed. Mid-sentence, she catches. The crowd freezes. The lights shift.

A memory: the night Jon proposed. She was so surprised she sprang up from where they were sitting and ran down the beach, and he had to chase her.`,
    } satisfies SceneSection,

    {
      id: "act2-song-home",
      type: "song",
      act: 2,
      title: "Home",
      soundcloudUrl: albumTrack(14),
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
      body: `The guests leave. Sophie and the kids are alone in the house. The kids want to play "The Floor is Lava" — a game we've seen them play with Jon in Act I. They start laughing, jumping from cushion to cushion, and the music begins.

Time accelerates: events, seasons, years. The kids play in school shows. Sophie has dinners with friends. The moments pile up. Eventually: a crowd, a graduation robe, a young man at a podium.

The speech he gives is the same monologue that opened the show — we understand now that it was Jon's son all along, reflecting on what his father taught him. The speech ends. The music swells one last time. Family and friends gather for a photo. Jon steps into the frame. They strike a pose. The music cuts. Lights out.`,
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
