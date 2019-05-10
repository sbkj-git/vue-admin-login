import md5 from './MD5'
function getSIGN(urlCode=''){
  var timestamp = Date.parse(new Date())
  var appid="dxwebf0a37ed1ae96deef";
  var accessKey="eU5cO72vwSW3avZdaHpWpKJdT5iEubXu";
  var token = window.sessionStorage.getItem('token')
  var signTemp = `${urlCode}appid=${appid}&accessKey=${accessKey}&timestamp=${timestamp}&token=${token}`
  var stringSignTemp = signTemp.split('&').sort().join('&')
  var sign = md5(stringSignTemp)
  // console.log(stringSignTemp,sign)
 
  return sign
}


export default getSIGN;