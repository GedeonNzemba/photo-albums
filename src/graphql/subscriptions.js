/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onCreateAlbum(filter: $filter) {
      id
      name
      owner
      photos {
        items {
          id
          bucket
          createdAt
          updatedAt
          albumPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
      photoAlbumId
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onUpdateAlbum(filter: $filter) {
      id
      name
      owner
      photos {
        items {
          id
          bucket
          createdAt
          updatedAt
          albumPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
      photoAlbumId
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onDeleteAlbum(filter: $filter) {
      id
      name
      owner
      photos {
        items {
          id
          bucket
          createdAt
          updatedAt
          albumPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
      photoAlbumId
    }
  }
`;
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onCreatePhoto(filter: $filter) {
      id
      album {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          photoAlbumId
        }
        nextToken
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      createdAt
      updatedAt
      albumPhotosId
    }
  }
`;
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onUpdatePhoto(filter: $filter) {
      id
      album {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          photoAlbumId
        }
        nextToken
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      createdAt
      updatedAt
      albumPhotosId
    }
  }
`;
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onDeletePhoto(filter: $filter) {
      id
      album {
        items {
          id
          name
          owner
          createdAt
          updatedAt
          photoAlbumId
        }
        nextToken
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      createdAt
      updatedAt
      albumPhotosId
    }
  }
`;
