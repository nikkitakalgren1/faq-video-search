const videos = [
    { title: "Can I create a cartoon custom avatar", url: "/videos/CanIcreateacartooncustomavatar.mp4" },
    { title: "Can I create a Custom Avatar of a celebrity", url: "/videos/CanIcreateaCustomAvatarofacelebrity.mp4" },
    { title: "How to create a personal avatar", url: "/videos/Howtocreateapersonalavatar.mp4" },
    { title: "How to customize a Stock avatar with the Avatar Builder", url: "/videos/HowtocustomizeaStockavatarwiththeAvatarBuilder.mp4" },
    { title: "How to make two avatar's dialogue with one another", url: "/videos/Howtomaketwoavatarsdialoguewithoneanother.mp4" },
    { title: "Stock voices and languages", url: "/videos/Stockvoicesandlanguages.mp4" },
    { title: "What are Synthesia Stock Avatars", url: "/videos/WhatareSynthesiaStockAvatars.mp4" },
    { title: "What is a Custom Avatar", url: "/videos/WhatisaCustomAvatar.mp4" },
    { title: "Will my Custom Avatar be available to other users on the system", url: "/videos/WillmyCustomAvatarbeavailabletootherusersonthesystem.mp4" },
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
