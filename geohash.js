// Função para calcular o Geohash a partir de coordenadas de latitude e longitude
function encodeGeohash(latitude, longitude, precision = 9) {
    const BITS = [16, 8, 4, 2, 1];
    const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
  
    let geohash = '';
    let latRange = [-90, 90];
    let lonRange = [-180, 180];
    let bit = 0;
    let ch = 0;
  
    while (geohash.length < precision) {
      let mid;
      if (bit % 2 === 0) {
        mid = (lonRange[0] + lonRange[1]) / 2;
        if (longitude > mid) {
          ch |= BITS[bit];
          lonRange[0] = mid;
        } else {
          lonRange[1] = mid;
        }
      } else {
        mid = (latRange[0] + latRange[1]) / 2;
        if (latitude > mid) {
          ch |= BITS[bit];
          latRange[0] = mid;
        } else {
          latRange[1] = mid;
        }
      }
  
      if (bit < 4) {
        bit++;
      } else {
        geohash += BASE32[ch];
        bit = 0;
        ch = 0;
      }
    }
  
    return geohash;
  }
  
  // Função para calcular coordenadas a partir de um Geohash
  function decodeGeohash(geohash) {
    const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
    const BITS = [16, 8, 4, 2, 1];
  
    let isEven = true;
    let lat = [-90, 90];
    let lon = [-180, 180];
  
    for (let i = 0; i < geohash.length; i++) {
      let code = BASE32.indexOf(geohash[i]);
      for (let j = 0; j < 5; j++) {
        let mask = BITS[j];
        if (isEven) {
          refineInterval(lon, code, mask);
        } else {
          refineInterval(lat, code, mask);
        }
        isEven = !isEven;
      }
    }
  
    return {
      latitude: (lat[0] + lat[1]) / 2,
      longitude: (lon[0] + lon[1]) / 2
    };
  }
  
  // Função auxiliar para refinar intervalos durante a decodificação
  function refineInterval(interval, code, mask) {
    if (code & mask) {
      interval[0] = (interval[0] + interval[1]) / 2;
    } else {
      interval[1] = (interval[0] + interval[1]) / 2;
    }
  }
  
  // Exemplo de uso
  const latitude = 23.5558;
  const longitude = 46.6396;
  const precision = 6;
  
  const geohash = encodeGeohash(latitude, longitude, precision);
  console.log('Geohash:', geohash);
  
  const decodedCoordinates = decodeGeohash(geohash);
  console.log('Decoded Coordinates:', decodedCoordinates);
  