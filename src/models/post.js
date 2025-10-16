export class PostCreateDto {
  constructor(title = '', content = '', categoryIds = [], tagIds = []) {
    this.title = title
    this.content = content
    this.categoryIds = categoryIds
    this.tagIds = tagIds
  }
}

export class PostUpdateDto {
  constructor(id = 0, title = '', content = '', categoryIds = [], tagIds = []) {
    this.id = id
    this.title = title
    this.content = content
    this.categoryIds = categoryIds
    this.tagIds = tagIds
  }
}

export class PostResponseDto {
  constructor(id = 0, title = '', content = '', categories = [], tags = []) {
    this.id = id
    this.title = title
    this.content = content
    this.categories = categories
    this.tags = tags
  }
}
