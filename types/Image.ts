class Image {
  url: string[]
  description: string
  alt: string
  uploadDate: Date | null
  displaySource?: string
  height: number
  dataHigherWide: boolean | string
  pageSource?: string

  constructor(params: {
    url: string[]
    description: string
    alt: string
    uploadDate: Date | null
    displaySource?: string
    height?: number
    dataHigherWide: boolean | string
    pageSource?: string
  }) {
    this.url = params.url
    this.description = params.description
    this.alt = params.alt
    this.uploadDate = params.uploadDate
    this.displaySource = params.displaySource
    this.height = params.height || 150
    this.dataHigherWide = params.dataHigherWide
    this.pageSource = params.pageSource
  }

  getDisplaySource() {
    return this.displaySource || this.url
  }
}

export default Image
