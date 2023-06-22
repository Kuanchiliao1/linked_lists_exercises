const LinkedListFactory = function() {
  let head = NodeFactory(null, null)

  const append = (value) => {
    if (head.nextNode === null) {
      head.nextNode = NodeFactory(value)
    } else {
      let next = head.nextNode
      while (next.nextNode !== null) {
        next = next.nextNode
      }
      next.nextNode = NodeFactory(value)
    }

    // if the head's nextNode is null, then
    // we set its nextNode property
    // if head's nextNode is NOT null, then
    // we go to the next node until we find
    // something that is null
    // next = obj.next1
    // next = next.next1
  }

  const prepend = (value) => {
    const nextNode = head.nextNode
    head.nextNode = NodeFactory(value, nextNode)
  }

  return {
    append,
    head,
    prepend
  }
}

const NodeFactory = (value = null, nextNode = null) => {
  return {
    value,
    nextNode
  }
}

const list = LinkedListFactory()
list.append(200)
list.append(300)
list.append(400)
list.prepend('stuff')


console.log(list.head)