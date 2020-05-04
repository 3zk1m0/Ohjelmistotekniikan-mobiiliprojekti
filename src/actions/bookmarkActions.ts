


export function addBookmark(id) {
  return {
    type: "ADD_BOOKMARK",
    payload: id
  }
}

export function removeBookmark(id) {
  return {
    type: "REMOVE_BOOKMARK",
    payload: id
  }
}