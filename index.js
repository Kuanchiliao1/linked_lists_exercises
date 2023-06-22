const LinkedListFactory = function(headValue = null) {
  let head = NodeFactory(headValue)

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

  const length = () => {
    let count = 1
    let currentNode = head
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
      count++
    }

    return count
  }

  const prepend = (value) => {
    const nextNode = head.nextNode
    head.nextNode = NodeFactory(value, nextNode)
  }

  const tail = () => {
    let currentNode = head
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    
    return currentNode
  }

  const at = (index) => {
    if (index === 0) return head
    let counter = 0;
    let currentNode = head;

    while (currentNode.nextNode !== null) {
      counter++
      currentNode = currentNode.nextNode
      
      if (counter === index) {
        return currentNode
      }
    }
    

    return "not found!"
  }

  const pop = () => {
    const endIndex = length() - 2
    at(endIndex).nextNode = null
    return at(endIndex)
  }

  const contains = (value) => {
    for (let i = 0; i < length(); i++) {
      if (at(i).value === value) return true
      console.log('list', at(i))
    }
    return false
  }

  return {
    append,
    head,
    prepend,
    length,
    tail,
    at,
    pop,
    contains
  }
}

const NodeFactory = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  }
}

const list = LinkedListFactory('head!')
list.prepend('3')
list.prepend('2')
list.prepend('1')


console.log(list.head)
console.log(list.length())
console.log(list.at(0))
console.log(list.head)
console.log(list.contains(3))