export function urlParse() {
  let ret = {}
  const url = window.location.search
  const reg = /[?&][^?&]+=[^?&]+/g
  const arr = url.match(reg)
  if (arr) {
    arr.forEach((item) => {
      const tempArr = item.substring(1).split('=')
      const key = decodeURIComponent(tempArr[0])
      const val = decodeURIComponent(tempArr[1])
      ret[key] = val
    })
  }
  return ret
}
