fetch('https://api.github.com/repos/Hibbiki/chromium-win64/releases/latest')
    .then(res => res.json())
    .then(res => {
        const version = document.getElementById('version-title');
        version.innerText = res.name;
        version.href = res.html_url;
        var versionNumber = version.innerText.split('-r')[0];
        console.log("Latest release is: " + versionNumber)
        res.assets.forEach(asset => {
            if (asset.name.indexOf("mini_installer.sync.exe") == -1) {
                return;
            }
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = asset.browser_download_url;
            a.innerText = "Get Chromium " + versionNumber;
            a.className = 'animate-bounce place-items-center w-fit border-2 border-black hover:bg-gray-300 bg-gray-200 text-md text-black';
            li.appendChild(a);
            document.getElementById('downloads').appendChild(li);
            document.querySelector('#latestRelease').innerText = versionNumber;
            document.querySelector('#version-title').classList = 'invisible';
        });
    });

var x = navigator.appVersion;
var y = x.split('Chrome/')[1];
if (typeof y != 'undefined') {
    y = y.split(' ')[0];
    y = "v" + y;
    console.log("Current release in use is: " + y);
}

var p = document.createElement('p');
p.innerText = y;
p.id = "vers";
document.getElementById('ver').appendChild(p);