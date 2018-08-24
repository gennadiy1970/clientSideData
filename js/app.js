window.addEventListener('storage', storageChanged, false);
const box = document.querySelector('.box');

function storageChanged (e) {
    console.log('e.key = ' + e.key);
    console.log('e.oldValue = ' + e.oldValue);
    console.log('e.newValue = ' + e.newValue);
    console.log('e.url = ' + e.url);
    console.log('e.storageArea = ' + e.storageArea);
    box.innerHTML = `
    <table>
    <tr>
        <td>e.key</td>
        <td>${e.key}</td>
    </tr>
    <tr>
        <td>e.oldValue</td>
        <td>${e.oldValue}</td>
    </tr>
    <tr>
        <td>e.newValue</td>
        <td>${e.newValue}</td>
    </tr>
    <tr>
        <td>e.url</td>
        <td>${e.url}</td>
    </tr>
    <tr>
        <td>e.storageArea</td>
        <td>${e.storageArea}</td>
    </tr>
</table>
    `
}