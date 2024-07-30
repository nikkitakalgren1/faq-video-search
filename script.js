const videos = [
    { title: "Can I create a cartoon custom avatar", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/CanIcreateacartooncustomavatar.mp4" },
    { title: "Can I create a Custom Avatar of a celebrity", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/CanIcreateaCustomAvatarofacelebrity.mp4" },
    { title: "How to create a personal avatar", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/Howtocreateapersonalavatar.mp4" },
    { title: "How to customize a Stock avatar with the Avatar Builder", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/HowtocustomizeaStockavatarwiththeAvatarBuilder.mp4" },
    { title: "How to make two avatar's dialogue with one another", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/Howtomaketwoavatarsdialoguewithoneanother.mp4" },
    { title: "Stock voices and languages", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/Stockvoicesandlanguages.mp4" },
    { title: "What are Synthesia Stock Avatars", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/WhatareSynthesiaStockAvatars.mp4" },
    { title: "What is a Custom Avatar", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/WhatisaCustomAvatar.mp4" },
    { title: "Will my Custom Avatar be available to other users on the system", url: "/Users/nikkita.kalgren/Documents/Knowledge\ Base/Avatars/WillmyCustomAvatarbeavailabletootherusersonthesystem.mp4" },
    // Add more videos here
];

document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const video = videos.find(v => v.title.toLowerCase().includes(query));
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous video

    if (video) {
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        videoElement.src = video.url;
        videoContainer.appendChild(videoElement);
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }
});
