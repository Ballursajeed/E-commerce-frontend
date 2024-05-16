def dfs(adjList,starting,visited=None):
    if visited is None:
        visited = set()
        
    visited.add(starting)
    print(starting, end=" ")
    
    for neighbour in adjList[starting]:
        if neighbour not in visited:
            dfs(adjList,neighbour,visited)
            

adjList = {
    0:[1,2],
    2:[1,0,3],
    1:[2],
    3:[2],
}

print("DFS travelsel from the vertex 2 is :")

dfs(adjList,2)


