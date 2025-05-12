import { useState, useEffect, useRef } from 'react';
import {dijkstra, getNodesInShortestPathOrder} from './dijkstra';
// import {AStar} from '../algorithms/aStar';
// import {dfs} from '../algorithms/dfs';
// import {bfs} from '../algorithms/bfs';
import './pfheader.css' 
import './pfgrid.css' 
import './node.css'

function PathFinder() {
  // STATES
    // GRID 
    const [grid, setGrid] = useState([]);
    const [isClicked, setIsClicked] = useState("");
    // START, END, WALL
    const [startNode, setStartNode] = useState(null)
    const [finishNode, setFinishNode] = useState(null);
    const [obstacles, setObstacles] = useState([]);

    const [startBtnClicked, setStartBtnClicked] = useState(false);
    const [endBtnClicked, setEndBtnClicked] = useState(false);
    const [obstacleBtnClicked, setObstacleBtnClicked] = useState(false);
    const [dragWall, setDragWall] = useState(false);

    // SIZE OF GRID
    const [xAxis, setXAxis] = useState(10) // 45
    const [yAxis, setYAxis] = useState(10) // 25

  // GENERATES GRID
  function generateGrid(maxCol, maxRow) {
    const nodes = [];
      for (let row = 0; row < maxRow; row++) {
        const currentRow = [];

        for (let col = 0; col < maxCol; col++) {
          const currentNode = {
            isWall: false, 
            previousNode: null, 
            distance: Infinity, 
            row, 
            col
          };

          currentRow.push(currentNode);
        }
        nodes.push(currentRow);
      }
    return nodes;
  }
  useEffect(() => {
    setGrid(generateGrid(xAxis, yAxis));
  },[])
  
  // CHECK IF NODE IS CLICKED 
  function clickedNode(xIndex, yIndex) {
    if (startBtnClicked) {
      const node = grid[yIndex][xIndex];
      setStartNode(node);
      setStartBtnClicked(false);
    } else if (endBtnClicked) {
      const node = grid[yIndex][xIndex];
      setFinishNode(node);
      setEndBtnClicked(false);
    } else if (obstacleBtnClicked) {
      // mark in your obstacles array
      setObstacles(prev => [...prev, { xIndex, yIndex }]);
      // also mark in the grid state for your algorithm
      setGrid(prev =>
        prev.map((row, r) =>
          r === yIndex
            ? row.map((node, c) =>
                c === xIndex ? { ...node, isWall: true } : node
              )
            : row
        )
      );
    }
  }
  
  // ANIMATIONS
  function animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i); // EFFECTS SPEED
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (node != startNode && node != finishNode) {
        document.getElementById(`node-${node.col}-${node.row}`).className =
          'node-dark node-visited'; } // CLASSES ADDED TO ANIMATION
      }, 10 * i); // EFFECTS SPEED 
    }
  }
  
  // SHORTEST PATH
  function animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (node != startNode && node != finishNode) { 
        document.getElementById(`node-${node.col}-${node.row}`).className =
          'node-dark node-shortest-path'; } // CLASSES ADDED TO ANIMATION
      }, 50 * i); // EFFECTS SPEED
    }
  }

  function visualizeDijkstra() {
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode); // IMPORTED FUNCTION
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode); // IMPORTED FUNCTION

    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }
  
  // useEffect(() => {
  //   console.log(grid)
  // },[grid])
  
  // CLEARS WALLS
function clearWalls() {
  // When we reset, the old start and finish nodes are not in the new grid.
  // We need to save their coordinates so we can find them in the new grid.
  const oldStart = startNode && { row: startNode.row, col: startNode.col };
  const oldEnd   = finishNode && { row: finishNode.row, col: finishNode.col };

  // 1) brand-new open grid
  const fresh = generateGrid(xAxis, yAxis);
  setGrid(fresh);
  
  const newStart  = oldStart ? fresh[oldStart.row][oldStart.col] : null;
  const newFinish = oldEnd   ? fresh[oldEnd.row][oldEnd.col]     : null;

  // 2) no more obstacles
  setObstacles([]);

  // 3) clear all “mode” flags so clickedNode won’t silently do nothing
  setStartBtnClicked(false);
  setEndBtnClicked(false);
  setObstacleBtnClicked(false);
  setDragWall(false);

  setStartNode(newStart);
  setFinishNode(newFinish);
  
  // 4) clear all the classes on the nodes in the DOM
  document
    .querySelectorAll('.node-dark, .obstacle')
    .forEach(el => { el.className = 'node'; });
}
  
  return (
        <>
          {/* HEADER */}
            <header className='header'>
              <div className='inline'>
                <h1>PATHFINDER</h1>
                  <div>
                    <button 
                    className='btn-header'
                    onClick={() => setStartBtnClicked(true)}>
                      Add Starting Point
                    </button>
                    <button 
                    className='btn-header' 
                    onClick={() => setEndBtnClicked(true)}>
                      Add Ending Point
                      </button>
                    <button 
                    className='btn-header' 
                    onClick={() => setObstacleBtnClicked(true)}>
                      Add Obstacle
                    </button>
                    <button 
                    className='btn-header'
                    onClick={() => clearWalls()}>
                      Reset
                    </button>
                    <label>
                      <select 
                        className='btn-header' 
                        data-testid='select' 
                        onChange={(e) => setIsClicked(e.target.value)} 
                        value={isClicked}>
                          <option value="1">Dijkstra</option>
                          <option value="2">BFS</option>
                          <option value="3">A*</option>
                          <option value="" disabled>Select Algorithm</option>
                      </select>
                    </label>
                    <button className={`btn-header ${isClicked != "" ? "" : "disabled"}`} onClick={() => isClicked == "1" ? visualizeDijkstra() : ''}> 
                      Visualize
                    </button>
                  </div>
              </div>
            </header>
          {/* END HEADER */}

          {/* GRID */}
          <div className='grid-top'>
            <div className='grid'>
                {grid.map((row, yIndex) => {
                  return <div key={yIndex} className='grid-row' data-testid='grid-row'>
                    {row.map((node, xIndex) => {
                      return <div
                      key={`${xIndex}-${yIndex}`}
                      id={`node-${xIndex}-${yIndex}`}
                      onClick={() => clickedNode(xIndex, yIndex)}
                      className={
                        `node
                         ${startNode?.col === xIndex && startNode?.row === yIndex ? ' start-point' : ''}
                         ${finishNode?.col === xIndex && finishNode?.row === yIndex ? ' end-point' : ''}
                         ${obstacles.some(o => o.xIndex === xIndex && o.yIndex === yIndex) ? ' obstacle' : ''}`
                      }>
                    </div>
                    })}
                  </div>
                })}
            </div>
          </div>
          {/* END GRID */}
        </>
    )
}

export default PathFinder;