var musicFiles =
[
    '/music/Tetsuo & Youth/01 - Summer [Explicit]_c5732111-841b-43dd-9416-412bc2a9a986.mp3',
    'music/Tetsuo & Youth/02 - Mural [Explicit]_5c34eca5-9ab9-432f-8ee2-0f2345008751.mp3',
    'music/Tetsuo & Youth/03 - Blur My Hands (feat. Guy Sebastian) [Explicit]_0fb97514-8a78-4907-af4d-b91730d19540.mp3',
    'music/Tetsuo & Youth/04 - Dots & Lines [Explicit]_2d307085-1094-47d6-9158-55e578658ada.mp3',
    'music/Tetsuo & Youth/05 - Fall [Explicit]_562aeab6-a458-4bed-9bca-1ec2fca76414.mp3',
    'music/Tetsuo & Youth/06 - Prisoner 1 & 2 (feat. Ayesha Jaco) [Explicit]_93fac613-cfb0-475d-b923-bbdf8df1be2e.mp3',
    'music/Tetsuo & Youth/07 - Body Of Work (feat. Troi & Terrace Martin) [Explicit]_591ae36c-e396-41e3-8a18-ff2ee49e7bbd.mp3',
    'music/Tetsuo & Youth/08 - Little Death (feat. Nikki Jean) [Explicit]_b191f177-3276-484d-8d76-78057ff64a86.mp3',
    'music/Tetsuo & Youth/09 - No Scratches (feat. Nikki Jean) [Explicit]_d25934b0-39e6-4d32-9b8e-7df3bcc93c0e.mp3',
    'music/Tetsuo & Youth/10 - Winter [Explicit]_1f36a0e8-36b9-41ef-98a1-0358de0f7128.mp3',
    'music/Tetsuo & Youth/11 - Chopper (feat. Billy Blue, Buk of Psychodrama, Trouble, Trae Tha Truth, Fam Lay & Glasses Malone) [Explicit]_7f695bdb-ec28-4b74-ade9-ca03e10d9fa9.mp3',
    'music/Tetsuo & Youth/12 - Deliver [Explicit]_c173a0e7-5d66-4e32-9557-a8f8c8e44fdb.mp3',
    'music/Tetsuo & Youth/13 - Madonna (And Other Mothers In The Hood) [feat. Nikki Jean] [Explicit]_8841ec0f-391b-4cfa-8617-252fe76ddd2b.mp3',
    'music/Tetsuo & Youth/14 - Adoration Of The Magi (feat. Crystal _Røvél_ Torres) [Explicit]_9aaeb94d-53bc-414b-8a8a-d8958f541674.mp3',
    'music/Tetsuo & Youth/15 - They.Resurrect.Over.New. (feat. Ab-Soul & Troi) [Explicit]_5c8e4a52-00fe-4e06-91ca-125405a6c9b3.mp3',
    'music/Tetsuo & Youth/16 - Spring [Explicit]_790fff88-3f6a-4ee3-a5ca-dd6ddcd5047e.mp3'
];

var trackNames = 
[
    "Summer [Explicit]",
    "Mural [Explicit]",
    "Blur My Hands (feat. Guy Sebastian) [Explicit]",
    "Dots & Lines [Explicit]",
    "Fall [Explicit]",
    "Prisoner 1 & 2 (feat. Ayesha Jaco) [Explicit]",
    "Body Of Work (feat. Troi & Terrace Martin) [Explicit]",
    "Little Death (feat. Nikki Jean) [Explicit]",
    "No Scratches (feat. Nikki Jean) [Explicit]",
    "Winter [Explicit]",
    "Chopper (feat. Billy Blue, Buk of Psychodrama, Trouble, Trae Tha Truth, Fam Lay & Glasses Malone) [Explicit]",
    "Deliver [Explicit]",
    "Madonna (And Other Mothers In The Hood) [feat. Nikki Jean] [Explicit]",
    "Adoration Of The Magi (feat. Crystal _Røvél_ Torres) [Explicit]",
    "They.Resurrect.Over.New. (feat. Ab-Soul & Troi) [Explicit]",
    "Spring [Explicit]"
];

    var i = 0;
    var audio = document.getElementById('music');
    audio.setAttribute("src", musicFiles[i]);
    audio.load();
    var trackName = document.getElementById("trackName");
    var trackNumber = document.getElementById("trackNumber");

    trackName.innerHTML = trackNames[i];
    trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;

    audio.onended = function() {
        if (i < 15)
        {
            ++i;

            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.play(); 
        }
        else if (i === 15)
        {
            i = 0;
            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.load(); 
        }
    }

    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById("previous");
    
    function nextTrack()
    {
        if (i < 15)
        {
            ++i;
            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.play(); 
        }
        else if (i === 15)
        {
            i = 0;
            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.play(); 
        }
    }

    function previousTrack()
    {
        if (i > 0)
        {
            --i;
            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.play(); 
        }
        else if (i === 0)
        {
            i = 15;
            trackName.innerHTML = trackNames[i];
            trackNumber.innerHTML = "Now Playing " + (i + 1) + " of " + trackNames.length;
            audio.setAttribute("src", musicFiles[i]);
            audio.play(); 
        }
    }

    nextBtn.addEventListener("click", nextTrack);
    prevBtn.addEventListener("click", previousTrack);