export function imageExists(
  image_url: string,
  callback: (result: boolean) => void,
) {
  const img = new Image()
  img.src = image_url

  if (img.complete) {
    return true
  } else {
    img.onload = () => {
      callback(true)
    }
    img.onerror = () => {
      callback(false)
    }
  }
}
