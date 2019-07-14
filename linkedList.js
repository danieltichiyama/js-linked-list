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
    let currentNode = head;
    let nextNode = head.next;
    if (num === 0) {
      return head;
    }
    while (num > 1) {
      if (nextNode.next === null) {
        return false;
      }
      nextNode = nextNode.next;
      currentNode = nextNode;
      num--;
    }

    return nextNode;
  };

  let remove = function(num) {};

  let insert = function(val, num) {};

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}
