// Remove main HTML tag:
document.getElementById('main').remove()

// Add new element with ID of 'victory':
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
// Use innerText instead; test requires innerHTML
newHeader.innerHTML = 'Bobby is the champion!'
newHeader.style.color = 'cyan'
document.body.append(newHeader)