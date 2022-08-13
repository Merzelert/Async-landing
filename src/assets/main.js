const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL1ebpFrA3ctG1IK75bqIZaX8TRckw8uqQ&part=snippet&maxResults=50';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '27493717cemsh0c8db3a9564f0ffp13441cjsn78ba1d03f2a6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
        <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
        </div>
        `).slice(0,40).join('')}
    `;
    content.innerHTML = view;
    } catch (error){
        console.error(error);
    }
})();