const ts = '1672962897745'
const apikey = 'accc71baf7ca566998e165f2c464d597'
const md5 = 'cf83c6980e274a13eb7cfffdb9d8be54'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${md5}`)
  .then(response => response.json())
  .then(resp => {
    const divChar = document.querySelector('#characters')
    
    resp.data.results.forEach(element => {
      const imgChar = `${element.thumbnail.path}.${element.thumbnail.extension}`
      const nameChar = element.name

      createDiv(divChar, imgChar, nameChar)
    })
  })

function createDiv(div, image, name) {
  const divF = document.createElement('div')
  const textName = document.createElement('p')
  const img = document.createElement('img')

  textName.textContent = name
  img.src = image

  divF.appendChild(img)
  divF.appendChild(textName)
  div.appendChild(divF)
  divF.classList.add('flex')
}