package main

import (
	"fmt"
	"math"
)

type Rectangle struct {
	Width    float64
	Height   float64
	Priority float64
}

func main() {
	rectangles := []Rectangle{
		{2.0, 3.0, 5.0},
		{3.0, 2.0, 4.0},
		{1.0, 4.0, 7.0},
	}

	containerWidth := 5.0

	bestCost, bestSolution := stripPacking(rectangles, containerWidth)

	fmt.Printf("Best Cost: %.2f\n", bestCost)
	fmt.Println("Best Solution:", bestSolution)
}

func stripPacking(rectangles []Rectangle, containerWidth float64) (float64, []int) {
	n := len(rectangles)
	bestCost := math.Inf(1)
	bestSolution := make([]int, n)

	for i := 0; i < (1 << uint(n)); i++ {
		widthSum := 0.0
		heightMax := 0.0
		cost := 0.0
		solution := make([]int, n)

		for j := 0; j < n; j++ {
			if i&(1<<uint(j)) != 0 {
				widthSum += rectangles[j].Width
				if rectangles[j].Height > heightMax {
					heightMax = rectangles[j].Height
				}
				cost += rectangles[j].Priority
				solution[j] = 1
			} else {
				solution[j] = 0
			}
		}

		if widthSum <= containerWidth && cost < bestCost {
			bestCost = cost
			copy(bestSolution, solution)
		}
	}

	return bestCost, bestSolution
}
