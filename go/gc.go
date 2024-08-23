package main

import (
	"fmt"
	"runtime"
	"runtime/debug"
	"sync"
	"time"
)

func main() {
	start := time.Now()
	var wg sync.WaitGroup

	debug.SetGCPercent(10)

	wg.Add(1)
	go printMemStats(&wg)

	wg.Add(1)
	go allocate(4096*1000000, 10, &wg)

	wg.Wait()
	wg.Add(1)
	go printMemStats(&wg)

	wg.Wait()

	elapsed := time.Since(start)

	// Print the elapsed time
	fmt.Printf("Time taken: %s\n", elapsed)

}

func printMemStats(wg *sync.WaitGroup) {
	defer wg.Done()
	var memStats runtime.MemStats
	runtime.ReadMemStats(&memStats)

	fmt.Printf("Allocated memory: %v bytes\n", memStats.Alloc)

	fmt.Printf("Number of GC cycles: %v\n", memStats.NumGC)

}

func allocate(size int, max int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < max; i++ {
		_ = make([]byte, size)

	}

	fmt.Println("Memory allocation done")
}
