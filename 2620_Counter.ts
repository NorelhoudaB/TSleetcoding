function createCounter(n: number): () => number {
    if (n < -1000 || n > 1000) throw new Error("n out of range");
    return function() {
        return n++;
    }
}
