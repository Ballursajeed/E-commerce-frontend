def dfs(adjList,start,visited=None):
    if visited is None:
        visited = set()
        
    visited.add(start)
    print(start,end=' ')
    
    
    for ng in adjList[start]:
        if ng not in visited:
            dfs(adjList,ng,visited)
            
adjList= {
     0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

dfs(adjList,2)
    