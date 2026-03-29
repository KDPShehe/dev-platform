export enum ResourceType {
  Template = 'Шаблон',
  Plugin = 'Плагін',
  Course = 'Курс',
  UIKit = 'UI Kit'
}

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface WebResource {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  createdAt: Date;
  type: ResourceType;
  tags: string[];
  author: Author;
}