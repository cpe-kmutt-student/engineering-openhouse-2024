export const cacheImage = (source: string) => {
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(source)
    img.onerror = () => reject()

    img.src = source
  })
}
