class Node:
    def __init__(self,key,value):
        self.left, self.right = None, None
        self.key = key
        self.value = value


class LRUCache:

    def __init__(self, capacity: int):
        self.remaining = capacity
        self.data = {}
        # candidates closest to being removed
        self.front = None
        # candidates most recently used
        self.rear = None

    def get(self, key: int) -> int:
        if key in self.data:
            k = self.data[key]
            if k == self.rear: return k.value
            # remove k from the linked list
            if self.front == k: self.front = self.front.right
            if k.left: k.left.right = k.right
            if k.right: k.right.left = k.left
            # put k at the back of the linked list
            k.left = self.rear
            k.right = None
            self.rear.right = k
            self.rear = k
            
            
            return k.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.data:
            k = self.data[key]
            if k == self.rear:
                k.value = value
                return
            # remove k from the linked list
            if self.front == k: self.front = self.front.right
            if k.left: k.left.right = k.right
            if k.right: k.right.left = k.left
            # put k at the back of the linked list
            k.left = self.rear
            k.right = None
            k.value = value
            self.rear.right = k
            self.rear = k
        else:
            n = Node(key,value)
            if self.remaining > 0:
                self.remaining-=1
            else:
                self.data.pop(self.front.key)
                self.front = self.front.right
                if self.front: self.front.left = None
            self.data[key] = n
            if (not self.front):
                self.front = n
                self.rear = n
            else:
                self.rear.right = n
                n.left = self.rear
                self.rear = n


            
                


            
        

        

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)