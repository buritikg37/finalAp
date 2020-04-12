$(document).ready(function(){
  $('.collapsible').collapsible();
});

const fetchData = async (URL) => {
  try {
      const response = await fetch(URL, {})
      const data = await response.json()
      return data
  } catch (error) {
      console.error(error)
  }
}

const API = 'https://www.scorebat.com/video-api/v1/'

const mostrarEquiposFutbol = (EquiposFutbol) => {
  const contenido = document.getElementById('futbol')
  EquiposFutbol.map( (Futbol) => {
      contenido.innerHTML = contenido.innerHTML + `
      <div class="col s12 m4 ">
        <div class="card large">
          <div class="card-image">
            <img src="${Futbol.thumbnail}">
          </div>
          <div class="card-content center">
            <span class="card-title">${Futbol.side1.name}</span>
            <span class="card-title">vs</span>
            <span class="card-title">${Futbol.side2.name}</span>
            <h6>Liga - ${Futbol.competition.name}</h6>
          </div>
          <div class="card-action center">
            <a href="${Futbol.url}">Video-Marcador</a>
          </div>
        </div>
      </div>
      `
  } )
}

const funcionInicial = async () => {
  let datos = await fetchData(API)
  mostrarEquiposFutbol(datos)
  console.log(datos)
}

funcionInicial()

const APISegunda = 'https://www.balldontlie.io/api/v1/teams'

const mostrarEquiposBalocesto = (EquiposBalocesto) => {
  const contenido = document.getElementById('baloncesto')
  EquiposBalocesto.map( (Balocesto) => {
      contenido.innerHTML = contenido.innerHTML + `
      <div class="col s12 m4 ">
        <ul class="collection">
          <li class="collection-item avatar">
            <img src="https://lh3.googleusercontent.com/proxy/JK_6fkgmfPK5PZteD0obkazK_rqH5_n8I0dPe_j6tm5agJ1JTC3jBF_42TnXVfDN2tHlgb6zzXZmpbUPKCcHfuKeIZxQQoNphe9U" alt="" class="circle">
            <span class="title">Name: ${Balocesto.full_name}</span>
            <p>City: ${Balocesto.city}<br>
               Division: ${Balocesto.division}<br>
               Abbreviation: ${Balocesto.abbreviation}
            </p>
            <a class="secondary-content"><i class="material-icons"><img src="https://i.pinimg.com/originals/64/d7/5f/64d75f3f9d741990d5f4397ba39d7d35.png" alt="" width="20"></i></a>
          </li>
        </ul>
      </div>
      `
  } )
}

const funcionSegunda = async () => {
  let datos = await fetchData(APISegunda)
  mostrarEquiposBalocesto(datos.data)
  console.log(datos)
}

funcionSegunda()


