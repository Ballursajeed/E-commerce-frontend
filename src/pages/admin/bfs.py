from collections import deque

def bfs(adjList,start):
    visted = set()
    qeue = deque([start])
    
    while qeue:
        node = qeue.popleft()
        if node not in visted:
            print(node, end=" ")
            visted.add(node)
        
        for NG in adjList[node]:
            if NG not in visted:
                qeue.append(NG)
                
adjList = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
print("The BFS traversal starting from vertex 2 is: ")
bfs(adjList,2)