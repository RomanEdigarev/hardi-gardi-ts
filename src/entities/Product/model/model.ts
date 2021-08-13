// Alias type
type Price = string | number
type ImgPath = string
type Article = string | number

export type Product = {
    title: string,
    article: Article,
    currentPrice: Price,
    prevPrice: Price,
    description: string,
    img: ImgPath,
    isFavorite: boolean
}