/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  let getHead = function() {
    return head;
  };

  let getTail = function() {
    return tail;
  };

  let add = function(val) {
    let newNode = {
      value: val,
      next: null
    };
    if (head === null) {
      head = newNode;
    }
    if (tail !== null) {
      tail.next = newNode;
    }
    tail = newNode;
    return newNode;
  };

  let get = function(num) {
    if (num === 0) {
      return head;
    }

    let parentNode = head;
    let childNode = parentNode.next;
    while (num > 1) {
      if (childNode.next === null) {
        return false;
      }
      childNode = childNode.next;
      num--;
    }

    return childNode;
  };

  let remove = function(num) {
    if (num === 0) {
      head = head.next;
      if (get(num) === false) {
        return false;
      }
    } else {
      let currentNode = get(num);
      if (currentNode === false) {
        return false;
      }

      let previousNode = get(num - 1);

      if (currentNode.next === null) {
        previousNode.next = null;
        currentNode = null;
        tail = previousNode;
        return;
      }
      previousNode.next = currentNode.next;
      currentNode = previousNode.next;
      tail = currentNode;
    }
  };

  let insert = function(val, num) {
    let newNode = {
      value: val,
      next: null
    };

    let currentNode = get(num);
    let previousNode = get(num - 1);

    if (num === 0) {
      let headStorage = head;
      newNode.next = headStorage;
      head = newNode;
    }
    if (num < 0) {
      return false;
    }

    if (get(num) === false) {
      return false;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;
  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}
